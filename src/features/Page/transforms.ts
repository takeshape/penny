import { PageGetPageResponse, PageGetPageSlugsResponse } from './queries';

export function getPage(response: PageGetPageResponse) {
  const page = response?.pageList?.items?.[0];

  if (!page) {
    return null;
  }

  return page;
}

export function getPageParams(response: PageGetPageSlugsResponse) {
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
