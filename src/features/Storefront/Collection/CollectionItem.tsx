import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { formatPrice } from 'utils/text';
import { StorefrontCollectionItem } from '../types';

export interface CollectionItemProps extends StorefrontCollectionItem {}

export const CollectionItem = ({ product }: CollectionItemProps) => {
  const colors = product.variantOptions.find((opt) => opt.name.toLowerCase() === 'color');

  return (
    <>
      <div className="group relative">
        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
          <div className="group-hover:opacity-75">
            <NextImage
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              height={300}
              width={300}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="mt-6">
          {colors && <p className="text-sm text-mainText-500">{colors.values[0].name}</p>}
          <h3 className="mt-1 font-semibold text-primary-900">
            <NextLink href={product.url}>
              <span className="absolute inset-0" />
              {product.name}
            </NextLink>
          </h3>
          <p className="mt-1 text-mainText-900">
            {formatPrice(product.priceMin.currencyCode, product.priceMin.amount)}
          </p>
        </div>
      </div>

      {colors && (
        <>
          <h4 className="sr-only">Available colors</h4>
          <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
            {colors.values.map((color) => (
              <li
                key={color.name}
                className="w-4 h-4 rounded-full border border-black border-opacity-10"
                style={{ backgroundColor: color.colorBg as string }}
              >
                <span className="sr-only">{color.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
