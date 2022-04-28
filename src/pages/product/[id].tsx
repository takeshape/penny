import PageLayout from 'components/PageLayout';
import ProductAddToCart from 'components/ProductAddToCart';
import ProductImage from 'components/ProductImage';
import ReviewList from 'components/ReviewList';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetProduct, GetProductArgs, GetProductResponse, GetStripeProducts, StripeProducts } from 'queries';
import { createApolloClient } from 'services/apollo/client';
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
          <ProductImage images={product.images} />
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

export const getStaticProps: GetStaticProps<ProductPageProps> = async (context) => {
  const { params } = context;
  const id = getSingle(params.id);
  const client = createApolloClient(takeshapeApiUrl, () => takeshapeAnonymousApiKey);
  const {
    data: { product, reviews }
  } = await client.query<GetProductResponse, GetProductArgs>({
    query: GetProduct,
    variables: { id }
  });
  return {
    props: {
      product,
      reviews: reviews.reviews.data ?? null,
      stats: reviews.stats ?? null
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createApolloClient(takeshapeApiUrl, () => takeshapeAnonymousApiKey);
  const { data } = await client.query<StripeProducts>({
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
