import Blog, { BlogProps } from './Blog/Blog';
import Details, { DetailsProps } from './Details/Details';
import Policies, { PoliciesProps } from './Policies/Policies';
import Product, { ProductProps } from './Product/Product';
import RelatedProducts, { RelatedProductsProps } from './RelatedProducts/RelatedProducts';
import Reviews, { ReviewsProps } from './Reviews/Reviews';

export type ProductPageProps = ProductProps &
  PoliciesProps &
  ReviewsProps &
  DetailsProps &
  BlogProps &
  RelatedProductsProps;

const ProductPage = (props: React.PropsWithChildren<ProductPageProps>) => {
  const { product, reviews, policies, details, blog, relatedProducts, addToCart } = props;
  return (
    <>
      <Product product={product} reviews={reviews} addToCart={addToCart} />
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <Details details={details} />
        <Policies policies={policies} />
      </div>
      <Reviews reviews={reviews} />
      <RelatedProducts addToCart={addToCart} relatedProducts={relatedProducts} />
      <Blog blog={blog} />
    </>
  );
};

export default ProductPage;
