import { ProductPageProductComponent } from '../types';
import { ProductWithImage, ProductWithImageProps } from './WithImage/WithImage';
import { ProductWithImageGrid, ProductWithImageGridProps } from './WithImageGrid/WithImageGrid';

export type ProductProps = {
  component: ProductPageProductComponent;
} & ProductWithImageGridProps &
  ProductWithImageProps;

export const Product = ({ component, ...props }: ProductProps) => {
  let Component;

  switch (component) {
    case 'withImage':
      Component = ProductWithImage;
      break;
    case 'withImageGrid':
      Component = ProductWithImageGrid;
      break;
    default:
      return null;
  }

  return <Component {...props} />;
};
