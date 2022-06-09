import Image from 'components/NextImage';
import { ProductImage } from 'types/product';

export interface ImageGalleryProps {
  images: ProductImage[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        {images[0] && (
          <div className="w-full h-full">
            <Image src={images[0].url} alt={images[0].altText} layout="fill" objectFit="cover" priority />
          </div>
        )}
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          {images[1] && (
            <div className="w-full h-full">
              <Image src={images[1].url} alt={images[1].altText} layout="fill" objectFit="cover" />
            </div>
          )}
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          {images[2] && (
            <div className="w-full h-full">
              <Image src={images[2].url} alt={images[2].altText} layout="fill" objectFit="cover" />
            </div>
          )}
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <div className="w-full h-full">
          {images[3] && <Image src={images[3].url} alt={images[3].altText} layout="fill" objectFit="cover" />}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
