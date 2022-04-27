import { format } from 'date-fns';
import { formatPrice } from 'lib/utils/text';
import NextLink from 'next/link';
import { Badge, Box, Card, Flex, Grid, Heading, Link, Paragraph } from 'theme-ui';
import type { Stripe_Invoiceitem, Stripe_Item, Stripe_PaymentIntent } from 'types/takeshape';
import ProductImage from './ProductImage';

export interface OrderStatusProps {
  status: 'unknown' | 'in_transit' | 'delivered' | 'error';
  trackingNumber?: string | null;
}

export const OrderStatus = ({ status, trackingNumber }: OrderStatusProps) => {
  const statusMap = {
    unknown: {
      text: 'Processing',
      color: 'gray'
    },
    in_transit: {
      text: 'Shipped',
      color: 'green'
    },
    delivered: {
      text: 'Delivered',
      color: 'purple'
    },
    error: {
      text: 'Error',
      color: 'red'
    }
  };

  const statusObj = statusMap[status];

  return (
    <Flex sx={{ gap: '.5rem' }}>
      <Badge py={1} px={2} backgroundColor={statusObj.color}>
        {statusObj.text}
      </Badge>
      {trackingNumber && (
        <Badge py={1} px={2} backgroundColor={statusObj.color}>
          {trackingNumber}
        </Badge>
      )}
    </Flex>
  );
};

export interface ProductLineItemProps {
  id: string;
  name: string;
  description: string;
  images?: string[];
  amount: number;
  currency: string;
  quantity: number;
}

const ProductLineItem = ({ id, name, images, quantity, amount, currency }: ProductLineItemProps) => {
  return (
    <Card sx={{ height: '100%', cursor: 'pointer', p: 0 }}>
      <NextLink href={`/product/${id}`} passHref>
        <Grid gap={2} columns={['1fr 2fr 1fr']}>
          <Box sx={{ textAlign: 'left' }}>
            <Link sx={{ display: 'inline-block' }}>
              <ProductImage maxHeight="30px" images={images} />
            </Link>
          </Box>
          <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
            <Heading sx={{ margin: '0', fontSize: '1em', lineHeight: '1' }}>
              <Link sx={{ color: '#333', ':hover': { color: 'primary' }, textDecoration: 'none' }}>
                {quantity} x {name}
              </Link>
            </Heading>
          </Flex>
          <Box sx={{ textAlign: 'right' }}>{formatPrice(currency, amount)}</Box>
        </Grid>
      </NextLink>
    </Card>
  );
};

export interface ProductListProps {
  lineItems: ProductLineItemProps[];
}

const ProductList = ({ lineItems }: ProductListProps) => {
  return (
    <Card sx={{ p: 0 }}>
      {lineItems.map((line) => {
        return (
          <Box key={line.id} sx={{ px: 0, py: 2 }}>
            <ProductLineItem {...line} />
          </Box>
        );
      })}
    </Card>
  );
};

function isStripeInvoice(maybe: unknown): maybe is Stripe_Invoiceitem {
  return (maybe as Stripe_Invoiceitem[])?.[0]?.object === 'invoiceitem';
}

function getLineItems(invoiceOrSession: Stripe_Invoiceitem[] | Stripe_Item[]): ProductLineItemProps[] | undefined {
  if (isStripeInvoice(invoiceOrSession)) {
    return invoiceOrSession?.map((line) => ({
      id: line.price.product.id,
      name: line.price.product.name,
      description: line.price.product.description,
      images: line.price.product.images,
      amount: line.amount,
      currency: line.currency,
      quantity: line.quantity
    }));
  }

  return invoiceOrSession?.map((line) => ({
    id: line.price.product.id,
    name: line.price.product.name,
    description: line.price.product.description,
    images: line.price.product.images,
    amount: line.amount_total,
    currency: line.currency,
    quantity: line.quantity
  }));
}

export const PaymentItem = ({
  payment: { created, invoiceItems, currency, amount, sessionItems, shipment }
}: {
  payment: Stripe_PaymentIntent;
}) => {
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
      <Box>{lineItems && <ProductList lineItems={lineItems} />}</Box>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <OrderStatus
          status={(shipment?.tracking_status ?? 'unknown') as OrderStatusProps['status']}
          trackingNumber={shipment?.tracking_number}
        />
        <Paragraph>{formatPrice(currency, amount)}</Paragraph>
      </Flex>
    </Card>
  );
};

export default PaymentItem;
