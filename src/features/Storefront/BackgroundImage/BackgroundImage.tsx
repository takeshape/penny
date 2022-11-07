import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import { StorefrontChild } from 'features/Storefront/types';
import { PropsWithChildren } from 'react';

type BackgroundImageProps = StorefrontChild & { __typename: 'BackgroundImageComponent' };

export const BackgroundImage = ({ image, children }: PropsWithChildren<BackgroundImageProps>) => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
          {image && (
            <div className="w-full h-full">
              <NextImage
                src={getImageUrl(image, { fm: 'webp', lossless: 'true' })}
                alt={image.description ?? ''}
                className="w-full h-full object-center object-cover"
                height={1000}
                width={1000}
              />
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-background bg-opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background" />
      </div>
      {children}
    </div>
  );
};
