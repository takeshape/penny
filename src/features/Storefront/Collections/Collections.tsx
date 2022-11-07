import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { StorefrontChild } from 'features/Storefront/types';

type CollectionsProps = StorefrontChild & {
  __typename: 'CollectionsComponent';
};

export const Collections = ({ collections }: CollectionsProps) => {
  if (!collections || !collections.length) return null;
  return (
    <section aria-labelledby="collections-heading" className="bg-body-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 id="collections-heading" className="text-2xl font-extrabold text-body-900">
            Collections
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {collections.map(({ description, href, name, image }) => (
              <div key={name} className="group relative">
                {image && (
                  <div className="w-full h-80 bg-background rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <NextImage
                      alt={image.description ?? ''}
                      src={getImageUrl(image, { fm: 'webp', lossless: 'true' })}
                      height={500}
                      width={500}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                )}

                <h3 className="mt-6 text-sm text-body-500">
                  <NextLink href={href}>
                    <span>
                      <span className="absolute inset-0" />
                      {name}
                    </span>
                  </NextLink>
                </h3>
                <p className="text-base font-semibold text-primary-900">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
