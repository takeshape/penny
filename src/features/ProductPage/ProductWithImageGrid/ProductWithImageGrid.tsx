import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'components/NextImage';
import { addToCartAtom } from 'features/Cart/store';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { Product as ProductType } from 'types/product';
import { ReviewHighlights } from 'types/review';
import classNames from 'utils/classNames';
import { getVariant } from 'utils/products';
import { formatDiscount, formatPrice, pluralizeText } from 'utils/text';

export interface ProductProps {
  product: ProductType;
  reviews: ReviewHighlights;
}

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductWithImageGrid = ({ product, reviews }: React.PropsWithChildren<ProductProps>) => {
  const addToCart = useSetAtom(addToCartAtom);

  const { name, descriptionHtml, images, options, hasStock } = product;
  const colors = options.find((opt) => opt.name.toLowerCase() === 'color');
  const sizes = options.find((opt) => opt.name.toLowerCase() === 'size');

  const initialColor = colors.values.find((v) => v.hasStock) ?? colors.values[0];
  const [selectedColor, setSelectedColor] = useState(initialColor.value);
  const initialSize = sizes.values.find((v) => v.hasStock) ?? sizes.values[0];
  const [selectedSize, setSelectedSize] = useState(initialSize.value);

  const initialVariant = getVariant(product.variants, [
    { name: 'Color', value: selectedColor },
    { name: 'Size', value: selectedSize }
  ]);

  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [selectedPrice, setSelectedPrice] = useState(initialVariant.prices[0]);

  useEffect(() => {
    const variant = getVariant(product.variants, [
      { name: 'Color', value: selectedColor },
      { name: 'Size', value: selectedSize }
    ]);
    setSelectedVariant(variant);
    setSelectedPrice(variant.prices[0]);
  }, [product.variants, selectedColor, selectedSize]);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      const variant = getVariant(product.variants, [
        { name: 'Color', value: selectedColor },
        { name: 'Size', value: selectedSize }
      ]);
      const price = variant.prices[0];

      addToCart({
        id: product.id,
        name: product.name,
        description: product.description,
        href: product.url,
        unitAmount: price.amount,
        currency: price.currencyCode,
        quantity: 1,
        imageSrc: product.featuredImage.url,
        imageAlt: product.featuredImage.altText,
        interval: price.interval,
        intervalCount: price.intervalCount,
        data: {
          product,
          productVariant: variant,
          price
        }
      });
    },
    [product, selectedColor, selectedSize, addToCart]
  );

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          {breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a href={product.url} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
              {product.name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          {images[0] && (
            <div className="w-full h-full">
              <Image
                src={images[0].url}
                alt={images[0].altText}
                height={images[0].height}
                width={images[0].width}
                layout="fill"
              />
            </div>
          )}
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            {images[1] && (
              <div className="w-full h-full">
                <Image
                  src={images[1].url}
                  alt={images[1].altText}
                  height={images[1].height}
                  width={images[1].width}
                  layout="fill"
                />
              </div>
            )}
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            {images[2] && (
              <div className="w-full h-full">
                <Image
                  src={images[2].url}
                  alt={images[2].altText}
                  height={images[2].height}
                  width={images[2].width}
                  layout="fill"
                />
              </div>
            )}
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <div className="w-full h-full">
            {images[3] && (
              <Image
                src={images[3].url}
                alt={images[3].altText}
                height={images[3].height}
                width={images[3].width}
                layout="fill"
              />
            )}
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">{formatPrice(selectedPrice.currencyCode, selectedPrice.amount)}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.stats.average > rating ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.stats.average} out of 5 stars</p>
              <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {reviews.stats.count} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            {/* Colors */}
            <div>
              <h3 className="text-sm text-gray-900 font-medium">Color</h3>

              <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <div className="flex items-center space-x-3">
                  {colors.values.map((color) => (
                    <RadioGroup.Option
                      key={color.value}
                      value={color.value}
                      className={({ active, checked }) =>
                        classNames(
                          color.selectedClass,
                          active && checked ? 'ring ring-offset-1' : '',
                          !active && checked ? 'ring-2' : '',
                          '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      <RadioGroup.Label as="span" className="sr-only">
                        {color.name}
                      </RadioGroup.Label>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          color.class,
                          'h-8 w-8 border border-black border-opacity-10 rounded-full'
                        )}
                      />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>

              <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {sizes.values.map((size) => (
                    <RadioGroup.Option
                      key={size.value}
                      value={size.value}
                      disabled={!size.hasStock}
                      className={({ active }) =>
                        classNames(
                          size.hasStock
                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                          active ? 'ring-2 ring-indigo-500' : '',
                          'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                          {size.hasStock ? (
                            <span
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-indigo-500' : 'border-transparent',
                                'absolute -inset-px rounded-md pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                            >
                              <svg
                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {selectedVariant.prices.length > 1 && (
              <div className="mt-10">
                <RadioGroup value={selectedPrice} onChange={setSelectedPrice}>
                  <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
                  <div className="relative bg-white rounded-md -space-y-px">
                    {selectedVariant.prices.map((price, priceIdx) => (
                      <RadioGroup.Option
                        key={price.id}
                        value={price}
                        className={({ checked }) =>
                          classNames(
                            priceIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                            priceIdx === selectedVariant.prices.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                            checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                            'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-2 focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <span className="flex items-center text-sm">
                              <span
                                className={classNames(
                                  checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                                  active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                  'h-4 w-4 rounded-full border flex items-center justify-center'
                                )}
                                aria-hidden="true"
                              >
                                <span className="rounded-full bg-white w-1.5 h-1.5" />
                              </span>
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? 'text-indigo-900' : 'text-gray-900',
                                  'ml-3 font-medium'
                                )}
                              >
                                {price.name} {price.hasDiscount && `(${formatDiscount(price)})`}
                              </RadioGroup.Label>
                            </span>
                            <RadioGroup.Description
                              as="span"
                              className={classNames(
                                checked ? 'text-indigo-700' : 'text-gray-500',
                                'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                              )}
                            >
                              {formatPrice(price.currencyCode, price.amount)}
                              {price.intervalCount &&
                                ` / ${pluralizeText(
                                  price.intervalCount,
                                  price.interval.toLowerCase(),
                                  `${price.interval.toLowerCase()}s`
                                )}`}
                            </RadioGroup.Description>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            )}

            <button
              disabled={!hasStock}
              onClick={handleAddToCart}
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to bag
            </button>
          </form>
        </div>

        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* Description and details */}
          <div id="product-description" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
        </div>

        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* Reviews */}
          <section aria-labelledby="reviews-heading" className="border-t border-gray-200 pt-10 lg:pt-16">
            <h2 id="reviews-heading" className="sr-only">
              Reviews
            </h2>

            <div className="space-y-10">
              {reviews.featured.map((review) => (
                <div key={review.id} className="flex flex-col sm:flex-row">
                  <div className="mt-6 order-2 sm:mt-0 sm:ml-16">
                    <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                    <p className="sr-only">{review.rating} out of 5 stars</p>

                    <div
                      className="mt-3 space-y-6 text-sm text-gray-600"
                      dangerouslySetInnerHTML={{ __html: review.body }}
                    />
                  </div>

                  <div className="order-1 flex items-center sm:flex-col sm:items-start">
                    <div className="h-12 w-12">
                      <Image
                        src={review.reviewer.imageUrl}
                        alt={`${review.reviewer.firstName} ${review.reviewer.lastName.slice(0, 1)}.`}
                        className="rounded-full"
                      />
                    </div>

                    <div className="ml-4 sm:ml-0 sm:mt-4">
                      <p className="text-sm font-medium text-gray-900">
                        {review.reviewer.firstName} {review.reviewer.lastName.slice(0, 1)}
                      </p>
                      <div className="mt-2 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductWithImageGrid;
