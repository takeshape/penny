import { format } from 'date-fns';
import { Box, Card, Flex, Paragraph } from 'theme-ui';
import type { Shopify_CurrencyCode, Shopify_Fulfillment } from 'types/takeshape';
import { formatPrice } from 'utils/text';
import PaymentItemOrderStatus from './PaymentItemOrderStatus';
import PaymentProductList from './PaymentProductList';

export interface PaymentItemProps {
  currencyCode: Shopify_CurrencyCode;
  fulfillment: Shopify_Fulfillment;
}

export const PaymentItem = ({
  currencyCode,
  fulfillment: { createdAt, displayStatus, fulfillmentLineItems, trackingInfo }
}: PaymentItemProps) => {
  return (
    <Card sx={{ width: '100%' }}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Paragraph variant="smallHeading" sx={{ lineHeight: '2' }}>
          {format(new Date(createdAt), 'PP')}
        </Paragraph>
      </Flex>
      <Box>
        <PaymentProductList currencyCode={currencyCode} lineItems={fulfillmentLineItems} />
      </Box>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <PaymentItemOrderStatus status={displayStatus} trackingNumber={trackingInfo[0]?.number} />
        <Paragraph>{formatPrice(currencyCode, 0)}</Paragraph>
      </Flex>
    </Card>
  );
};

export default PaymentItem;
