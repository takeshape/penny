import Image from 'components/NextImage';
import NextLink from 'components/NextLink';
import { shopifyGidToId } from 'transforms/shopify';
import { LineItem as LineItemType } from 'types/order';
import { formatPrice } from 'utils/text';

const LineItem = ({ lineItem }: React.PropsWithChildren<{ lineItem: LineItemType }>) => {
  return (
    <tr>
      <td className="py-6 pr-8">
        <NextLink href={`/product/${shopifyGidToId(lineItem.product.id)}`} className="flex items-center">
          <div className="flex items-center w-16 h-16 mr-6">
            <Image
              src={lineItem.image.url}
              height={lineItem.image.height}
              width={lineItem.image.width}
              alt={lineItem.image.altText}
              className="rounded"
            />
          </div>
          <div>
            <div className="font-medium text-gray-900">{lineItem.name}</div>
            <div className="mt-1 sm:hidden">
              {formatPrice(lineItem.price.currencyCode, lineItem.price.amount * 100)}
            </div>
          </div>
        </NextLink>
      </td>
      <td className="py-6 pr-8">{lineItem.quantity}</td>
      <td className="hidden py-6 pr-8 sm:table-cell">
        {formatPrice(lineItem.price.currencyCode, lineItem.price.amount * 100)}
      </td>
    </tr>
  );
};

export default LineItem;
