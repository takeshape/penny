import Wrapper from 'components/Wrapper/Content';
import { TrustpilotWithData } from 'features/ProductPage/Trustpilot/TrustpilotWIthData';
import { shopifyGidToId } from 'transforms/shopify';
import { ReviewList } from 'types/review';
import { Details } from './Details/Details';
import { Policies } from './Policies/Policies';
import { Product, ProductProps } from './Product/Product';
import { RelatedProductsWithData } from './RelatedProducts/RelatedProductsWithData';
import { ReviewsWithData } from './Reviews/ReviewsWithData';
import { ProductPageDetails, ProductPageOptions, ProductPagePolicies } from './types';

export type ProductPageProps = Omit<ProductProps, 'showFeaturedReviews' | 'showBreadcrumbs' | 'showReviewsLink'> & {
  reviewsPerPage?: number;
  reviewList: ReviewList | null;
  trustpilotReviewList: ReviewList | null;
  options: Omit<ProductPageOptions, 'component'>;
  details: ProductPageDetails | null;
  policies: ProductPagePolicies | null;
};

export const ProductPage = ({
  product,
  reviewHighlights,
  component,
  options,
  details,
  policies,
  reviewList,
  trustpilotReviewList,
  breadcrumbs,
  reviewsPerPage
}: ProductPageProps) => {
  const { showDetails, showPolicies, showReviewsIo, showTrustpilot, showRelatedProducts, showBreadcrumbs } = options;

  return (
    <>
      <div className="bg-background">
        <Product
          component={component}
          product={product}
          reviewHighlights={showReviewsIo ? reviewHighlights : null}
          showFeaturedReviews={!showReviewsIo}
          breadcrumbs={breadcrumbs}
          showBreadcrumbs={showBreadcrumbs}
          showReviewsLink={showReviewsIo}
        />
      </div>
      {((details && showDetails) || (policies && showPolicies)) && (
        <div className="bg-background">
          <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {details && showDetails && <Details details={details} />}
            {policies && showPolicies && <Policies policies={policies} />}
          </div>
        </div>
      )}
      <div className="bg-background">
        <Wrapper>
          {showReviewsIo && reviewList && (
            <ReviewsWithData
              productName={product.name}
              sku={shopifyGidToId(product.id)}
              reviewList={reviewList}
              reviewsPerPage={reviewsPerPage ?? 5}
            />
          )}
          {showTrustpilot && trustpilotReviewList && (
            <TrustpilotWithData sku={shopifyGidToId(product.id)} reviewList={trustpilotReviewList} />
          )}
          {showRelatedProducts && <RelatedProductsWithData limit={4} productId={product.id} />}
        </Wrapper>
      </div>
    </>
  );
};
