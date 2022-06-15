import Image from 'components/NextImage';
import NextLink from 'components/NextLink';
import { shopifyGidToId } from 'transforms/shopify';
import { Shopify_LineItem } from 'types/takeshape';
import { formatPrice } from 'utils/text';

const LineItem = ({ lineItem }: React.PropsWithChildren<{ lineItem: Shopify_LineItem }>) => {
  return (
    <tr>
      <td className="py-6 pr-8">
        <NextLink href={`/product/${shopifyGidToId(lineItem.product.id)}`} className="flex items-center">
          <div className="flex items-center w-16 h-16 mr-6">
            <Image
              src={lineItem.image.url}
              height={lineItem.image.height}
              width={lineItem.image.width}
              alt={lineItem.name}
              className="rounded"
            />
          </div>
          <div>
            <div className="font-medium text-gray-900">{lineItem.name}</div>
            <div className="mt-1 sm:hidden">
              {formatPrice(
                lineItem.originalTotalSet.shopMoney.currencyCode,
                lineItem.originalTotalSet.shopMoney.amount * 100
              )}
            </div>
          </div>
        </NextLink>
      </td>
      <td className="py-6 pr-8">{lineItem.quantity}</td>
      <td className="hidden py-6 pr-8 sm:table-cell">
        {formatPrice(
          lineItem.originalTotalSet.shopMoney.currencyCode,
          lineItem.originalTotalSet.shopMoney.amount * 100
        )}
      </td>
    </tr>
  );
};

export default LineItem;
