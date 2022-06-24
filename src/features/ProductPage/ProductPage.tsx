import Wrapper from 'components/Wrapper/Content';
import { Details, DetailsProps } from './Details/Details';
import { Policies, PoliciesProps } from './Policies/Policies';
import { Product, ProductProps } from './Product/Product';
import { RelatedProductsWithData, RelatedProductsWithDataProps } from './RelatedProducts/RelatedProductsWithData';
import { Reviews, ReviewsProps } from './Reviews/Reviews';
import { ProductPageOptions } from './types';

export type ProductPageProps = Omit<ProductProps, 'showFeaturedReviews' | 'showBreadcrumbs'> &
  PoliciesProps &
  ReviewsProps &
  DetailsProps &
  RelatedProductsWithDataProps & {
    options: ProductPageOptions;
  };

export const ProductPage = ({
  product,
  reviewHighlights,
  component,
  options,
  details,
  policies,
  reviewList,
  breadcrumbs
}: ProductPageProps) => {
  const { showDetails, showPolicies, showReviews, showRelatedProducts, showBreadcrumbs } = options;

  return (
    <div className="bg-gray-50">
      <div className="bg-white">
        <Wrapper>
          <Product
            component={component}
            product={product}
            reviewHighlights={reviewHighlights}
            showFeaturedReviews={!showReviews}
            breadcrumbs={breadcrumbs}
            showBreadcrumbs={showBreadcrumbs}
          />
        </Wrapper>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-gray-50">
        {details && showDetails && <Details details={details} />}
        {policies && showPolicies && <Policies policies={policies} />}
      </div>

      <div className="bg-white">
        <Wrapper>
          {showReviews && <Reviews reviewList={reviewList} />}
          {showRelatedProducts && <RelatedProductsWithData collection="related-products" />}
        </Wrapper>
      </div>
    </div>
  );
};
