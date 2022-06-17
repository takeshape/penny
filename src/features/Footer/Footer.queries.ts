import { gql } from '@apollo/client';
import { Footer } from 'types/takeshape';

export type FooterResponse = {
  footer: Footer;
};

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
