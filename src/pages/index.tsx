import PageLoader from 'components/PageLoader';
import Container from 'features/Container';
import ProductCategory from 'features/ProductCategory/ProductCategory';
import Page from 'layouts/Page';
import logger from 'logger';
import type { InferGetStaticPropsType, NextPage } from 'next';
import type { GetProductsResponse } from 'queries';
import { GetProductsQuery } from 'queries';
import addApolloQueryCache from 'services/apollo/addApolloQueryCache';
import { createStaticClient } from 'services/apollo/apolloClient';
import { Alert } from 'theme-ui';
import { formatError } from 'utils/errors';
import { shopifyProductToProductListItem } from 'utils/transforms';

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
          <ProductCategory
            header={{ text: { primary: 'Clothes!', secondary: 'Fun for everyone.' } }}
            products={products}
            setFilters={() => {}}
            clearAllFilters={() => {}}
            setSortOption={() => {}}
            filters={{
              color: [
                { value: 'white', label: 'White', checked: false },
                { value: 'beige', label: 'Beige', checked: false },
                { value: 'blue', label: 'Blue', checked: true },
                { value: 'brown', label: 'Brown', checked: false },
                { value: 'green', label: 'Green', checked: false },
                { value: 'purple', label: 'Purple', checked: false }
              ],
              size: [
                { value: 'xs', label: 'XS', checked: false },
                { value: 's', label: 'S', checked: true },
                { value: 'm', label: 'M', checked: false },
                { value: 'l', label: 'L', checked: false },
                { value: 'xl', label: 'XL', checked: false },
                { value: '2xl', label: '2XL', checked: false }
              ]
            }}
            sortOptions={[
              { name: 'Most Popular', href: '#', current: true },
              { name: 'Best Rating', href: '#', current: false },
              { name: 'Newest', href: '#', current: false },
              { name: 'Price: Low to High', href: '#', current: false },
              { name: 'Price: High to Low', href: '#', current: false }
            ]}
            pagination={{
              pageCount: 1,
              currentPage: 1,
              setCurrentPage: () => {}
            }}
          />
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
    const { data } = await apolloClient.query<GetProductsResponse>({
      query: GetProductsQuery
    });

    products = data.products.edges.map((e) => shopifyProductToProductListItem(e.node));
  } catch (err) {
    logger.error(err);
    error = formatError(err);
  }

  return addApolloQueryCache(apolloClient, { props: { products, error } });
}

export default IndexPage;
