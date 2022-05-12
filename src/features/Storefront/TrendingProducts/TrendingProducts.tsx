interface AvailableColor {
  name: string;
  colorBg: string;
}

interface TrendingProduct {
  id: string;
  href: string;
  name: string;
  color: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  availableColors: AvailableColor[];
}

export interface TrendingProductsProps {
  trendingProducts?: TrendingProduct[];
}

const TrendingProducts: React.FC<TrendingProductsProps> = ({ trendingProducts }) => {
  if (!(trendingProducts ?? trendingProducts.length)) return null;
  return (
    <section aria-labelledby="trending-heading" className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a href="#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-8 relative">
          <div className="relative w-full overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {trendingProducts.map((product) => (
                <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>

                  <h4 className="sr-only">Available colors</h4>
                  <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="w-4 h-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
