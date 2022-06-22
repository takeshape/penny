import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { formatPrice } from 'utils/text';
import { StorefrontCollection } from '../types';

export interface TrendingProductsProps {
  collection?: StorefrontCollection;
}

export const Collection = ({ collection }: TrendingProductsProps) => {
  const items = collection.items;
  if (!(items ?? items.length)) return null;

  return (
    <section aria-labelledby="trending-heading" className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
            {collection.name}
          </h2>

          <NextLink
            href={collection.url}
            className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            See everything<span aria-hidden="true"> &rarr;</span>
          </NextLink>
        </div>
        <div className="mt-8 relative">
          <div className="relative w-full overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {items.map(({ product }) => (
                <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <div className="w-full h-full group-hover:opacity-75">
                        <NextImage
                          layout="fill"
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      {product.availableColors && (
                        <p className="text-sm text-gray-500">{product.availableColors.values[0].name}</p>
                      )}
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <NextLink href={product.url}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </NextLink>
                      </h3>
                      <p className="mt-1 text-gray-900">
                        {formatPrice(product.priceMin.currencyCode, product.priceMin.amount)}
                      </p>
                    </div>
                  </div>

                  {product.availableColors && (
                    <>
                      <h4 className="sr-only">Available colors</h4>
                      <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
                        {product.availableColors.values.map((color) => (
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
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 px-4 sm:hidden">
          <NextLink href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything<span aria-hidden="true"> &rarr;</span>
          </NextLink>
        </div>
      </div>
    </section>
  );
};
