import { ErrorBoundary } from 'components/Error/ErrorBoundary';
import Wrapper from 'components/Wrapper/Content';
import { Details, DetailsProps } from './Details/Details';
import { Policies, PoliciesProps } from './Policies/Policies';
import { Product, ProductProps } from './Product/Product';
import { RelatedProductsWithData, RelatedProductsWithDataProps } from './RelatedProducts/RelatedProductsWithData';
import { Reviews, ReviewsProps } from './Reviews/Reviews';
import { ProductPageOptions } from './types';

export type ProductPageProps = ProductProps &
  PoliciesProps &
  ReviewsProps &
  DetailsProps &
  RelatedProductsWithDataProps & {
    options: ProductPageOptions;
  };

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

export const ProductPage = ({
  product,
  reviewHighlights,
  component,
  options,
  details,
  policies,
  reviewList
}: ProductPageProps) => {
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
            <Product
              component={component}
              product={product}
              reviewHighlights={reviewHighlights}
              breadcrumbs={breadcrumbs}
            />
          </Wrapper>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-gray-50">
          {showDetails && <Details details={details} />}
          {showPolicies && <Policies policies={policies} />}
        </div>

        <div className="bg-white">
          <Wrapper>
            {showReviews && <Reviews reviewList={reviewList} />}
            {showRelatedProducts && <RelatedProductsWithData collection="related-products" />}
          </Wrapper>
        </div>
      </div>
    </ErrorBoundary>
  );
};
