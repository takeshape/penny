import Wrapper from 'components/Wrapper/Content';
import DetailsFromTakeshape, { DetailsFromTakeshapeProps } from 'features/ProductPage/Details/DetailsFromTakeshape';
import PoliciesFromTakeshape from 'features/ProductPage/Policies/PoliciesFromTakeshape';
import ReviewsFromReviewsIo, { ReviewsFromReviewsIoProps } from 'features/ProductPage/Reviews/ReviewsFromReviewsIo';
import RelatedProductsFromShopify, {
  RelatedProductsFromShopifyProps
} from 'features/RelatedProducts/RelatedProductsFromShopify';
import { ProductPagePoliciesFromTakeshapeProps } from './Policies/PoliciesFromTakeshape';
import ProductFromShopify, { ProductFromShopifyProps } from './Product/ProductFromShopify';
import { ProductPageOptions } from './types';

export type ProductPageProps = ProductFromShopifyProps &
  ProductPagePoliciesFromTakeshapeProps &
  ReviewsFromReviewsIoProps &
  DetailsFromTakeshapeProps &
  RelatedProductsFromShopifyProps & {
    options: ProductPageOptions;
  };

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage = ({ productId, sku, component, options }: ProductPageProps) => {
  const { showDetails, showPolicies, showReviews, showRelatedProducts } = options;

  return (
    <div className="bg-gray-50">
      <div className="bg-white">
        <Wrapper>
          <ProductFromShopify component={component} productId={productId} breadcrumbs={breadcrumbs} />
        </Wrapper>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-gray-50">
        {showDetails && <DetailsFromTakeshape productId={productId} />}
        {showPolicies && <PoliciesFromTakeshape productId={productId} />}
      </div>

      <div className="bg-white">
        <Wrapper>
          {showReviews && <ReviewsFromReviewsIo sku={sku} />}
          {showRelatedProducts && <RelatedProductsFromShopify collection="related-products" />}
        </Wrapper>
      </div>
    </div>
  );
};

export default ProductPage;
