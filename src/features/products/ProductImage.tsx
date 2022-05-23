import Image from 'components/NextImage';
import { Box } from 'theme-ui';
import type { ProductImage as ProductImageType } from 'types/product';

export interface ProductImageProps {
  alt?: string;
  image: ProductImageType;
  maxHeight?: string;
}

const ProductImage = ({ alt = '', image, maxHeight }: ProductImageProps) => {
  if (!image.url) {
    return null;
  }

  return (
    <Box as="div" sx={{ position: 'relative', width: '100%', height: maxHeight }}>
      <Image alt={alt} src={image.url} height={image.height} width={image.width} layout="responsive" />
    </Box>
  );
};

export default ProductImage;
