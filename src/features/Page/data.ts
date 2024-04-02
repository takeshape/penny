import { PageGetPageSlugs } from '@/features/Page/queries';
import { getPageSummaryItems } from '@/features/Page/transforms';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { GetPageSlugsResponse } from '@/types/takeshape';

export async function getAllPageSummaryItems() {
  const { data } = await getAnonymousTakeshapeClient().query<GetPageSlugsResponse>({
    query: PageGetPageSlugs
  });

  return getPageSummaryItems(data) ?? [];
}
