import { useLazyQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';
import { shopifyProductToQuickAddProduct } from 'transforms/shopify';
import type { QuickAddArgs, QuickAddResponse } from './queries';
import { QuickAddQuery } from './queries';
import QuickAdd from './QuickAdd';
import { quickAddAtom } from './store';

export const QuickAddFromShopify = () => {
  const quickAdd = useAtomValue(quickAddAtom);
  const resetQuickAdd = useResetAtom(quickAddAtom);

  const [loadProduct, { data, loading }] = useLazyQuery<QuickAddResponse, QuickAddArgs>(QuickAddQuery);

  useEffect(() => {
    if (quickAdd?.productId && !loading) {
      loadProduct({
        variables: {
          productId: quickAdd.productId
        }
      });
    }
  }, [loading, loadProduct, quickAdd?.productId]);

  return (
    <QuickAdd
      isOpen={Boolean(quickAdd)}
      onClose={() => resetQuickAdd()}
      product={data?.product && shopifyProductToQuickAddProduct(data.product)}
    />
  );
};

export default QuickAddFromShopify;
