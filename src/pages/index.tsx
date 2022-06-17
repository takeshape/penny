import Alert from 'components/Alert/Alert';
import PageLoader from 'components/PageLoader';
import Wrapper from 'components/Wrapper/Content';
import { getLayoutData } from 'data/getLayoutData';
import {
  RelatedProductsShopifyCollectionArgs,
  RelatedProductsShopifyCollectionQuery,
  RelatedProductsShopifyCollectionResponse
} from 'features/ProductPage/queries';
import { getRelatedProductList } from 'features/ProductPage/transforms';
import { GetStorefrontQuery, GetStorefrontResponse } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import Layout from 'layouts/Default';
import logger from 'logger';
import { InferGetStaticPropsType, NextPage } from 'next';
import { formatError } from 'utils/errors';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({
  navigation,
  footer,
  products,
  storefront,
  error
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (error) {
    return (
      <Layout navigation={navigation} footer={footer}>
        <Wrapper>
          <div className="my-10">
            <Alert
              status="error"
              primaryText="Error loading storefront"
              secondaryText={JSON.stringify(error, null, 2)}
            />
          </div>
        </Wrapper>
      </Layout>
    );
  }

  return (
    
    <Layout navigation={navigation} footer={footer}>
      {storefront ? (
        <Wrapper>
          <Storefront products={products} storefront={storefront} />
        </Wrapper>
      ) : (
        <PageLoader />
      )}
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getStaticProps() {
  let products = null;
  let storefront = null;
  let error = null;
  let navigation = null;
  let footer = null;

  try {
    ({ navigation, footer } = await getLayoutData());

    const { data: productsData } = await apolloClient.query<
      RelatedProductsShopifyCollectionResponse,
      RelatedProductsShopifyCollectionArgs
    >({
      query: RelatedProductsShopifyCollectionQuery,
      variables: {
        handle: 'frontpage'
      }
    });
    products = getRelatedProductList(productsData).map((product) => ({ product }));

    const { data: storefrontData } = await apolloClient.query<GetStorefrontResponse>({
      query: GetStorefrontQuery
    });
    storefront = storefrontData.storefront;
  } catch (err) {
    logger.error(err);
    error = formatError(err);
  }

  return { props: { navigation, footer, products, storefront, error } };
}

export default IndexPage;
