import CardPanel from 'components/Card/Panel/Panel';
import { PaymentMethod } from 'types/paymentMethod';

export interface AccountPaymentsProps {
  paymentMethods: PaymentMethod[];
}

export const AccountPayments = ({ paymentMethods }: AccountPaymentsProps) => {
  return (
    <CardPanel primaryText="Payment Methods">
      <ul role="list" className="grid grid-cols-1 gap-6">
        {paymentMethods.map(({ id, instrument }) => (
          <li key={id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="w-full flex items-center justify-between p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-sm font-medium truncate">{instrument.brand}</h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {instrument.name}
                  </span>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">{instrument.maskedNumber}</p>
              </div>
              {/* <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" /> */}
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  {/* <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Email</span>
                  </a> */}
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  {/* <a
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Call</span>
                  </a> */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CardPanel>
  );
};
