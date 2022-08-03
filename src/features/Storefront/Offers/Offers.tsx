import { StorefrontChild } from 'features/Storefront/types';

type OffersProps = StorefrontChild & { __typename: 'OffersComponent' };

export const Offers = ({ offers }: OffersProps) => {
  if (!offers) return null;
  return (
    <nav aria-label="Offers" className="order-last lg:order-first">
      <div className="max-w-7xl mx-auto lg:px-8">
        <ul role="list" className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
          {offers.map(({ description, href, name }, index) => (
            <li key={index} className="flex flex-col">
              <a
                href={href}
                className="relative flex-1 flex flex-col justify-center bg-background py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-mainText-500">{name}</p>
                <p className="font-semibold text-primary-900">{description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
