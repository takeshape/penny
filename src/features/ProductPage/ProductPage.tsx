import Wrapper from 'components/Wrapper/Content';
import { shopifyGidToId } from 'transforms/shopify';
import { Details, DetailsProps } from './Details/Details';
import { Policies, PoliciesProps } from './Policies/Policies';
import { Product, ProductProps } from './Product/Product';
import { RelatedProductsWithData } from './RelatedProducts/RelatedProductsWithData';
import { ReviewsWithData, ReviewsWithDataProps } from './Reviews/ReviewsWithData';
import { ProductPageOptions } from './types';

export type ProductPageProps = Omit<ProductProps, 'showFeaturedReviews' | 'showBreadcrumbs' | 'showReviewsLink'> &
  PoliciesProps &
  Omit<ReviewsWithDataProps, 'sku' | 'productName'> &
  DetailsProps & {
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
  breadcrumbs,
  reviewsPerPage
}: ProductPageProps) => {
  const { showDetails, showPolicies, showReviews, showRelatedProducts, showBreadcrumbs } = options;

  return (
    <>
      <div className="bg-white">
        <Product
          component={component}
          product={product}
          reviewHighlights={reviewHighlights}
          showFeaturedReviews={!showReviews}
          breadcrumbs={breadcrumbs}
          showBreadcrumbs={showBreadcrumbs}
          showReviewsLink={showReviews}
        />
      </div>
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {details && showDetails && <Details details={details} />}
          {policies && showPolicies && <Policies policies={policies} />}
        </div>
      </div>
      <div className="bg-white">
        <Wrapper>
          {showReviews && (
            <ReviewsWithData
              productName={product.name}
              sku={shopifyGidToId(product.id)}
              reviewList={reviewList}
              reviewsPerPage={reviewsPerPage}
            />
          )}
          {showRelatedProducts && <RelatedProductsWithData limit={4} productId={product.id} />}
        </Wrapper>
      </div>
    </>
  );
};
