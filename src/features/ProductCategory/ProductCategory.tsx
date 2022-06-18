import { PropsWithChildren } from 'react';
import { Header, HeaderProps } from './Header/Header';
import { Pagination, PaginationProps } from './Pagination/Pagination';
import { ProductGrid, ProductGridProps } from './ProductGrid/ProductGrid';

export type ProductCategoryProps = HeaderProps & ProductGridProps & PaginationProps;

export const ProductCategory = ({ header, items, pagination }: PropsWithChildren<ProductCategoryProps>) => {
  return (
    <div className="pb-24">
      <Header header={header} />
      {/* <Filters
        filters={filters}
        sortOptions={sortOptions}
        setFilters={setFilters}
        clearAllFilters={clearAllFilters}
        setSortOption={setSortOption}
      /> */}
      <ProductGrid items={items} />
      <Pagination pagination={pagination} />
    </div>
  );
};
