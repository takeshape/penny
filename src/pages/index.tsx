import PageLayout from 'features/layout/Page';
import ProductGrid from 'features/products/ProductGrid';
import type { InferGetStaticPropsType } from 'next';
import { GetStripeProducts } from 'queries';
import addApolloQueryCache from 'services/apollo/addApolloQueryCache';
import { createStaticClient } from 'services/apollo/apolloClient';
import { Alert, Container, Heading, Spinner } from 'theme-ui';
import { formatError } from 'utils/errors';

const IndexPage = ({ products, error }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (error) {
    return (
      <PageLayout>
        <Alert>Error loading products</Alert>
        <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <Heading as="h1" sx={{ marginBottom: '2rem', fontSize: '3.2em' }}>
        Products
      </Heading>
      {products ? (
        <ProductGrid products={products} />
      ) : (
        <Container variant="layout.loading">
          <Spinner />
        </Container>
      )}
    </PageLayout>
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
    console.error(err);
    error = formatError(err);
  }

  return addApolloQueryCache(apolloClient, { props: { products, error } });
}

export default IndexPage;
