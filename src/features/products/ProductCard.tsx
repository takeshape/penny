import NextLink from 'next/link';
import { Box, Card, Flex, Heading, Link } from 'theme-ui';
import type { Product } from 'types/product';
import ProductAddToCart from './ProductAddToCart';
import ProductImage from './ProductImage';
export interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, variants, featuredImage } = product;

  if (!variants.length) {
    return null;
  }

  return (
    <Card sx={{ height: '100%' }}>
      <Flex sx={{ height: '100%', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ minWidth: '8em' }}>
          <NextLink href={`/product/${product.id}`} passHref>
            <Link>
              <ProductImage maxHeight="300px" image={featuredImage} />
            </Link>
          </NextLink>
        </Box>
        <Flex sx={{ flex: '1 1 auto', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Heading sx={{ margin: '.5rem 0', fontSize: '2em', lineHeight: '1' }}>
            <NextLink href={`/product/${product.id}`} passHref>
              <Link sx={{ color: 'inherit', ':hover': { color: 'primary' }, textDecoration: 'none' }}>{name}</Link>
            </NextLink>
          </Heading>
          <ProductAddToCart product={product} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductCard;
