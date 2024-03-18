import Image from '@/components/NextImage';
import NextLink from '@/components/NextLink';
import { formatPrice } from '@/lib/text';
import { LineItem as TLineItem } from '../../types';

export const LineItem = ({ lineItem }: React.PropsWithChildren<{ lineItem: TLineItem }>) => {
  return (
    <tr>
      <td className="py-6 pr-8">
        {lineItem.product && (
          <NextLink href={lineItem.product.url}>
            <div className="flex items-center">
              <div className="flex items-center w-16 h-16 mr-6">
                {lineItem.image && (
                  <Image
                    src={lineItem.image.url}
                    height={lineItem.image.height}
                    width={lineItem.image.width}
                    alt={lineItem.image.altText}
                    className="rounded"
                  />
                )}
              </div>
              <div>
                <div className="font-medium text-body-900">{lineItem.name}</div>
                <div className="mt-1 sm:hidden">
                  {formatPrice(lineItem.price.currencyCode, lineItem.price.amount * 100)}
                </div>
              </div>
            </div>
          </NextLink>
        )}
      </td>
      <td className="py-6 pr-8 text-body-900">{lineItem.quantity}</td>
      <td className="hidden py-6 pr-8 sm:table-cell text-body-900">
        {formatPrice(lineItem.price.currencyCode, lineItem.price.amount * 100)}
      </td>
    </tr>
  );
};
