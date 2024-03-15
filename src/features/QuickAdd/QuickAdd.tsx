'use client';

import { Modal } from '@/components/Modal/Modal';
import { QuickAddItem } from './components/QuickAddItem';
import { QuickAddItemLoading } from './components/QuickAddItemLoading';
import { QuickAddProduct } from './types';

export type QuickAddProps = {
  isOpen: boolean;
  onClose: () => void;
  product: QuickAddProduct | null;
};

export const QuickAdd = ({ isOpen, onClose, product }: QuickAddProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={true}>
      {!product && <QuickAddItemLoading />}
      {product && <QuickAddItem product={product} onClose={onClose} />}
    </Modal>
  );
};
