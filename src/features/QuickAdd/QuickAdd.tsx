'use client';

import { Modal } from '@/components/Modal/Modal';
import { getProduct } from '@/features/QuickAdd/transforms';
import { QuickAddQueryResponse, QuickAddQueryVariables } from '@/types/takeshape';
import { QueryReference, useLoadableQuery, useReadQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { Suspense, useEffect } from 'react';
import { QuickAddItem } from './components/QuickAddItem';
import { QuickAddItemLoading } from './components/QuickAddItemLoading';
import { QuickAddQuery } from './queries';
import { quickAddAtom } from './store';

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
  const quickAdd = useAtomValue(quickAddAtom);
  const resetQuickAdd = useResetAtom(quickAddAtom);

  const [loadProduct, productQueryRef] = useLoadableQuery<QuickAddQueryResponse, QuickAddQueryVariables>(QuickAddQuery);

  useEffect(() => {
    if (quickAdd?.productHandle) {
      void loadProduct({
        handle: quickAdd.productHandle
      });
    }
  }, [loadProduct, quickAdd]);

  return (
    <Modal isOpen={Boolean(quickAdd)} onClose={() => resetQuickAdd()} showCloseButton={true}>
      <Suspense fallback={<QuickAddItemLoading />}>
        {productQueryRef && <ReadQuickAdd productQueryRef={productQueryRef} onClose={() => resetQuickAdd()} />}
      </Suspense>
    </Modal>
  );
};
