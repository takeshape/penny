import Wrapper from 'components/Wrapper/Content';
import { TrustpilotWithData } from 'features/ProductPage/Trustpilot/TrustpilotWIthData';
import { shopifyGidToId } from 'transforms/shopify';
import { TrustpilotReviewList, TrustpilotSummary } from 'types/trustpilot';
import { Details, DetailsProps } from './Details/Details';
import { Policies, PoliciesProps } from './Policies/Policies';
import { Product, ProductProps } from './Product/Product';
import { RelatedProductsWithData } from './RelatedProducts/RelatedProductsWithData';
import { ReviewsWithData, ReviewsWithDataProps } from './Reviews/ReviewsWithData';
import { ProductPageOptions } from './types';

export type ProductPageProps = Omit<ProductProps, 'showFeaturedReviews' | 'showBreadcrumbs' | 'showReviewsLink'> &
  PoliciesProps &
  Omit<ReviewsWithDataProps, 'sku' | 'productName'> & {
    trustpilotReviewList: TrustpilotReviewList;
    trustpilotSummary: TrustpilotSummary;
  } & DetailsProps & {
    options: Omit<ProductPageOptions, 'component'>;
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
  trustpilotSummary,
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
          reviewHighlights={reviewHighlights}
          showFeaturedReviews={!showReviewsIo}
          breadcrumbs={breadcrumbs}
          showBreadcrumbs={showBreadcrumbs}
          showReviewsLink={showReviewsIo}
        />
      </div>
      <div className="bg-background">
        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {details && showDetails && <Details details={details} />}
          {policies && showPolicies && <Policies policies={policies} />}
        </div>
      </div>
      <div className="bg-background">
        <Wrapper>
          {showReviewsIo && (
            <ReviewsWithData
              productName={product.name}
              sku={shopifyGidToId(product.id)}
              reviewList={reviewList}
              reviewsPerPage={reviewsPerPage}
            />
          )}
          {showTrustpilot && (
            <TrustpilotWithData
              sku={shopifyGidToId(product.id)}
              trustpilotReviewList={trustpilotReviewList}
              trustpilotSummary={trustpilotSummary}
            />
          )}
          {showRelatedProducts && <RelatedProductsWithData limit={4} productId={product.id} />}
        </Wrapper>
      </div>
    </>
  );
};
