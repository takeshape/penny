import { ProductCategoryShopifySummary } from '@/features/ProductCategory/queries';
import { getCollectionPageSummaryNodes } from '@/features/ProductCategory/transforms';
import { ProductCategoryShopifySummaryNodes } from '@/features/ProductCategory/types';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import {
  ProductCategoryShopifySummaryResponse,
  ProductCategoryShopifySummaryVariables,
  ProductPageShopifySummaryQueryVariables
} from '@/types/takeshape';

export async function getAllCategoryPageSummaryNodes() {
  let allNodes: ProductCategoryShopifySummaryNodes = [];

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
      ProductCategoryShopifySummaryResponse,
      ProductCategoryShopifySummaryVariables
    >({
      query: ProductCategoryShopifySummary,
      variables
    });

    const nodes = getCollectionPageSummaryNodes(data) ?? [];
    allNodes = [...allNodes, ...nodes];
    hasNextPage = data.collections?.pageInfo.hasNextPage ?? false;
    endCursor = data.collections?.pageInfo.endCursor ?? undefined;
  }

  return allNodes;
}
