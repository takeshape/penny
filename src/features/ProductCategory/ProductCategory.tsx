import { PropsWithChildren } from 'react';
import { Header, HeaderProps } from './Header/Header';
import { Pagination, PaginationProps } from './Pagination/Pagination';
import { ProductGrid, ProductGridProps } from './ProductGrid/ProductGrid';

export type ProductCategoryProps = HeaderProps & ProductGridProps & PaginationProps;

export const ProductCategory = ({ header, products, pagination }: PropsWithChildren<ProductCategoryProps>) => {
  return (
    <main className="pb-24">
      <Header header={header} />
      {/* <Filters
        filters={filters}
        sortOptions={sortOptions}
        setFilters={setFilters}
        clearAllFilters={clearAllFilters}
        setSortOption={setSortOption}
      /> */}
      <ProductGrid products={products} />
      <Pagination pagination={pagination} />
    </main>
  );
};
