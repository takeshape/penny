import { gql } from '@apollo/client';
import { Navigation } from 'types/takeshape';

export interface NavigationResponse {
  navigation: Navigation;
}

export const NavigationQuery = gql`
  query NavigationQuery {
    navigation: getNavigation {
      _id
      links {
        categories {
          brands {
            href
            name
          }
          categories {
            href
            name
          }
          collection {
            href
            name
          }
          featured {
            href
            name
          }
          name
        }
        pages {
          href
          name
        }
      }
      messageHtml
      showCurrencySelect
    }
  }
`;
