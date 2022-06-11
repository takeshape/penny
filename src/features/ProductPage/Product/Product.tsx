import ProductWithExpandableDetails, {
  ProductWithExpandableDetailsProps
} from './WithExpandableDetails/WithExpandableDetails';
import ProductWithImageGrid, { ProductWithImageGridProps } from './WithImageGrid/WithImageGrid';

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
