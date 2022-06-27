import { GetPageSlugsResponse, PageGetPageResponse } from 'types/takeshape';

export function getPage(response: PageGetPageResponse) {
  const page = response?.pageList?.items?.[0];

  if (!page) {
    return null;
  }

  return page;
}

export function getPageParams(response: GetPageSlugsResponse) {
  const items = response?.pageList?.items;

  if (!items) {
    return null;
  }

  return items.map((item) => ({
    params: {
      page: item.slug
    }
  }));
}
