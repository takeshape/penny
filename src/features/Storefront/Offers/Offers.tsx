import { OffersComponent } from 'types/takeshape';

const Offers = ({ offers }: OffersComponent) => {
  if (!offers) return null;
  return (
    <nav aria-label="Offers" className="order-last lg:order-first">
      <div className="max-w-7xl mx-auto lg:px-8">
        <ul role="list" className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
          {offers.map(({ description, href, name }, index) => (
            <li key={index} className="flex flex-col">
              <a
                href={href}
                className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-gray-500">{name}</p>
                <p className="font-semibold text-gray-900">{description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Offers;
