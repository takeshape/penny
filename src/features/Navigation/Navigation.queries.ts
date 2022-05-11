import { gql } from '@apollo/client';
import { currencyList } from 'config';
import type { NavigationData } from 'types/takeshape';

// TakeShape doesn't support scalar arrays, so sticking with this for now
export type NavigationCurrency = typeof currencyList[number];

export interface NavigationDataResults {
  navigation: NavigationData & {
    currencies: NavigationCurrency[];
  };
}

export const GetNavigationDataQuery = gql`
  query GetNavigationData {
    navigation: getNavigationData {
      message
      links {
        categories {
          name
          featured {
            name
            href
          }
          collection {
            name
            href
          }
          categories {
            name
            href
          }
          brands {
            name
            href
          }
        }
        pages {
          name
          href
        }
      }
    }
  }
`;
