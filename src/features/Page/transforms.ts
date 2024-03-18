import { PageSummaryItems } from '@/features/Page/types';
import { GetPageSlugsResponse, PageGetPageResponse } from '@/types/takeshape';

export function getPage(response: PageGetPageResponse) {
  const page = response?.pageList?.items?.[0];

  if (!page) {
    return null;
  }

  return page;
}

export function getPageSummaryItems(response: GetPageSlugsResponse): PageSummaryItems {
  return response?.pageList?.items;
}

export function getPageParams(items: NonNullable<PageSummaryItems>) {
  return items.map(({ slug }) => ({ page: slug }));
}
