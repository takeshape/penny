import RelatedProductsFromShopify, {
    RelatedProductsFromShopifyProps
} from 'features/RelatedProducts/RelatedProductsFromShopify';
import { BlogProps } from './Blog/Blog';
import { DetailsProps } from './Details/Details';
import { ProductPagePoliciesProps } from './Policies/Policies';
import ProductFromShopify, { ProductFromShopifyProps } from './Product/ProductFromShopify';
import ProductPageReviews, { ProductPageReviewsProps } from './Reviews/Reviews';

export type ProductPageProps = ProductFromShopifyProps &
  ProductPagePoliciesProps &
  ProductPageReviewsProps &
  DetailsProps &
  BlogProps &
  RelatedProductsFromShopifyProps;

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage = (props: React.PropsWithChildren<ProductPageProps>) => {
  const { productId, reviews, collection, policies, details, blog } = props;

  return (
    <>
      <ProductFromShopify component="withExpandableDetails" productId={productId} breadcrumbs={breadcrumbs} />
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* <Details details={details} /> */}
        {/* <Policies policies={policies} /> */}
      </div>
      <ProductPageReviews reviews={reviews} />
      <RelatedProductsFromShopify collection={collection} />
      {/* <Blog blog={blog} /> */}
    </>
  );
};

export default ProductPage;
