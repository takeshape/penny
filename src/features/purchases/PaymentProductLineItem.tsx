import ProductImage from 'features/products/ProductImage';
import NextLink from 'next/link';
import { Box, Card, Flex, Grid, Heading, Link } from 'theme-ui';
import { formatPrice } from 'utils/text';

export interface PaymentProductLineItemProps {
  id: string;
  name: string;
  description: string;
  images?: string[];
  amount: number;
  currency: string;
  quantity: number;
}

export const PaymentProductLineItem = ({
  id,
  name,
  images,
  quantity,
  amount,
  currency
}: PaymentProductLineItemProps) => {
  return (
    <Card sx={{ height: '100%', cursor: 'pointer', p: 0 }}>
      <NextLink href={`/product/${id}`} passHref>
        <Grid gap={2} columns={['1fr 2fr 1fr']}>
          <Box sx={{ textAlign: 'left' }}>
            <Link sx={{ display: 'inline-block' }}>
              <ProductImage maxHeight="30px" images={images} />
            </Link>
          </Box>
          <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'left' }}>
            <Heading sx={{ margin: '0', fontSize: '1em', lineHeight: '1' }}>
              <Link sx={{ color: '#333', ':hover': { color: 'primary' }, textDecoration: 'none' }}>
                {quantity} x {name}
              </Link>
            </Heading>
          </Flex>
          <Box sx={{ textAlign: 'right' }}>{formatPrice(currency, amount)}</Box>
        </Grid>
      </NextLink>
    </Card>
  );
};

export default PaymentProductLineItem;
