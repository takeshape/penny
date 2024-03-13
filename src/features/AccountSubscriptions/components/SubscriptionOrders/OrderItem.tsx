import NextImage from '@/components/NextImage';
import { formatPrice } from '@/utils/text';
import { AnySubscription, RefetchSubscriptions, SubscriptionOrder } from '../../types';
import { OrderItemActions } from './OrderItemActions';
import { OrderItemHeader } from './OrderItemHeader';

export interface OrderItemProps {
  subscription: AnySubscription;
  order: SubscriptionOrder;
  refetchSubscriptions: RefetchSubscriptions;
}

export const OrderItem = ({ subscription, order, refetchSubscriptions }: OrderItemProps) => {
  const { product, productVariant, quantity, price } = order.lineItems[0];

  return (
    <>
      <div className="space-y-1 flex items-baseline md:space-y-0 sm:space-x-4">
        <OrderItemHeader order={order} />
      </div>

      <div className="mt-2 -mb-6 flow-root border-t border-body-200 divide-y divide-body-200">
        <div key={order.id} className="py-6 sm:flex">
          <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
            <NextImage
              width={100}
              height={100}
              src={product.image.url}
              className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-24 sm:h-24"
              alt={product.image.altText}
            />
            <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
              <h3 className="font-medium text-body-900">{product.name}</h3>
              <p className="text-sm text-body-500">{productVariant.name}</p>
              <p className="text-sm text-body-500">Quantity: {quantity}</p>
              <p className="mt-1 font-medium text-body-900">
                {formatPrice(price.currencyCode, price.amount, quantity)}
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
            <OrderItemActions subscription={subscription} order={order} refetchSubscriptions={refetchSubscriptions} />
          </div>
        </div>
      </div>
    </>
  );
};
