import ProductImage from 'features/products/StripeProductImage';
import NextLink from 'next/link';
import { Box, Card, Flex, Grid, Heading, Link } from 'theme-ui';
import { formatPrice } from 'utils/text';
import { Shopify_CurrencyCode, Shopify_LineItem } from '../../types/takeshape';

export interface PaymentProductLineItemProps {
  currencyCode: Shopify_CurrencyCode;
  lineItem: Shopify_LineItem;
}

export const PaymentProductLineItem = ({
  currencyCode,
  lineItem: { id, image, name, quantity }
}: PaymentProductLineItemProps) => {
  return (
    <Card sx={{ height: '100%', cursor: 'pointer', p: 0 }}>
      <NextLink href={`/product/${id}`} passHref>
        <Grid gap={2} columns={['1fr 2fr 1fr']}>
          <Box sx={{ textAlign: 'left' }}>
            <Link sx={{ display: 'inline-block' }}>
              <ProductImage maxHeight="30px" images={[image.url]} />
            </Link>
          </Box>
          <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
            <Heading sx={{ margin: '0', fontSize: '1em', lineHeight: '1' }}>
              <Link sx={{ color: '#333', ':hover': { color: 'primary' }, textDecoration: 'none' }}>
                {quantity} x {name}
              </Link>
            </Heading>
          </Flex>
          <Box sx={{ textAlign: 'right' }}>{formatPrice(currencyCode, 0)}</Box>
        </Grid>
      </NextLink>
    </Card>
  );
};

export default PaymentProductLineItem;
