import { Box, Flex, Paragraph } from 'theme-ui';
import type { Shopify_Order } from 'types/takeshape';
import PaymentItemCard from './PaymentItem';
export interface PaymentListProps {
  orders: Shopify_Order[];
}

export const PaymentList = ({ orders }: PaymentListProps) => {
  if (!orders || !orders.length) {
    return <Paragraph>No orders to display!</Paragraph>;
  }
  return (
    <Flex as="ul" sx={{ flexDirection: 'column', listStyleType: 'none', padding: 0 }}>
      {orders.map((order) =>
        order.fulfillments.map((fulfillment) => (
          <Box
            as="li"
            key={fulfillment.id}
            sx={{ marginBottom: '1rem', borderBottom: '1px solid', borderBlockColor: '#ccc', borderRadius: 0 }}
          >
            <PaymentItemCard currencyCode={order.currencyCode} fulfillment={fulfillment} />
          </Box>
        ))
      )}
    </Flex>
  );
};

export default PaymentList;
