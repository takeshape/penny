import Image from 'components/NextImage';
import { Box } from 'theme-ui';

export interface StripeProductImageProps {
  alt?: string;
  images: string[];
  maxHeight?: string;
}

// This code path is still using Stripe Products
const StripeProductImage = ({ alt = '', images, maxHeight }: StripeProductImageProps) => {
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

export default StripeProductImage;
