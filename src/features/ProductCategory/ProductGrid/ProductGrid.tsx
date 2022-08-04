import { GridItemLoading } from 'features/ProductCategory/ProductGrid/components/GridItemLoading';
import { PropsWithChildren } from 'react';
import { ProductCategoryProductListItem } from '../types';
import { GridItem } from './components/GridItem';

export interface ProductGridProps {
  items: ProductCategoryProductListItem[];
}

export const ProductGrid = ({ items }: PropsWithChildren<ProductGridProps>) => {
  return (
    <section aria-labelledby="products-heading" className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="-mx-px border-l border-mainText-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, idx) => (
          <div
            key={item ? item.product.id : idx}
            className="group relative p-4 border-r border-b border-mainText-200 sm:p-6"
          >
            {item ? <GridItem priority={[0, 1, 2, 3].includes(idx)} {...item} /> : <GridItemLoading />}
          </div>
        ))}
      </div>
    </section>
  );
};
