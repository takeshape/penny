import NextLink from 'components/NextLink';
import { StorefrontCollection } from '../types';
import { CollectionItem } from './CollectionItem';

export interface TrendingProductsProps {
  collection?: StorefrontCollection;
}

export const Collection = ({ collection }: TrendingProductsProps) => {
  if (!(collection.items ?? collection.items.length)) return null;

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
              {collection.items.map((item) => (
                <li key={item.product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                  <CollectionItem {...item} />
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