import PageLoader from 'components/PageLoader';
import { getLayoutData } from 'data/getLayoutData';
import { ProductPage as ProductPageComponent } from 'features/ProductPage/ProductPage';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsResponse,
  ProductPageShopifyProductByIdArgs,
  ProductPageShopifyProductByIdQuery,
  ProductPageShopifyProductBySlugArgs,
  ProductPageShopifyProductBySlugQuery,
  ProductPageShopifyProductIdListQuery,
  ProductPageShopifyProductIdListResponse,
  ProductPageShopifyProductResponse,
  ProductPageTakeshapeProductArgs,
  ProductPageTakeshapeProductQuery,
  ProductPageTakeshapeProductResponse
} from 'features/ProductPage/queries';
import {
  getPageOptions,
  getProduct,
  getProductPageIdOrSlug,
  getProductPageParams
} from 'features/ProductPage/transforms';
import { ProductPageOptions } from 'features/ProductPage/types';
import Layout, { LayoutProps } from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyGidToId } from 'transforms/shopify';
import { Product } from 'types/product';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

type ProductPageProps = Pick<Product, 'id' | 'name' | 'description'> & {
  sku: string;
  options: ProductPageOptions;
} & LayoutProps;

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage: NextPage<ProductPageProps> = ({ id, sku, name, description, options, navigation, footer }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Product is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: name, description }}>
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
  const idOrSlug = getProductPageIdOrSlug(getSingle(params.id));

  let shopifyData;

  const { navigation, footer } = await getLayoutData();

  if (idOrSlug.slug) {
    ({ data: shopifyData } = await apolloClient.query<
      ProductPageShopifyProductResponse,
      ProductPageShopifyProductBySlugArgs
    >({
      query: ProductPageShopifyProductBySlugQuery,
      variables: {
        slug: idOrSlug.slug
      }
    }));
  } else {
    ({ data: shopifyData } = await apolloClient.query<
      ProductPageShopifyProductResponse,
      ProductPageShopifyProductByIdArgs
    >({
      query: ProductPageShopifyProductByIdQuery,
      variables: {
        id: idOrSlug.id
      }
    }));
  }

  const product = getProduct(shopifyData);

  const { data: takeshapeData } = await apolloClient.query<
    ProductPageTakeshapeProductResponse,
    ProductPageTakeshapeProductArgs
  >({
    query: ProductPageTakeshapeProductQuery,
    variables: {
      productId: product.id
    }
  });

  const sku = shopifyGidToId(product.id);

  // Cache priming
  await apolloClient.query<ProductPageReviewsIoReviewsResponse, ProductPageReviewsIoReviewsArgs>({
    query: ProductPageReviewsIoReviewsQuery,
    variables: {
      sku
    }
  });

  return addApolloQueryCache(apolloClient, {
    props: {
      id: product.id,
      sku,
      name: product.name,
      description: product.description,
      options: getPageOptions(takeshapeData),
      navigation,
      footer
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<ProductPageShopifyProductIdListResponse>({
    query: ProductPageShopifyProductIdListQuery
  });

  const params = getProductPageParams(data);

  return {
    paths: params,
    fallback: true
  };
};

export default ProductPage;
