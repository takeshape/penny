import { gql } from '@apollo/client';

export const FooterQuery = gql`
  query Footer {
    footer: getFooter {
      navigation {
        sections {
          name
          items {
            name
            href
          }
        }
      }
      newsletter {
        text {
          primary
          secondary
          button
        }
      }
    }
  }
`;
