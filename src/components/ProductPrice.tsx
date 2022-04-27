import { formatPrice, pluralizeText } from 'lib/utils/text';
import { Box, Text } from 'theme-ui';
import type { Stripe_Price } from 'types/takeshape';

export interface ProductPriceProps {
  price: Stripe_Price;
  quantity: number;
}

export const ProductPrice = ({ price, quantity }: ProductPriceProps) => {
  quantity = quantity ?? 1;

  const recurringText = price.recurring && (
    <Text as="p" variant="styles.membershipTerm" sx={{ lineHeight: 0 }}>
      per {pluralizeText(price.recurring.interval_count, price.recurring.interval, `${price.recurring.interval}s`)}
    </Text>
  );

  return (
    <Box sx={{ fontWeight: 'bold', fontSize: '1.3em', lineHeight: '1.8', color: 'text' }}>
      {formatPrice(price.currency, price.unit_amount * quantity)} {recurringText}
    </Box>
  );
};

export default ProductPrice;
