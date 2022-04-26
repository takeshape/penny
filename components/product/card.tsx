import NextLink from 'next/link';
import { Box, Card, Flex, Heading, Link } from 'theme-ui';
import AddToCart from './add-to-cart';
import ProductImage from './image';

export const ProductCard = ({ product }) => {
  const { name, prices, description, images } = product;

  if (!prices.length) {
    return null;
  }

  return (
    <Card sx={{ height: '100%' }}>
      <Flex sx={{ height: '100%', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ minWidth: '8em' }}>
          <NextLink href={`/product/${product.id}`} passHref>
            <Link>
              <ProductImage maxHeight="300px" images={images} />
            </Link>
          </NextLink>
        </Box>
        <Flex sx={{ flex: '1 1 auto', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Heading sx={{ margin: '.5rem 0', fontSize: '2em', lineHeight: '1' }}>
            <NextLink href={`/product/${product.id}`} passHref>
              <Link sx={{ color: 'inherit', ':hover': { color: 'primary' }, textDecoration: 'none' }}>{name}</Link>
            </NextLink>
          </Heading>
          <AddToCart product={product} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductCard;
