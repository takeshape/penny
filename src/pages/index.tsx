import PageLoader from 'components/PageLoader';
import Container from 'features/Container';
import ProductGrid from 'features/products/ProductGrid';
import Page from 'layouts/Page';
import logger from 'logger';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { GetStripeProducts } from 'queries';
import addApolloQueryCache from 'services/apollo/addApolloQueryCache';
import { createStaticClient } from 'services/apollo/apolloClient';
import { Alert, Heading } from 'theme-ui';
import { formatError } from 'utils/errors';

const IndexPage: NextPage = ({ products, error }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (error) {
    return (
      <Container>
        <Page>
          <Alert>Error loading products</Alert>
          <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
        </Page>
      </Container>
    );
  }

  return (
    <Container>
      {products ? (
        <Page>
          <Heading as="h1" sx={{ marginBottom: '2rem', fontSize: '3.2em' }}>
            Products
          </Heading>
          <ProductGrid products={products} />
        </Page>
      ) : (
        <PageLoader />
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const apolloClient = createStaticClient();

  let products = [];
  let error = null;

  try {
    const { data } = await apolloClient.query({
      query: GetStripeProducts
    });

    if (data.errors) {
      error = data.errors;
    } else {
      products = data.products.items;
    }
  } catch (err) {
    logger.error(err);
    error = formatError(err);
  }

  return addApolloQueryCache(apolloClient, { props: { products, error } });
}

export default IndexPage;
