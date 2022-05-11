import { gql } from '@apollo/client';
import type { Stripe_Product, TsSearchableSearchResults } from 'types/takeshape';

export interface SearchStripeProductsResults extends TsSearchableSearchResults {
  search: {
    results: Stripe_Product[];
  };
}

export const SearchStripeProducts = gql`
  query SearchStripeProducts($query: String!) {
    search(terms: $query, where: { active: { eq: true } }) {
      results {
        __typename
        ... on Stripe_Product {
          id
          name
          description
          images
          prices {
            id
            unit_amount
            currency
            recurring {
              interval
              interval_count
            }
          }
        }
      }
    }
  }
`;
