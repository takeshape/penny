import { Box, Grid, Paragraph } from 'theme-ui';
import ProductCard from './card';

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
