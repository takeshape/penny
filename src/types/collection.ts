export type CollectionPageInfo = {
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
};

export type CollectionSeo = {
  title: string;
  description: string;
};

export type CollectionBase<T> = {
  id: string;
  url: string;
  handle: string;
  name: string;
  description: string;
  descriptionHtml: string;
  productsCount: number;
  items?: T[];
  pageInfo?: CollectionPageInfo;
  anchor?: string;
  seo?: CollectionSeo;
};
