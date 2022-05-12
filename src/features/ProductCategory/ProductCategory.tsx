
import Filters, { FiltersProps } from './Filters/Filters';
import Header, { HeaderProps } from './Header/Header';
import Pagination, { PaginationProps } from './Pagination/Pagination';
import ProductGrid, { ProductGridProps } from './ProductGrid/ProductGrid';

export type ProductCategoryProps = HeaderProps & FiltersProps & ProductGridProps & PaginationProps;

const ProductCategory: React.FC<ProductCategoryProps> = (props) => {
  const {header, filters, sortOptions, products, pagination} = props;
  return (
    <main className="pb-24">
      <Header header={header} />
      <Filters filters={filters} sortOptions={sortOptions} />
      <ProductGrid products={products} />
      <Pagination pagination={pagination} />  
    </main>
  )
}

export default ProductCategory;
