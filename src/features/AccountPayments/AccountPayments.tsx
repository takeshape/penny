import CardPanel from '@/components/Card/Panel/Panel';
import { PaymentMethod as TPaymentMethod } from '@/types/paymentMethod';
import { AddPaymentMethod } from './components/AddPaymentMethod';
import { PaymentMethod } from './components/PaymentMethod';

export interface AccountPaymentsProps {
  paymentMethods: TPaymentMethod[];
}

export const AccountPayments = ({ paymentMethods }: AccountPaymentsProps) => {
  return (
    <CardPanel primaryText="Payment Methods" secondaryText="Add and remove payment methods.">
      <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {paymentMethods.map((paymentMethod) => (
          <li key={paymentMethod.id} className=" bg-white rounded-lg border px-8 py-6">
            <PaymentMethod {...paymentMethod} />
          </li>
        ))}
        <li>
          <AddPaymentMethod customerId="" />
        </li>
      </ul>
    </CardPanel>
  );
};
