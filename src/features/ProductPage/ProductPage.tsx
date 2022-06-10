import RelatedProducts from 'features/RelatedProducts/RelatedProductsFromShopify';
import Blog, { BlogProps } from './Blog/Blog';
import Details, { DetailsProps } from './Details/Details';
import Policies, { PoliciesProps } from './Policies/Policies';
import type { ProductProps } from './Product/Product';
import Product from './Product/Product';
import Reviews, { ReviewsProps } from './Reviews/Reviews';

export type ProductPageProps = ProductProps & PoliciesProps & ReviewsProps & DetailsProps & BlogProps;

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage = (props: React.PropsWithChildren<ProductPageProps>) => {
  const { product, reviews, policies, details, blog } = props;

  return (
    <>
      <Product component="withExpandableDetails" product={product} reviews={reviews} breadcrumbs={breadcrumbs} />
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <Details details={details} />
        <Policies policies={policies} />
      </div>
      <Reviews reviews={reviews} />
      <RelatedProducts />
      <Blog blog={blog} />
    </>
  );
};

export default ProductPage;
