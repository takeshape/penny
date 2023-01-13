import { CheckIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import Breadcrumbs, { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import NextImage from 'components/NextImage';
import ProductPrice from 'components/Product/ProductPrice';
import ProductSizeSelectWithDescription from 'components/Product/ProductSizeSelectWithDescription';
import Stars from 'components/Stars/Stars';
import { ReviewHighlights } from 'types/review';
import { useAddToCart } from 'utils/hooks/useAddToCart';
import { useProduct } from 'utils/hooks/useProduct';
import { ProductPageProduct } from '../../types';

export interface ProductWithImageProps {
  product: ProductPageProduct;
  reviewHighlights: ReviewHighlights | null;
  breadcrumbs: Breadcrumb[] | null;
  showReviewsLink: boolean;
}

export const ProductWithImage = ({
  product,
  reviewHighlights,
  breadcrumbs,
  showReviewsLink
}: ProductWithImageProps) => {
  const { name, descriptionHtml, featuredImage } = product;

  const {
    setSelectedSize,
    selectedSize: { selectedValue: selectedSizeValue, option: sizes },
    selectedPrice,
    selectedVariant,
    selections
  } = useProduct({ product });

  const addToCart = useAddToCart({ product, variant: selectedVariant, price: selectedPrice });

  return (
    <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div className="lg:max-w-lg lg:self-end">
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}

        <div className="mt-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-body-900 sm:text-4xl">{name}</h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <h2 id="information-heading" className="sr-only">
            Product information
          </h2>

          <div className="flex items-center">
            <ProductPrice price={selectedPrice} isAvailable={selectedVariant.available} size="large" />

            {reviewHighlights && (
              <div className="ml-4 pl-4 border-l border-body-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <Stars rating={reviewHighlights.stats.average ?? 0} />
                    <p className="sr-only">{reviewHighlights.stats.average} out of 5 stars</p>
                  </div>
                  {showReviewsLink ? (
                    <a href="#reviews" className="ml-2 text-sm text-accent-600 hover:text-accent-500">
                      {reviewHighlights.stats.count} reviews
                    </a>
                  ) : (
                    <p className="ml-2 text-sm text-body-500">{reviewHighlights.stats.count} reviews</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 space-y-6">
            <p
              className="text-base text-body-500 prose prose-sm"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            ></p>
          </div>

          <div className="mt-6 flex items-center">
            <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
            <p className="ml-2 text-sm text-body-500">In stock and ready to ship</p>
          </div>
        </section>
      </div>
      <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2">
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <NextImage
            src={featuredImage.url}
            height={featuredImage.height}
            width={featuredImage.width}
            alt={`Picture of ${name}`}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" className="sr-only">
            Product options
          </h2>

          <form>
            <div className="sm:flex sm:justify-between">
              {sizes && (
                <ProductSizeSelectWithDescription
                  label="Size"
                  value={selectedSizeValue}
                  onChange={setSelectedSize}
                  option={sizes}
                  selections={selections}
                />
              )}
            </div>
            <div className="mt-4">
              <a href="#" className="group inline-flex text-sm text-body-500 hover:text-body-700">
                <span>What size should I buy?</span>
                <QuestionMarkCircleIcon
                  className="flex-shrink-0 ml-2 h-5 w-5 text-body-400 group-hover:text-body-500"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-accent-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-inverted hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-body-50 focus:ring-accent-500"
                onClick={() => addToCart()}
              >
                Add to cart
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  className="flex-shrink-0 mr-2 h-6 w-6 text-body-400 group-hover:text-body-500"
                  aria-hidden="true"
                />
                <span className="text-body-500 hover:text-body-700">Lifetime Guarantee</span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
