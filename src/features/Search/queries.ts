import { gql } from '@apollo/client';
import type { Shopify_Product, TsSearchableSearchResults } from 'types/takeshape';

export interface SearchShopifyProductsResults extends TsSearchableSearchResults {
  search: {
    results: Shopify_Product[];
  };
}

export const SearchShopifyProducts = gql`
  query SearchShopifyProducts($query: String!) {
    search(terms: $query, shapeNames: ["Shopify_Product"]) {
      results {
        __typename
        ... on Shopify_Product {
          id
          title
          description
          featuredImage {
            url
          }
        }
      }
    }
  }
`;
