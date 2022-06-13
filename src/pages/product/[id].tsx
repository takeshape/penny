import PageLoader from 'components/PageLoader';
import Wrapper from 'components/Wrapper/Content';
import DetailsFromTakeshape from 'features/ProductPage/Details/DetailsFromTakeshape';
import PoliciesFromTakeshape from 'features/ProductPage/Policies/PoliciesFromTakeshape';
import ProductFromShopify from 'features/ProductPage/Product/ProductFromShopify';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsResponse,
  ProductPageShopifyProductArgs,
  ProductPageShopifyProductIdListQuery,
  ProductPageShopifyProductIdListResponse,
  ProductPageShopifyProductQuery,
  ProductPageShopifyProductReponse
} from 'features/ProductPage/queries';
import ReviewsFromReviewsIo from 'features/ProductPage/Reviews/ReviewsFromReviewsIo';
import { ProductPageOptions } from 'features/ProductPage/types';
import RelatedProductsFromShopify from 'features/RelatedProducts/RelatedProductsFromShopify';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyGidToId, shopifyIdToGid, shopifyProductToProduct } from 'transforms/shopify';
import { takeshapeItemToProductPageOptions } from 'transforms/takeshape';
import { Product } from 'types/product';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

type ProductPageProps = Pick<Product, 'id' | 'name' | 'description'> & {
  options: ProductPageOptions;
};

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage: NextPage<ProductPageProps> = ({ id, name, description, options }) => {
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

  const { productComponent, hideReviews, hideRelatedProducts, showPolicies, showDetails } = options;

  return (
    <Layout title={name} description={description}>
      <div className="bg-white">
        <Wrapper>
          <ProductFromShopify component={productComponent} productId={id} breadcrumbs={breadcrumbs} />
          <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {showDetails && <DetailsFromTakeshape productId={id} />}
            {showPolicies && <PoliciesFromTakeshape productId={id} />}
          </div>
          {!hideReviews && <ReviewsFromReviewsIo sku={shopifyGidToId(id)} />}
          {!hideRelatedProducts && <RelatedProductsFromShopify collection="related-products" />}
        </Wrapper>
      </div>
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const id = getSingle(params.id);

  const { data } = await apolloClient.query<ProductPageShopifyProductReponse, ProductPageShopifyProductArgs>({
    query: ProductPageShopifyProductQuery,
    variables: {
      id: shopifyIdToGid(id)
    }
  });

  // Just priming the cache
  await apolloClient.query<ProductPageReviewsIoReviewsResponse, ProductPageReviewsIoReviewsArgs>({
    query: ProductPageReviewsIoReviewsQuery,
    variables: {
      sku: id
    }
  });

  // await apolloClient.query<ProductPageTakeshapePoliciesResponse, ProductPageTakeshapePoliciesArgs>({
  //   query: ProductPageTakeshapePoliciesQuery,
  //   variables: {
  //     productId: shopifyIdToGid(id)
  //   }
  // });

  const item = data.productList.items[0];
  const product = shopifyProductToProduct(item.shopifyProduct);

  return addApolloQueryCache(apolloClient, {
    props: {
      id: product.id,
      name: product.name,
      description: product.description,
      options: takeshapeItemToProductPageOptions(item)
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<ProductPageShopifyProductIdListResponse>({
    query: ProductPageShopifyProductIdListQuery
  });

  const paths = data.products.items.map(({ shopifyProductId }) => ({
    params: { id: shopifyGidToId(shopifyProductId) }
  }));

  return {
    paths,
    fallback: true
  };
};

export default ProductPage;
