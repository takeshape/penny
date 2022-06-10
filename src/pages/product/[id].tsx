import PageLoader from 'components/PageLoader';
import Wrapper from 'components/Wrapper/Content';
import Product from 'features/ProductPage/Product/Product';
import Reviews from 'features/ProductPage/Reviews/Reviews';
import RelatedProductsFromShopify from 'features/RelatedProducts/RelatedProductsFromShopify';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import type { GetProductArgs, GetProductIdsResponse, GetProductResponse } from 'queries';
import { GetProductIdsQuery, GetProductQuery } from 'queries';
import { reviewsIoProductReviewsToReviewHighlight, reviewsIoProductReviewsToReviewList } from 'transforms/reviewsIo';
import { shopifyGidToId, shopifyIdToGid, shopifyProductToProduct } from 'transforms/shopify';
import type { Product as ProductType } from 'types/product';
import type { ReviewHighlights, ReviewList } from 'types/review';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

interface ProductPageProps {
  product: ProductType;
  reviews: ReviewList;
  reviewHighlights: ReviewHighlights;
}

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage: NextPage<ProductPageProps> = ({ product, reviews, reviewHighlights }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout title="Product loading...">
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout title={product.name}>
      <div className="bg-white">
        <Wrapper>
          <Product component="withImageGrid" product={product} reviews={reviewHighlights} breadcrumbs={breadcrumbs} />
          <Reviews reviews={reviews} />
          <RelatedProductsFromShopify collection="related-products" />
        </Wrapper>
      </div>
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const id = shopifyIdToGid(getSingle(params.id));

  const { data } = await apolloClient.query<GetProductResponse, GetProductArgs>({
    query: GetProductQuery,
    variables: { id }
  });

  const product = shopifyProductToProduct(data.product);
  const reviews = reviewsIoProductReviewsToReviewList(data.product.reviews);
  const reviewHighlights = reviewsIoProductReviewsToReviewHighlight(data.product.reviews);

  return addApolloQueryCache(apolloClient, {
    props: {
      product,
      reviews,
      reviewHighlights
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductIdsResponse>({
    query: GetProductIdsQuery
  });

  const paths = data.products.edges.map(({ node }) => ({
    params: { id: shopifyGidToId(node.id) }
  }));

  return {
    paths,
    fallback: true
  };
};

export default ProductPage;
