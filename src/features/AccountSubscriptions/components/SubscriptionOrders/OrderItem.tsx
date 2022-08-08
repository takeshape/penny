import NextImage from 'components/NextImage';
import { formatPrice } from 'utils/text';
import { SubscriptionOrder } from '../../types';
import { OrderItemActions } from './OrderItemActions';
import { OrderItemHeader } from './OrderItemHeader';

export interface OrderItemProps {
  order: SubscriptionOrder;
}

export const OrderItem = ({ order }: OrderItemProps) => {
  const { product } = order;

  return (
    <>
      <div className="space-y-1 flex items-baseline md:space-y-0 sm:space-x-4">
        <OrderItemHeader {...order} />
      </div>

      <div className="mt-2 -mb-6 flow-root border-t border-body-200 divide-y divide-body-200">
        <div key={product.id} className="py-6 sm:flex">
          <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
            <NextImage
              width={100}
              height={100}
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-24 sm:h-24"
            />
            <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
              <h3 className="font-medium text-body-900">
                <a href={product.url}>{product.name}</a>
              </h3>
              <p className="text-sm text-body-500">{product.variantName}</p>
              <p className="text-sm text-body-500">Quantity: {product.quantity}</p>
              <p className="mt-1 font-medium text-body-900">
                {formatPrice(product.price.currencyCode, product.price.amount)}
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
            <OrderItemActions order={order} />
          </div>
        </div>
      </div>
    </>
  );
};
