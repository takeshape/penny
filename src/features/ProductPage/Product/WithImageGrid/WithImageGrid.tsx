import Breadcrumbs, { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import ProductColorSelect from 'components/Product/ProductColorSelect';
import ProductPrice from 'components/Product/ProductPrice';
import ProductPriceSelect from 'components/Product/ProductPriceSelect';
import ProductSizeSelect from 'components/Product/ProductSizeSelect';
import { PropsWithChildren } from 'react';
import { ReviewHighlights } from 'types/review';
import { useAddToCart } from 'utils/hooks/useAddToCart';
import { useProduct } from 'utils/hooks/useProduct';
import { ProductPageProduct } from '../../types';
import { FeaturedReviews } from './FeaturedReviews';
import { ImageGallery } from './ImageGallery';
import { ReviewsCallout } from './ReviewsCallout';

export interface ProductWithImageGridProps {
  product: ProductPageProduct;
  reviewHighlights: ReviewHighlights | null;
  breadcrumbs: Breadcrumb[] | null;
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
  const { name, descriptionHtml, images, hasStock } = product;

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
    <div className="pt-10 pb-18 sm:pt-16 sm:pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {showBreadcrumbs && breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      </div>

      <ImageGallery images={images} />

      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-body-200 lg:pr-8">
          <h1 className="text-2xl font-extrabold tracking-tight text-body-900 sm:text-3xl">{name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          <h2 className="sr-only">Product information</h2>

          <ProductPrice price={selectedPrice} isAvailable={selectedVariant.available} size="large" />

          {reviewHighlights && (
            <div className="mt-6">
              <ReviewsCallout stats={reviewHighlights.stats} showReviewsLink={showReviewsLink} />
            </div>
          )}

          <form className="mt-10">
            {colors && (
              <div>
                <h3 className="text-sm text-body-900 font-medium">Color</h3>
                <ProductColorSelect
                  value={selectedColorValue}
                  onChange={setSelectedColor}
                  option={colors}
                  selections={selections}
                />
              </div>
            )}

            {sizes && (
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-body-900 font-medium">Size</h3>
                  <a href="#" className="text-sm font-medium text-accent-600 hover:text-accent-500">
                    Size guide
                  </a>
                </div>

                <ProductSizeSelect
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
              disabled={!selectedVariant.available}
              onClick={addToCart}
              className="mt-10 w-full bg-accent-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-inverted hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to cart
            </button>
          </form>
        </div>

        {/* Description and details */}
        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-body-200 lg:pr-8">
          <div
            className="prose prose-accent prose-sm text-body-800"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          ></div>
        </div>

        {showFeaturedReviews && reviewHighlights && (
          <div className="lg:col-span-2 lg:border-r lg:border-body-200 lg:pr-8">
            {/* Reviews */}
            <section aria-labelledby="reviews-heading" className="border-t border-body-200 pt-10 lg:pt-16">
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
