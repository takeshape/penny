import { Modal, ModalProps } from 'components/Modal/Modal';
import { PaymentMethod } from 'types/paymentMethod';

export interface ViewSubscriptionsProps extends ModalProps {
  paymentMethod: PaymentMethod;
}

export const ViewSubscriptions = ({ isOpen, onClose }: ViewSubscriptionsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>SUBS!</div>
    </Modal>
  );
};
