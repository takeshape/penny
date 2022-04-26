import { Page } from 'components/layout';
import { ProductAddToCart, ProductImage } from 'components/product';
import { ReviewList } from 'components/reviews';
import { createApolloClient } from 'lib/apollo';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'lib/config';
import { GetProduct, GetProductArgs, GetProductResponse, GetStripeProducts, StripeProducts } from 'lib/queries';
import { getSingle } from 'lib/utils/types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Paragraph } from 'theme-ui';
import type {
  ReviewsIo_ListProductReviewsResponseStatsProperty,
  ReviewsIo_ProductReview,
  Stripe_Product
} from 'types/takeshape';

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
    <Page>
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
    </Page>
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
