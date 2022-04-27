import { Box, Flex, Paragraph } from 'theme-ui';
import PaymentItemCard from './PaymentItem';

export const PaymentList = ({ payments }) => {
  if (!payments || !payments.length) {
    return <Paragraph>No payments to display!</Paragraph>;
  }
  return (
    <Flex as="ul" sx={{ flexDirection: 'column', listStyleType: 'none', padding: 0 }}>
      {payments.map((payment) => (
        <Box
          as="li"
          key={payment.id}
          sx={{ marginBottom: '1rem', borderBottom: '1px solid', borderBlockColor: '#ccc', borderRadius: 0 }}
        >
          <PaymentItemCard payment={payment} />
        </Box>
      ))}
    </Flex>
  );
};

export default PaymentList;
