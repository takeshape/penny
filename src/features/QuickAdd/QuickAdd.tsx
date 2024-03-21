'use client';

import { Modal } from '@/components/Modal/Modal';
import { getProduct } from '@/features/QuickAdd/transforms';
import { QuickAddQueryResponse, QuickAddQueryVariables } from '@/types/takeshape';
import { QueryReference, useLoadableQuery, useReadQuery } from '@apollo/client';
import { useAtom } from 'jotai';
import { Suspense, useCallback } from 'react';
import { QuickAddItem } from './components/QuickAddItem';
import { QuickAddItemLoading } from './components/QuickAddItemLoading';
import { QuickAddQuery } from './queries';
import { quickAddAtom, useQuickAddAtomListener } from './store';

type ReadQuickAddProps = {
  onClose: () => void;
  productQueryRef: QueryReference<QuickAddQueryResponse, QuickAddQueryVariables>;
};

function ReadQuickAdd({ onClose, productQueryRef }: ReadQuickAddProps) {
  const { data } = useReadQuery(productQueryRef);
  const product = getProduct(data);

  if (!product) {
    throw new Error('Error loading QuickAdd item, try again');
  }

  return <QuickAddItem product={product} onClose={onClose} />;
}

export const QuickAdd = () => {
  const [quickAdd, setQuickAdd] = useAtom(quickAddAtom);
  const [loadProduct, productQueryRef] = useLoadableQuery<QuickAddQueryResponse, QuickAddQueryVariables>(QuickAddQuery);

  const resetQuickAdd = useCallback(() => setQuickAdd(null), [setQuickAdd]);

  useQuickAddAtomListener(
    useCallback(
      (get, set, val) => {
        if (val?.productHandle) {
          void loadProduct({
            handle: val.productHandle
          });
        }
      },
      [loadProduct]
    )
  );

  return (
    <Modal isOpen={Boolean(quickAdd)} onClose={() => resetQuickAdd()} showCloseButton={true}>
      <Suspense fallback={<QuickAddItemLoading />}>
        {productQueryRef && <ReadQuickAdd productQueryRef={productQueryRef} onClose={() => resetQuickAdd()} />}
      </Suspense>
    </Modal>
  );
};
