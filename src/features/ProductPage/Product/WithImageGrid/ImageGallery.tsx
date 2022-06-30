import NextImage from 'components/NextImage';
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
    images.length >= 3 && 'aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3',
    images.length === 2 && 'aspect-h-4 aspect-w-4 lg:aspect-h-3 lg:aspect-w-3',
    images.length === 1 && 'aspect-h-3 aspect-w-4 lg:aspect-h-2 lg:aspect-w-4',
    'sm:rounded-lg sm:overflow-hidden'
  );

  return (
    <div className={wrapperClass}>
      <div className={firstImageClass}>
        <NextImage
          src={images[0].url}
          alt={images[0].altText}
          height={800}
          width={800}
          className="w-full h-full object-center object-cover asp"
          priority
        />
      </div>
      {images.length === 2 && (
        <div className="hidden aspect-w-3 aspect-h-3 rounded-lg overflow-hidden lg:block">
          <NextImage
            src={images[1].url}
            alt={images[1].altText}
            height={800}
            width={800}
            className="w-full h-full object-center object-cover"
          />
        </div>
      )}
      {images.length === 3 && (
        <>
          <div className="hidden aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
            <NextImage
              src={images[1].url}
              alt={images[1].altText}
              height={800}
              width={800}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
            <NextImage
              src={images[2].url}
              alt={images[2].altText}
              height={800}
              width={800}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </>
      )}
      {images.length > 3 && (
        <>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              {images[1] && (
                <NextImage
                  src={images[1].url}
                  alt={images[1].altText}
                  height={800}
                  width={800}
                  className="w-full h-full object-center object-cover"
                />
              )}
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              {images[2] && (
                <NextImage
                  src={images[2].url}
                  alt={images[2].altText}
                  height={800}
                  width={800}
                  className="w-full h-full object-center object-cover"
                />
              )}
            </div>
          </div>
          <div className="hidden aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 lg:block">
            {images[3] && (
              <NextImage
                src={images[3].url}
                alt={images[3].altText}
                height={800}
                width={800}
                className="w-full h-full object-center object-cover"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
