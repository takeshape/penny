import { ProductPageRelatedProductsProduct } from '../types';
import { ListItem } from './components/ListItem';
import { ListItemLoading } from './components/ListItemLoading';

export type RelatedProductsProps = {
  products: ProductPageRelatedProductsProduct[];
};

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section aria-labelledby="related-heading" className="mt-10 border-gray-200 py-16 px-4 sm:px-0">
      <h2 id="related-heading" className="text-xl font-bold text-body-900">
        Customers also bought
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product, idx) => (
          <div key={product?.id ?? idx}>
            {!product && <ListItemLoading />}
            {product && <ListItem product={product} />}
          </div>
        ))}
      </div>
    </section>
  );
};
