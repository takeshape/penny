import Image from 'components/NextImage';
import { ProductImage } from 'types/product';
import classNames from 'utils/classNames';

export interface ImageGalleryProps {
  images: ProductImage[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {

  if (images.length === 0) {
    return null;
  }

  const wrapperClass = classNames(
    images.length >= 3 && 'lg:grid-cols-3',
    images.length === 2 && 'lg:grid-cols-2',
    images.length === 1 && 'lg:grid-cols-1',
    'mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:gap-x-8 lg:px-8'
  );

  const firstImageClass = classNames(
    images.length >= 3 && 'aspect-h-5 lg:aspect-h-4',
    images.length === 2 && 'aspect-h-4 lg:aspect-h-3',
    images.length === 1 && 'aspect-h-3 lg:aspect-h-2',
    'aspect-w-4 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3'
  );

  return (
    <div className={wrapperClass}>
      <div className={firstImageClass}>
        <div className="w-full h-full">
          <Image src={images[0].url} alt={images[0].altText} layout="fill" objectFit="cover" priority />
        </div>
      </div>
      {images.length === 2 && (
        <div className="hidden aspect-w-3 aspect-h-3 rounded-lg overflow-hidden lg:block">
          <div className="w-full h-full">
            <Image src={images[1].url} alt={images[1].altText} layout="fill" objectFit="cover" />
          </div>
        </div>
      )}
      {images.length === 3 && (
        <>
          <div className="hidden aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
            <div className="w-full h-full">
              <Image src={images[1].url} alt={images[1].altText} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="hidden aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
            <div className="w-full h-full">
              <Image src={images[2].url} alt={images[2].altText} layout="fill" objectFit="cover" />
            </div>
          </div>
        </>
      )}
      {images.length > 3 && (
        <>
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
          <div className="hidden aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
            <div className="w-full h-full">
              {images[3] && <Image src={images[3].url} alt={images[3].altText} layout="fill" objectFit="cover" />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
