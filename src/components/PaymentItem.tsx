import { format } from 'date-fns';
import { Box, Card, Flex, Paragraph } from 'theme-ui';
import type { Stripe_Invoiceitem, Stripe_Item, Stripe_PaymentIntent } from 'types/takeshape';
import { formatPrice } from 'utils/text';
import { isStripeInvoiceitemArray } from 'utils/types';
import type { PaymentItemOrderStatusProps } from './PaymentItemOrderStatus';
import PaymentItemOrderStatus from './PaymentItemOrderStatus';
import type { PaymentProductLineItemProps } from './PaymentProductLineItem';
import PaymentProductList from './PaymentProductList';

function getLineItems(
  invoiceOrSession: Stripe_Invoiceitem[] | Stripe_Item[]
): PaymentProductLineItemProps[] | undefined {
  if (isStripeInvoiceitemArray(invoiceOrSession)) {
    return invoiceOrSession.map((invoiceitem) => ({
      id: invoiceitem.price.product.id,
      name: invoiceitem.price.product.name,
      description: invoiceitem.price.product.description,
      images: invoiceitem.price.product.images,
      amount: invoiceitem.amount,
      currency: invoiceitem.currency,
      quantity: invoiceitem.quantity
    }));
  }

  if (invoiceOrSession) {
    return invoiceOrSession.map((line) => ({
      id: line.price.product.id,
      name: line.price.product.name,
      description: line.price.product.description,
      images: line.price.product.images,
      amount: line.amount_total,
      currency: line.currency,
      quantity: line.quantity
    }));
  }
}

export interface PaymentItemProps {
  payment: Stripe_PaymentIntent;
}

export const PaymentItem = ({
  payment: { created, invoiceItems, currency, amount, sessionItems, shipment }
}: PaymentItemProps) => {
  // Only subscriptions will have `session`, and one-off purchases will only have `session`.
  // We get the same data from both, so we collapse here, preferring the `invoice`.
  const lineItems = getLineItems(invoiceItems.length ? invoiceItems : sessionItems);

  return (
    <Card sx={{ width: '100%' }}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Paragraph variant="smallHeading" sx={{ lineHeight: '2' }}>
          {format(created * 1000, 'PP')}
        </Paragraph>
      </Flex>
      <Box>{lineItems && <PaymentProductList lineItems={lineItems} />}</Box>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <PaymentItemOrderStatus
          status={(shipment?.tracking_status ?? 'unknown') as PaymentItemOrderStatusProps['status']}
          trackingNumber={shipment?.tracking_number}
        />
        <Paragraph>{formatPrice(currency, amount)}</Paragraph>
      </Flex>
    </Card>
  );
};

export default PaymentItem;
