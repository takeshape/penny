import { formatPrice, pluralizeText } from 'lib/utils/text';
import { Box, Text } from 'theme-ui';

export const ProductPrice = ({ price, quantity }) => {
  quantity = quantity ?? 1;

  const recurringText = price.recurring && (
    <Text as="p" variant="styles.membershipTerm" sx={{ lineHeight: 0 }}>
      per {pluralizeText(price.recurring.intervalCount, price.recurring.interval, `${price.recurring.interval}s`)}
    </Text>
  );

  return (
    <Box sx={{ fontWeight: 'bold', fontSize: '1.3em', lineHeight: '1.8', color: 'text' }}>
      {formatPrice(price.currency, price.unitAmount * quantity)} {recurringText}
    </Box>
  );
};

export default ProductPrice;
