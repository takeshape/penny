import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { quickAddAtom } from 'features/QuickAdd/store';
import { useSetAtom } from 'jotai';
import { MouseEvent, useCallback } from 'react';
import { formatPrice } from 'utils/text';
import { RelatedProductsProduct } from '../../types';

export interface ListItemProps {
  product: RelatedProductsProduct;
}

export const ListItem = ({ product }: ListItemProps) => {
  const quickAdd = useSetAtom(quickAddAtom);

  const handleAddToCart = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      quickAdd({ productHandle: product.handle });
    },
    [quickAdd, product]
  );

  return (
    <>
      <NextLink href={product.url}>
        <div className="relative">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <NextImage
              layout="fill"
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              objectFit="cover"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <p className="relative text-lg font-semibold text-white">
              {formatPrice(product.priceMin.currencyCode, product.priceMin.amount)}
            </p>
          </div>
        </div>
      </NextLink>
      <div className="mt-6">
        <a
          href={product.url}
          className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
          onClick={handleAddToCart}
        >
          Add to cart<span className="sr-only">, {product.name}</span>
        </a>
      </div>
    </>
  );
};
