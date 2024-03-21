import { ProductPageShopifySummaryQuery } from '@/features/ProductPage/queries.takeshape';
import { getProductPageSummaryNodes } from '@/features/ProductPage/transforms';
import { ProductPageShopifySummaryNodes } from '@/features/ProductPage/types';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { ProductPageShopifySummaryQueryResponse, ProductPageShopifySummaryQueryVariables } from '@/types/takeshape';

export async function getAllProductPageSummaryNodes() {
  let allNodes: ProductPageShopifySummaryNodes = [];

  let hasNextPage = true;
  let endCursor: string | undefined;

  while (hasNextPage) {
    const variables: ProductPageShopifySummaryQueryVariables = {
      first: 50
    };

    if (endCursor) {
      variables.after = endCursor;
    }

    const { data } = await getAnonymousTakeshapeClient().query<
      ProductPageShopifySummaryQueryResponse,
      ProductPageShopifySummaryQueryVariables
    >({
      query: ProductPageShopifySummaryQuery,
      variables
    });

    const nodes = getProductPageSummaryNodes(data) ?? [];
    allNodes = [...allNodes, ...nodes];
    hasNextPage = data.products?.pageInfo.hasNextPage ?? false;
    endCursor = data.products?.pageInfo.endCursor ?? undefined;
  }

  return allNodes;
}
