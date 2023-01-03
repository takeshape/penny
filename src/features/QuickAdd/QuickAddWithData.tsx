import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import { QuickAddQueryResponse, QuickAddQueryVariables } from 'types/takeshape';
import { useLazyQueryWithTransform } from 'utils/query';
import { QuickAddQuery } from './queries';
import { QuickAdd } from './QuickAdd';
import { quickAddAtom } from './store';
import { getProduct } from './transforms';
import { QuickAddProduct } from './types';

export const QuickAddWithData = () => {
  const quickAdd = useAtomValue(quickAddAtom);
  const resetQuickAdd = useResetAtom(quickAddAtom);

  const [loadProduct, { transformedData, loading, error }] = useLazyQueryWithTransform<
    QuickAddQueryResponse,
    QuickAddQueryVariables,
    QuickAddProduct
  >(QuickAddQuery, { transform: { data: getProduct } });

  useEffect(() => {
    if (quickAdd?.productHandle && !loading && !error) {
      loadProduct({
        variables: {
          handle: quickAdd.productHandle
        }
      });
    }
  }, [loading, loadProduct, quickAdd?.productHandle, error]);

  return <QuickAdd isOpen={Boolean(quickAdd)} onClose={() => resetQuickAdd()} product={transformedData ?? null} />;
};
