import { Image } from 'theme-ui';

export interface ProductImageProps {
  alt?: string;
  images: string[];
  maxHeight?: string;
}

const ProductImage: React.FC<ProductImageProps> = (props) => {
  const { alt = '', images, maxHeight } = props;
  const src = images?.[0];
  if (!src) return null;
  return (
    <Image
      alt={alt}
      src={src}
      sx={{
        height: maxHeight,
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center'
      }}
    />
  );
};

export default ProductImage;
