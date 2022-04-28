import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import PageLayout from 'features/layout/Page';
import ProductGrid from 'features/ProductGrid';
import type { InferGetStaticPropsType } from 'next';
import { GetStripeProducts } from 'queries';
import { createApolloClient } from 'services/apollo/client';
import { Alert, Container, Heading, Spinner } from 'theme-ui';

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
  const client = createApolloClient(takeshapeApiUrl, () => takeshapeAnonymousApiKey);

  let products = [];
  let error = null;

  try {
    const { data } = await client.query({
      query: GetStripeProducts
    });

    if (data.errors) {
      error = data.errors;
    } else {
      products = data.products.items;
    }
  } catch (err) {
    console.error(err);
    error = Array.isArray(err) ? err.map((e) => e.message).join() : err.message;
  }

  return { props: { products, error } };
}

export default IndexPage;
