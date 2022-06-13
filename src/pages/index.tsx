import Alert from 'components/Alert/Alert';
import PageLoader from 'components/PageLoader';
import Wrapper from 'components/Wrapper/Content';
import Storefront from 'features/Storefront/Storefront';
import Layout from 'layouts/Default';
import logger from 'logger';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { GetStorefrontQuery, GetStorefrontResponse } from 'queries';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { formatError } from 'utils/errors';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({ storefront, error }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (error) {
    return (
      <Layout>
        <Wrapper>
          <div className="my-10">
            <Alert status="error" primaryText="Error loading products" secondaryText={JSON.stringify(error, null, 2)} />
          </div>
        </Wrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      {storefront ? (
        <Wrapper>
          <Storefront storefront={storefront} />
        </Wrapper>
      ) : (
        <PageLoader />
      )}
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getStaticProps() {
  let storefront = null;
  let error = null;

  try {
    const { data } = await apolloClient.query<GetStorefrontResponse>({
      query: GetStorefrontQuery
    });
    storefront = data.storefront;
  } catch (err) {
    logger.error(err);
    error = formatError(err);
  }

  return addApolloQueryCache(apolloClient, { props: { storefront, error } });
}

export default IndexPage;
