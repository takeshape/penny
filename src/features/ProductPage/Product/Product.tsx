import type { ProductWithExpandableDetailsProps } from './WithExpandableDetails/WithExpandableDetails';
import ProductWithExpandableDetails from './WithExpandableDetails/WithExpandableDetails';
import type { ProductWithImageGridProps } from './WithImageGrid/WithImageGrid';
import ProductWithImageGrid from './WithImageGrid/WithImageGrid';

export type ProductProps = {
  component: 'withExpandableDetails' | 'withImageGrid';
} & ProductWithImageGridProps &
  ProductWithExpandableDetailsProps;

export const Product = ({ component, ...props }: ProductProps) => {
  let Component;

  switch (component) {
    case 'withExpandableDetails':
      Component = ProductWithExpandableDetails;
      break;
    case 'withImageGrid':
      Component = ProductWithImageGrid;
      break;
    default:
      return null;
  }

  return <Component {...props} />;
};

export default Product;
