import { useLazyQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import { QuickAddArgs, QuickAddQuery, QuickAddResponse } from './queries';
import { QuickAdd } from './QuickAdd';
import { quickAddAtom } from './store';
import { getProduct } from './transforms';

export const QuickAddWithData = () => {
  const quickAdd = useAtomValue(quickAddAtom);
  const resetQuickAdd = useResetAtom(quickAddAtom);

  const [loadProduct, { data, loading, error }] = useLazyQuery<QuickAddResponse, QuickAddArgs>(QuickAddQuery);

  useEffect(() => {
    if (quickAdd?.productId && !loading && !error) {
      loadProduct({
        variables: {
          id: quickAdd.productId
        }
      });
    }
  }, [loading, loadProduct, quickAdd?.productId, error]);

  const product = data && getProduct(data);

  return <QuickAdd isOpen={Boolean(quickAdd)} onClose={() => resetQuickAdd()} product={product} />;
};
