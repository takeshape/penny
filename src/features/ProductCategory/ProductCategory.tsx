import { PropsWithChildren } from 'react';
import { FiltersProps } from './Filters/Filters';
import { Header, HeaderProps } from './Header/Header';
import { PaginationProps } from './Pagination/Pagination';
import { ProductGrid, ProductGridProps } from './ProductGrid/ProductGrid';

export type ProductCategoryProps = HeaderProps & FiltersProps & ProductGridProps & PaginationProps;

export const ProductCategory = ({
  header,
  filters,
  sortOptions,
  setFilters,
  clearAllFilters,
  setSortOption,
  products,
  pagination
}: PropsWithChildren<ProductCategoryProps>) => {
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
      {/* <Pagination pagination={pagination} /> */}
    </main>
  );
};
