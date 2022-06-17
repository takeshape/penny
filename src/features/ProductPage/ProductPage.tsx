import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import Wrapper from 'components/Wrapper/Content';
import { DetailsWithData, DetailsWithDataProps } from './Details/DetailsWithData';
import { PoliciesWithData, PoliciesWithDataProps } from './Policies/PoliciesWithData';
import { ProductWithData, ProductWithDataProps } from './Product/ProductWithData';
import { RelatedProductsWithData, RelatedProductsWithDataProps } from './RelatedProducts/RelatedProductsWithData';
import { ReviewsWithData, ReviewsWithDataProps } from './Reviews/ReviewsWithData';
import { ProductPageOptions } from './types';

export type ProductPageProps = ProductWithDataProps &
  PoliciesWithDataProps &
  ReviewsWithDataProps &
  DetailsWithDataProps &
  RelatedProductsWithDataProps & {
    options: ProductPageOptions;
  };

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

export const ProductPage = ({ productId, sku, component, options }: ProductPageProps) => {
  const { showDetails, showPolicies, showReviews, showRelatedProducts } = options;

  return (
    <ErrorBoundary
      headline="Server Error"
      subhead="Product loading error"
      body="We could not load the product requested."
    >
      <div className="bg-gray-50">
        <div className="bg-white">
          <Wrapper>
            <ProductWithData component={component} productId={productId} breadcrumbs={breadcrumbs} />
          </Wrapper>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-gray-50">
          {showDetails && <DetailsWithData productId={productId} />}
          {showPolicies && <PoliciesWithData productId={productId} />}
        </div>

        <div className="bg-white">
          <Wrapper>
            {showReviews && <ReviewsWithData sku={sku} />}
            {showRelatedProducts && <RelatedProductsWithData collection="related-products" />}
          </Wrapper>
        </div>
      </div>
    </ErrorBoundary>
  );
};
