import { RadioGroup } from '@headlessui/react';
import { CheckIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/solid';
import Breadcrumbs, { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import NextImage from 'components/NextImage';
import Stars from 'components/Stars/Stars';
import { addToCartAtom } from 'features/Cart/store';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { Product as ProductType } from 'types/product';
import { ReviewHighlights } from 'types/review';
import classNames from 'utils/classNames';
import { getVariant } from 'utils/products';
import { formatPrice } from 'utils/text';

export interface ProductWithImageProps {
  product: ProductType;
  reviews: ReviewHighlights;
  breadcrumbs: Breadcrumb[];
}

export const ProductWithImage = ({ product, reviews, breadcrumbs }: ProductWithImageProps) => {
  const { priceMin, name, descriptionHtml, featuredImage, options } = product;

  const sizes = options.find((opt) => opt.name.toLowerCase() === 'size');

  const initialSize = sizes.values.find((v) => v.hasStock) ?? sizes.values[0];
  const [selectedSize, setSelectedSize] = useState(initialSize.value);

  const initialVariant = getVariant(product.variants, [{ name: 'Size', value: selectedSize }]);

  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [selectedPrice, setSelectedPrice] = useState(initialVariant.prices[0]);

  const addToCart = useSetAtom(addToCartAtom);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();

      addToCart({
        product,
        variant: selectedVariant,
        price: selectedPrice
      });
    },
    [product, selectedVariant, selectedPrice, addToCart]
  );

  useEffect(() => {
    const variant = getVariant(product.variants, [{ name: 'Size', value: selectedSize }]);
    setSelectedVariant(variant);
    setSelectedPrice(variant.prices[0]);
  }, [product.variants, selectedSize]);

  return (
    <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div className="lg:max-w-lg lg:self-end">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <div className="mt-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{name}</h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>

          <div className="flex items-center">
            <p className="text-lg text-gray-900 sm:text-xl">{formatPrice(priceMin.currencyCode, priceMin.amount)}</p>

            <div className="ml-4 pl-4 border-l border-gray-300">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <div>
                  <Stars rating={reviews.stats.average} />
                  <p className="sr-only">{reviews.stats.average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-500">{reviews.stats.count} reviews</p>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></p>
          </div>

          <div className="mt-6 flex items-center">
            <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
            <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
          </div>
        </section>
      </div>
      <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <NextImage
              src={featuredImage.url}
              height={featuredImage.height}
              width={featuredImage.width}
              alt={`Picture of ${name}`}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" className="sr-only">
            Product options
          </h2>

          <form>
            <div className="sm:flex sm:justify-between">
              {/* Size selector */}
              <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                <RadioGroup.Label className="block text-sm font-medium text-gray-700">Size</RadioGroup.Label>
                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {sizes.values.map((size) => (
                    <RadioGroup.Option
                      as="div"
                      key={size.value}
                      value={size.value}
                      disabled={!size.hasStock}
                      className={({ active }) =>
                        classNames(
                          active ? 'ring-2 ring-indigo-500' : '',
                          'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                            {size.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                            {(size.description as string) ?? ''}
                          </RadioGroup.Description>
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked ? 'border-indigo-500' : 'border-transparent',
                              'absolute -inset-px rounded-lg pointer-events-none'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className="mt-4">
              <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                <span>What size should I buy?</span>
                <QuestionMarkCircleIcon
                  className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ProductWithImage;
