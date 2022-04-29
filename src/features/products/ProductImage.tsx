import Image from 'components/NextImage';
import { Box } from 'theme-ui';

export interface ProductImageProps {
  alt?: string;
  images: string[];
  maxHeight?: string;
}

const ProductImage = ({ alt = '', images, maxHeight }: ProductImageProps) => {
  const src = images?.[0];

  if (!src) {
    return null;
  }

  return (
    <Box as="div" sx={{ position: 'relative', width: '100%', height: maxHeight }}>
      <Image alt={alt} src={src} layout="fill" objectFit="contain" />
    </Box>
  );
};

export default ProductImage;
