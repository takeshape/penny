export type CollectionPageInfo = {
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
};

export type CollectionSeo = {
  title: string;
  description: string;
};

export type CollectionParent = {
  id: string;
  url: string;
  name: string;
};

export type CollectionBase<T> = {
  id: string;
  url: string;
  handle: string;
  name: string;
  description: string;
  descriptionHtml: string;
  items?: T[];
  pageInfo?: CollectionPageInfo;
  seo?: CollectionSeo;
  parent: CollectionParent | null;
  breadcrumbTitle: string | null;
};
