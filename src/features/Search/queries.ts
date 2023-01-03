import { gql } from '@apollo/client';
import { TsSearchableSearchResults } from 'types/takeshape';
import { SearchShopifyProduct } from './types';

export interface SearchShopifyProductsResults extends TsSearchableSearchResults {
  search: {
    results: SearchShopifyProduct[];
  };
}

export const SearchShopifyProducts = gql`
  query SearchShopifyProducts($query: String!) {
    search(terms: $query, shapeNames: ["Shopify_Product"]) {
      results {
        __typename
        ... on Shopify_Product {
          id
          handle
          title
          description
          totalInventory
          tracksInventory
          publishedOnCurrentPublication
          featuredImage {
            id
            url(transform: { maxWidth: 300, maxHeight: 300, preferredContentType: WEBP })
            altText
            height
            width
          }
        }
      }
    }
  }
`;
