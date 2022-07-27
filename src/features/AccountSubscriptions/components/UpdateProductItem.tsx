import { RadioGroup } from '@headlessui/react';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import ProductColorSelect from 'components/Product/ProductColorSelect';
import ProductPrice from 'components/Product/ProductPrice';
import ProductPriceSelect from 'components/Product/ProductPriceSelect';
import ProductSizeSelect from 'components/Product/ProductSizeSelect';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getVariant } from 'utils/products';

export interface QuickAddItemProps {
  product: any;
  onClose: () => void;
}

export const QuickAddItem = ({ product, onClose }: QuickAddItemProps) => {
  let { variantOptions, hasStock } = product;

  const colors = useMemo(() => variantOptions.find((opt) => opt.name.toLowerCase() === 'color'), [variantOptions]);
  const initialColor = colors?.values.find((v) => v.hasStock) ?? colors?.values[0] ?? null;
  const [selectedColor, setSelectedColor] = useState(initialColor?.value ?? '');

  const sizes = useMemo(() => variantOptions.find((opt) => opt.name.toLowerCase() === 'size'), [variantOptions]);
  const initialSize = sizes?.values.find((v) => v.hasStock) ?? sizes?.values[0] ?? null;
  const [selectedSize, setSelectedSize] = useState(initialSize?.value);

  const selectedVariant = useMemo(() => {
    if (selectedColor && selectedSize) {
      return getVariant(product.variants, [
        { name: 'Color', value: selectedColor },
        { name: 'Size', value: selectedSize }
      ]);
    }

    return product.variants[0];
  }, [product, selectedColor, selectedSize]);

  const [selectedPrice, setSelectedPrice] = useState(selectedVariant.prices[0]);

  useEffect(() => {
    setSelectedPrice(selectedVariant.prices[0]);
  }, [selectedVariant, selectedColor, selectedSize]);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      console.log('UPDATE THE PRODUCT');
      // addToCart({
      //   product,
      //   variant: selectedVariant,
      //   price: selectedPrice
      // });
      // setIsCartOpen(true);
      onClose();
    },
    [onClose]
  );

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
        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading" className="sr-only">
            Product information
          </h3>

          <ProductPrice price={selectedPrice} hasStock={hasStock} size="small" />
        </section>

        <section aria-labelledby="options-heading" className="mt-10">
          <h3 id="options-heading" className="sr-only">
            Product options
          </h3>

          <form>
            {/* Colors */}
            <div>
              <h4 className="text-sm text-gray-900 font-medium">Color</h4>

              <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <ProductColorSelect value={selectedColor} onChange={setSelectedColor} options={colors.values} />
              </RadioGroup>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>

              <ProductSizeSelect size="small" value={selectedSize} onChange={setSelectedSize} options={sizes.values} />
            </div>

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
              onClick={handleAddToCart}
              disabled={!hasStock}
              type="submit"
              className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to cart
            </button>

            <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
              <NextLink
                href={product.url}
                onClick={onClose}
                className="font-medium text-indigo-600 hover:text-indigo-500"
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
