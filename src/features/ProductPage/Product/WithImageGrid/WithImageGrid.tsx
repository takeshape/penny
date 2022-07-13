import Breadcrumbs, { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import ProductColorSelect from 'components/Product/ProductColorSelect';
import ProductPrice from 'components/Product/ProductPrice';
import ProductPriceSelect from 'components/Product/ProductPriceSelect';
import ProductSizeSelect from 'components/Product/ProductSizeSelect';
import { addToCartAtom, isCartOpenAtom } from 'features/Cart/store';
import { useSetAtom } from 'jotai';
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { Product as ProductType } from 'types/product';
import { ReviewHighlights } from 'types/review';
import { getVariant } from 'utils/products';
import { FeaturedReviews } from './FeaturedReviews';
import { ImageGallery } from './ImageGallery';
import { ReviewsCallout } from './ReviewsCallout';

export interface ProductWithImageGridProps {
  product: ProductType;
  reviewHighlights?: ReviewHighlights;
  breadcrumbs: Breadcrumb[];
  showFeaturedReviews: boolean;
  showBreadcrumbs: boolean;
  showReviewsLink: boolean;
}

export const ProductWithImageGrid = ({
  product,
  reviewHighlights,
  breadcrumbs,
  showFeaturedReviews,
  showBreadcrumbs,
  showReviewsLink
}: PropsWithChildren<ProductWithImageGridProps>) => {
  const { name, descriptionHtml, images, variantOptions, hasStock } = product;

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

  const addToCart = useSetAtom(addToCartAtom);
  const setIsCartOpen = useSetAtom(isCartOpenAtom);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();

      addToCart({
        product,
        variant: selectedVariant,
        price: selectedPrice,
        // Provided by user input, e.g., a monogram component allowing the user to enter text
        attributes: []
      });

      setIsCartOpen(true);
    },
    [addToCart, product, selectedVariant, selectedPrice, setIsCartOpen]
  );

  return (
    <div className="pt-10 pb-18 sm:pt-16 sm:pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {showBreadcrumbs && breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      </div>

      <ImageGallery images={images} />

      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          <h2 className="sr-only">Product information</h2>

          <ProductPrice price={selectedPrice} hasStock={hasStock} size="large" />

          {reviewHighlights && (
            <div className="mt-6">
              <ReviewsCallout stats={reviewHighlights.stats} showReviewsLink={showReviewsLink} />
            </div>
          )}

          <form className="mt-10">
            {colors && (
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Color</h3>
                <ProductColorSelect value={selectedColor} onChange={setSelectedColor} options={colors.values} />
              </div>
            )}

            {sizes && (
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <ProductSizeSelect value={selectedSize} onChange={setSelectedSize} options={sizes.values} />
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
              disabled={!hasStock}
              onClick={handleAddToCart}
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to cart
            </button>
          </form>
        </div>

        {/* Description and details */}
        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="prose prose-indigo prose-sm" dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
        </div>

        {showFeaturedReviews && reviewHighlights && (
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Reviews */}
            <section aria-labelledby="reviews-heading" className="border-t border-gray-200 pt-10 lg:pt-16">
              <h2 id="reviews-heading" className="sr-only">
                Reviews
              </h2>

              <div className="space-y-10">
                <FeaturedReviews reviews={reviewHighlights.featured} />
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
