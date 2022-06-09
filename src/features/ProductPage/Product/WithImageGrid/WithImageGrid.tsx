import type { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { addToCartAtom } from 'features/Cart/store';
import { useSetAtom } from 'jotai';
import type { PropsWithChildren } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { Product as ProductType } from 'types/product';
import type { ReviewHighlights } from 'types/review';
import { getVariant } from 'utils/products';
import { formatPrice } from 'utils/text';
import ColorSelect from './ColorSelect';
import FeaturedReviews from './FeaturedReviews';
import ImageGallery from './ImageGallery';
import PriceSelect from './PriceSelect';
import ReviewsCallout from './ReviewsCallout';
import SizeSelect from './SizeSelect';

export interface ProductWithImageGridProps {
  product: ProductType;
  reviews: ReviewHighlights;
  breadcrumbs: Breadcrumb[];
  showFeaturedReviews?: boolean;
}

export const ProductWithImageGrid = ({
  product,
  reviews,
  breadcrumbs,
  showFeaturedReviews
}: PropsWithChildren<ProductWithImageGridProps>) => {
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
    const variant = getVariant(product.variants, [
      { name: 'Color', value: selectedColor },
      { name: 'Size', value: selectedSize }
    ]);
    setSelectedVariant(variant);
    setSelectedPrice(variant.prices[0]);
  }, [product.variants, selectedColor, selectedSize]);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ImageGallery images={images} />

      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl text-gray-900">{formatPrice(selectedPrice.currencyCode, selectedPrice.amount)}</p>

          <div className="mt-6">
            <ReviewsCallout stats={reviews.stats} />
          </div>

          <form className="mt-10">
            <div>
              <h3 className="text-sm text-gray-900 font-medium">Color</h3>
              <ColorSelect value={selectedColor} onChange={setSelectedColor} options={colors.values} />
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>

              <SizeSelect value={selectedSize} onChange={setSelectedSize} options={sizes.values} />
            </div>

            {selectedVariant.prices.length > 1 && (
              <div className="mt-10">
                <PriceSelect value={selectedPrice} onChange={setSelectedPrice} options={selectedVariant.prices} />
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

        {/* Description and details */}
        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="prose prose-indigo prose-sm" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
        </div>

        {showFeaturedReviews && (
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Reviews */}
            <section aria-labelledby="reviews-heading" className="border-t border-gray-200 pt-10 lg:pt-16">
              <h2 id="reviews-heading" className="sr-only">
                Reviews
              </h2>

              <div className="space-y-10">
                <FeaturedReviews reviews={reviews.featured} />
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductWithImageGrid;
