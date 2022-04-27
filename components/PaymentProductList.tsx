import { Box, Card } from 'theme-ui';
import type { PaymentProductLineItemProps } from './PaymentProductLineItem';
import PaymentProductLineItem from './PaymentProductLineItem';

export interface PaymentProductListProps {
  lineItems: PaymentProductLineItemProps[];
}

export const PaymentProductList = ({ lineItems }: PaymentProductListProps) => {
  return (
    <Card sx={{ p: 0 }}>
      {lineItems.map((line) => {
        return (
          <Box key={line.id} sx={{ px: 0, py: 2 }}>
            <PaymentProductLineItem {...line} />
          </Box>
        );
      })}
    </Card>
  );
};

export default PaymentProductList;
