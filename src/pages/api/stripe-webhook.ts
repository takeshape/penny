import { siteUrl, stripeSecretKey, stripeWebhookSecret, takeshapeApiUrl, takeshapeWebhookApiKey } from 'config';
import logger from 'logger';
import { buffer } from 'micro';
import type { NextApiHandler, NextConfig } from 'next';
import { CreateInvitation, CreateLoyaltyCardOrder } from 'queries';
import Stripe from 'stripe';
import type { SetRequired } from 'type-fest';
import type {
  MutationVoucherify_CreateOrderArgs,
  ReviewsIo_CreateInvitationPropertiesPropertyInput,
  ReviewsIo_CreateInvitationResponse,
  ReviewsIo_InvitationProductInput,
  Voucherify_Order,
  Voucherify_OrderItemInput
} from 'types/takeshape';
import { createStaticClient } from 'utils/apollo/client';

const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });
const apolloClient = createStaticClient({ uri: takeshapeApiUrl, accessToken: takeshapeWebhookApiKey });

function isValidShippingAddress(
  address: Stripe.Address
): address is SetRequired<Stripe.Address, 'city' | 'country' | 'line1' | 'postal_code' | 'state'> {
  return Boolean(address.line1 && address.city && address.state && address.postal_code && address.country);
}

export const config: NextConfig = {
  api: {
    bodyParser: false
  }
};

async function handleReviews(customer: Stripe.Customer, session: Stripe.Checkout.Session) {
  try {
    const products = session.line_items.data.map((lineItem): ReviewsIo_InvitationProductInput => {
      const product = lineItem.price.product as Stripe.Product;
      return {
        sku: product.id,
        name: product.name,
        description: product.description ?? '',
        pageUrl: `https://${siteUrl}/${product.id}`,
        image: product.images[0] ?? ''
      };
    });

    const response = await apolloClient.mutate<
      ReviewsIo_CreateInvitationResponse,
      ReviewsIo_CreateInvitationPropertiesPropertyInput
    >({
      mutation: CreateInvitation,
      variables: {
        name: customer.name ?? 'Checkout Customer',
        email: customer.email,
        order_id: session.payment_intent as string,
        template_id: '47970',
        products
      }
    });

    return response;
  } catch (err) {
    return { errors: [err.message] };
  }
}

async function handleLoyaltyCard(customer: Stripe.Customer, session: Stripe.Checkout.Session) {
  try {
    const items = session.line_items.data.map((lineItem): Voucherify_OrderItemInput => {
      const product = lineItem.price.product as Stripe.Product;
      return {
        id: product.id,
        name: product.name,
        quantity: lineItem.quantity,
        price: lineItem.amount_subtotal
      };
    });

    const response = await apolloClient.mutate<{ order: Voucherify_Order }, MutationVoucherify_CreateOrderArgs>({
      mutation: CreateLoyaltyCardOrder,
      variables: {
        email: customer.email,
        amount: session.amount_subtotal,
        status: 'PAID',
        items
      }
    });

    return response;
  } catch (err) {
    return { errors: [err.message] };
  }
}

const handler: NextApiHandler = async (req, res) => {
  const { headers } = req;

  const stripeSignature = headers['stripe-signature'];
  const buf = await buffer(req);
  const event = stripe.webhooks.constructEvent(buf.toString(), stripeSignature, stripeWebhookSecret);

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;

        const { payment_status } = session;

        if (payment_status !== 'paid') {
          logger.warn('Session not paid');
          break;
        }

        const maybeCustomer = await stripe.customers.retrieve(session.customer as string);

        if (maybeCustomer.deleted || !(maybeCustomer as Stripe.Customer).email) {
          logger.warn('No valid customer');
          break;
        }

        const customer = maybeCustomer as Stripe.Customer;

        const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ['line_items', 'line_items.data.price.product']
        });

        const tasks = [];

        tasks.push(handleReviews(customer, fullSession));
        tasks.push(handleLoyaltyCard(customer, fullSession));

        const results = await Promise.all(tasks);

        logger.info(`Handled event type ${event.type}`, { results });

        res.status(200).json({
          data: {
            reviews: results[0],
            loyaltyCard: results[1],
            shipping: results[2]
          }
        });
        break;
      default:
        logger.info(`Unhandled event type ${event.type}`);
        res.status(200).json({ data: null });
    }
    return;
  } catch (err) {
    logger.error(err);
    res.status(500).json({ errors: [err.message] });
  }
};

export default handler;
