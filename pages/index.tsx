import { Alert, Container, Heading, Spinner } from '@theme-ui/components';
import { Page } from 'components/layout';
import ProductGrid from 'components/product/grid';
import { createApolloClient } from 'lib/apollo';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'lib/config';
import { GetStripeProducts } from 'lib/queries';
import type { InferGetStaticPropsType } from 'next';

const IndexPage = ({ products, error }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (error) {
    return (
      <Page>
        <Alert>Error loading products</Alert>
        <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
      </Page>
    );
  }
  return (
    <Page>
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
    </Page>
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
