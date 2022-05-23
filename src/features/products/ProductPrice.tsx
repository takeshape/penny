import { Box, Text } from 'theme-ui';
import { ProductPriceOption } from 'types/product';
import { formatPrice, pluralizeText } from 'utils/text';

export interface ProductPriceProps {
  price: ProductPriceOption;
  quantity: number;
}

export const ProductPrice = ({ price, quantity }: ProductPriceProps) => {
  quantity = quantity ?? 1;

  const recurringText = price.intervalCount > 0 && (
    <Text as="p" variant="styles.membershipTerm" sx={{ lineHeight: 0 }}>
      per {pluralizeText(price.intervalCount, price.interval, `${price.interval}s`)}
    </Text>
  );

  return (
    <Box sx={{ fontWeight: 'bold', fontSize: '1.3em', lineHeight: '1.8', color: 'text' }}>
      {formatPrice(price.currencyCode, price.amount * quantity)} {recurringText}
    </Box>
  );
};

export default ProductPrice;
