import { gql } from '@apollo/client';
import { PagePaginatedList } from 'types/takeshape';

export type PageGetPageSlugsResponse = {
  pageList: PagePaginatedList;
};

export const PageGetPageSlugs = gql`
  query GetPageSlugs {
    pageList: getPageList(size: 100) {
      items {
        _id
        slug
      }
    }
  }
`;

export type PageGetPageResponse = {
  pageList: PagePaginatedList;
};

export type PageGetPageArgs = {
  slug: string;
};

export const PageGetPage = gql`
  query PageGetPage($slug: String!) {
    pageList: getPageList(size: 1, where: { slug: { eq: $slug }, _status: { eq: "enabled" } }) {
      items {
        _id
        sections {
          ... on PageSectionTitle {
            heading
            label
            subheading
          }
          ... on PageSectionMdx {
            content(format: html)
          }
        }
        title
      }
    }
  }
`;
