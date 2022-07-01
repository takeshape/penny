import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect, useMemo } from 'react';
import { QuickAddQueryResponse, QuickAddQueryVariables } from 'types/storefront';
import { useStorefrontLazyQuery } from 'utils/storefront';
import { QuickAddQuery } from './queries.storefront';
import { QuickAdd } from './QuickAdd';
import { quickAddAtom } from './store';
import { getProduct } from './transforms';

export const QuickAddWithData = () => {
  const quickAdd = useAtomValue(quickAddAtom);
  const resetQuickAdd = useResetAtom(quickAddAtom);

  const [loadProduct, { data, loading, error }] = useStorefrontLazyQuery<QuickAddQueryResponse, QuickAddQueryVariables>(
    QuickAddQuery
  );

  useEffect(() => {
    if (quickAdd?.productHandle && !loading && !error) {
      loadProduct({
        variables: {
          handle: quickAdd.productHandle
        }
      });
    }
  }, [loading, loadProduct, quickAdd?.productHandle, error]);

  const product = useMemo(() => data && getProduct(data), [data]);

  return <QuickAdd isOpen={Boolean(quickAdd)} onClose={() => resetQuickAdd()} product={product} />;
};
