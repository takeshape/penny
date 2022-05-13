import { StarIcon } from '@heroicons/react/solid';
import classNames from 'utils/classNames';

interface Product {
  id: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  rating: number;
  price: string;
  reviewCount: number;
}

export interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (!products || !products.length) return null;
  return (
    <section aria-labelledby="products-heading" className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
            <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover" />
            </div>
            <div className="pt-10 pb-4 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <div className="mt-3 flex flex-col items-center">
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'flex-shrink-0 h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
              </div>
              <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
