import PageLoader from 'components/PageLoader';
import { ProductPage as ProductPageComponent } from 'features/ProductPage/ProductPage';
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
import { getPageOptions, getProduct } from 'features/ProductPage/transforms';
import { ProductPageOptions } from 'features/ProductPage/types';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyGidToId, shopifyIdToGid } from 'transforms/shopify';
import { Product } from 'types/product';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

type ProductPageProps = Pick<Product, 'id' | 'name' | 'description'> & {
  sku: string;
  options: ProductPageOptions;
};

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage: NextPage<ProductPageProps> = ({ id, sku, name, description, options }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout title="Product is loading...">
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout title={name} description={description}>
      <ProductPageComponent
        productId={id}
        sku={sku}
        component={options.component}
        options={options}
        breadcrumbs={breadcrumbs}
      />
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

  const product = getProduct(data);

  return addApolloQueryCache(apolloClient, {
    props: {
      id: product.id,
      sku: id,
      name: product.name,
      description: product.description,
      options: getPageOptions(data)
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
