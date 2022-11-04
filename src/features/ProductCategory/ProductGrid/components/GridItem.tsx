import { StarIcon } from '@heroicons/react/24/solid';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import classNames from 'utils/classNames';
import { formatPrice } from 'utils/text';
import { ProductCategoryProductListItem } from '../../types';

export type GridItemProps = Pick<ProductCategoryProductListItem, 'product' | 'reviews'> & { priority?: boolean };

export const GridItem = ({ product, reviews, priority }: GridItemProps) => {
  return (
    <>
      <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
        <NextImage
          src={product.featuredImage.url}
          alt={`Picture of ${product.name}`}
          className="w-full h-full object-center object-cover"
          priority={priority ?? false}
          height={500}
          width={500}
        />
      </div>
      <div className="pt-10 pb-4 text-center">
        <h3 className="text-sm font-medium text-primary-900">
          <NextLink href={product.url}>
            <span>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </span>
          </NextLink>
        </h3>
        {reviews?.stats.average ? (
          <div className="mt-3 flex flex-col items-center">
            <p className="sr-only">{reviews.stats.average} out of 5 stars</p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    (reviews.stats.average ?? 0) > rating ? 'text-yellow-400' : 'text-body-200',
                    'flex-shrink-0 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-primary-500">{reviews.stats.count} reviews</p>
          </div>
        ) : null}

        <p className="mt-4 text-base font-medium text-body-900">
          {product.variantsCount === 1 ? (
            formatPrice(product.priceMax.currencyCode, product.priceMax.amount)
          ) : (
            <span>
              {formatPrice(product.priceMin.currencyCode, product.priceMin.amount)} to{' '}
              {formatPrice(product.priceMax.currencyCode, product.priceMax.amount)}
            </span>
          )}
        </p>
      </div>
    </>
  );
};
