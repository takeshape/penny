import { gql } from '@apollo/client';

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
    }
  }
`;
