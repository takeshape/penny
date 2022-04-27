import { Badge, Flex } from 'theme-ui';

export interface PaymentItemOrderStatusProps {
  status: 'unknown' | 'in_transit' | 'delivered' | 'error';
  trackingNumber?: string | null;
}

export const PaymentItemOrderStatus = ({ status, trackingNumber }: PaymentItemOrderStatusProps) => {
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

export default PaymentItemOrderStatus;
