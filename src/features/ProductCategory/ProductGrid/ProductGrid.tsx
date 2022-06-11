import { StarIcon } from '@heroicons/react/solid';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { Product } from 'types/product';
import { ReviewHighlights } from 'types/review';
import classNames from 'utils/classNames';
import { formatPrice } from 'utils/text';

export interface ProductGridProps {
  products?: { product: Product; reviews: ReviewHighlights }[];
}

const ProductGrid = ({ products }: React.PropsWithChildren<ProductGridProps>) => {
  if (!products || !products.length) return null;
  return (
    <section aria-labelledby="products-heading" className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {products.map(({ product, reviews }) => (
          <div key={product.id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
            <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <NextImage
                layout="fill"
                src={product.featuredImage.url}
                alt={`Picture of ${product.name}`}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="pt-10 pb-4 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                <NextLink href={product.url}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </NextLink>
              </h3>
              {reviews.stats.average ? (
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{reviews.stats.average} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.stats.average > rating ? 'text-yellow-400' : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{reviews.stats.count} reviews</p>
                </div>
              ) : null}

              <p className="mt-4 text-base font-medium text-gray-900">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
