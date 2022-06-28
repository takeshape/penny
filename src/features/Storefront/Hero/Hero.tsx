import { getImageUrl } from '@takeshape/routing';
import Button from 'components/Button/Button';
import NextImage from 'components/NextImage';
import { StorefrontChild } from 'features/Storefront/types';

type HeroProps = StorefrontChild & { __typename?: 'HeroComponent' };

export const Hero = ({ primaryText, secondaryText, buttonText, image }: HeroProps) => {
  return (
    <div className="relative bg-gray-100 pb-4 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
        <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
          <div className="lg:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
              {primaryText}
            </h1>
            <p className="mt-4 text-xl text-gray-600">{secondaryText}</p>
            <div className="mt-6">
              <Button as="a" href="#" color="primary" size="large">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
          <NextImage
            src={getImageUrl(image)}
            alt={image.description ?? ''}
            className="w-full h-full object-center object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};
