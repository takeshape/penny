import getCommonQueryCache from 'data/getCommonQueryCache';
import PageLayout from 'features/layout/Page';
import ProductAddToCart from 'features/products/ProductAddToCart';
import ProductImage from 'features/products/ProductImage';
import ReviewList from 'features/reviews/ReviewList';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetProduct, GetProductArgs, GetProductResponse, GetStripeProducts, StripeProducts } from 'queries';
import { addQueryCache, createStaticClient } from 'services/apollo/apolloClient';
import { Box, Flex, Heading, Paragraph } from 'theme-ui';
import type {
  ReviewsIo_ListProductReviewsResponseStatsProperty,
  ReviewsIo_ProductReview,
  Stripe_Product
} from 'types/takeshape';
import { getSingle } from 'utils/types';

interface ProductPageProps {
  product: Stripe_Product;
  reviews: ReviewsIo_ProductReview[] | null;
  stats: ReviewsIo_ListProductReviewsResponseStatsProperty | null;
}

const ProductPage: NextPage<ProductPageProps> = (props) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { product, reviews, stats } = props;

  return (
    <PageLayout>
      <Heading as="h2" variant="styles.pageTitle">
        {product.name}
      </Heading>
      <Flex sx={{ margin: '2rem 0', gap: '2rem' }}>
        <Box sx={{ flex: '1 1 32rem' }}>
          <ProductImage images={product.images} maxHeight="600px" />
        </Box>
        <Flex sx={{ flex: '1 1 24rem', flexDirection: 'column' }}>
          <ProductAddToCart product={product} />
          <Paragraph sx={{ textAlign: 'left' }}>{product.description}</Paragraph>
          <Box sx={{ fontSize: '.8em' }}>
            <ReviewList reviews={reviews} stats={stats} />
          </Box>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const id = getSingle(params.id);
  const apolloClient = createStaticClient();

  const {
    data: { product, reviews }
  } = await apolloClient.query<GetProductResponse, GetProductArgs>({
    query: GetProduct,
    variables: { id }
  });

  const commonQueryCache = await getCommonQueryCache();

  return addQueryCache(apolloClient, commonQueryCache, {
    props: {
      product,
      reviews: reviews.reviews.data ?? null,
      stats: reviews.stats ?? null
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = createStaticClient();

  const { data } = await apolloClient.query<StripeProducts>({
    query: GetStripeProducts
  });

  const paths = data.products.items.map((product) => ({
    params: { id: product.id }
  }));

  return {
    paths,
    fallback: true
  };
};

export default ProductPage;
