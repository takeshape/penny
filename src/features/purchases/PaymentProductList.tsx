import { Box, Card } from 'theme-ui';
import { Shopify_CurrencyCode, Shopify_FulfillmentLineItemConnection } from '../../types/takeshape';
import PaymentProductLineItem from './PaymentProductLineItem';

export interface PaymentProductListProps {
  currencyCode: Shopify_CurrencyCode;
  lineItems: Shopify_FulfillmentLineItemConnection;
}

export const PaymentProductList = ({ currencyCode, lineItems }: PaymentProductListProps) => {
  return (
    <Card sx={{ p: 0 }}>
      {lineItems.edges.map((edge) => {
        return (
          <Box key={edge.node.id} sx={{ px: 0, py: 2 }}>
            <PaymentProductLineItem currencyCode={currencyCode} lineItem={edge.node.lineItem} />
          </Box>
        );
      })}
    </Card>
  );
};

export default PaymentProductList;
