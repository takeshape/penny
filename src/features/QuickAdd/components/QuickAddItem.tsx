import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import ProductColorSelect from 'components/Product/ProductColorSelect';
import ProductPrice from 'components/Product/ProductPrice';
import ProductPriceSelect from 'components/Product/ProductPriceSelect';
import ProductSizeSelect from 'components/Product/ProductSizeSelect';
import { useAddToCart } from 'utils/hooks/useAddToCart';
import { useProduct } from 'utils/hooks/useProduct';
import { QuickAddProduct } from '../types';

export interface QuickAddItemProps {
  product: QuickAddProduct;
  onClose: () => void;
}

export const QuickAddItem = ({ product, onClose }: QuickAddItemProps) => {
  let { hasStock } = product;

  const {
    setSelectedColor,
    selectedColor: { selectedValue: selectedColorValue, option: colors },
    setSelectedSize,
    selectedSize: { selectedValue: selectedSizeValue, option: sizes },
    setSelectedPrice,
    selectedPrice,
    selectedVariant,
    selections
  } = useProduct({ product });

  const addToCart = useAddToCart({ product, variant: selectedVariant, price: selectedPrice });

  return (
    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
      <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
        <NextImage
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          height={product.featuredImage.height}
          width={product.featuredImage.width}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="sm:col-span-8 lg:col-span-7">
        <h2 className="text-2xl font-extrabold text-body-900 sm:pr-12">{product.name}</h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading" className="sr-only">
            Product information
          </h3>

          <ProductPrice price={selectedPrice} isAvailable={selectedVariant.available} size="small" />
        </section>

        <section aria-labelledby="options-heading" className="mt-10">
          <h3 id="options-heading" className="sr-only">
            Product options
          </h3>

          <form>
            {/* Colors */}
            {colors && (
              <div>
                <h4 className="text-sm text-body-900 font-medium">Color</h4>
                <ProductColorSelect
                  value={selectedColorValue}
                  onChange={setSelectedColor}
                  option={colors}
                  selections={selections}
                />
              </div>
            )}

            {/* Sizes */}
            {sizes && (
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm text-body-900 font-medium">Size</h4>
                  <a href="#" className="text-sm font-medium text-accent-600 hover:text-accent-500">
                    Size guide
                  </a>
                </div>

                <ProductSizeSelect
                  size="small"
                  value={selectedSizeValue}
                  onChange={setSelectedSize}
                  option={sizes}
                  selections={selections}
                />
              </div>
            )}

            {hasStock && selectedVariant.prices.length > 1 && (
              <div className="mt-10">
                <ProductPriceSelect
                  value={selectedPrice}
                  onChange={setSelectedPrice}
                  options={selectedVariant.prices}
                />
              </div>
            )}

            <button
              onClick={addToCart}
              disabled={!hasStock}
              type="submit"
              className="mt-6 w-full bg-accent-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-inverted hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to cart
            </button>

            <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
              <NextLink
                href={product.url}
                onClick={onClose}
                className="font-medium text-accent-600 hover:text-accent-500"
              >
                View full details
              </NextLink>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};
