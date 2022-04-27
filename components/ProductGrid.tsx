import { Box, Grid, Paragraph } from 'theme-ui';
import type { Stripe_Product } from 'types/takeshape';
import ProductCard from './ProductCard';

export interface ProductGridProps {
  products: Stripe_Product[];
}

export const ProductGrid = ({ products }) => {
  return (
    <>
      {products.length ? (
        <Grid sx={{ gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))', alignItems: 'start' }}>
          {products.map((product) => (
            <Box key={product.id} sx={{ height: '100%' }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Grid>
      ) : (
        <Paragraph>No products to display!</Paragraph>
      )}
    </>
  );
};

export default ProductGrid;
