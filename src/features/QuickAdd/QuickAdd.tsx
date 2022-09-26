import { Modal } from 'components/Modal/Modal';
import { QuickAddItem } from './components/QuickAddItem';
import { QuickAddItemLoading } from './components/QuickAddItemLoading';
import { QuickAddProduct } from './types';

export interface QuickAddProps {
  isOpen: boolean;
  onClose: () => void;
  product?: QuickAddProduct;
}

export const QuickAdd = ({ isOpen, onClose, product }: QuickAddProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!product && <QuickAddItemLoading />}
      {product && <QuickAddItem product={product} onClose={onClose} />}
    </Modal>
  );
};
