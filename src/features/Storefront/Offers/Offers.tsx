export interface Offer {
  href: string;
  name: string;
  description: string;
}

export interface OffersProps {
  offers: Offer[];
}

const Offers: React.FC<OffersProps> = ({ offers }) => {
  if (!offers) return null;
  return (
    <nav aria-label="Offers" className="order-last lg:order-first">
      <div className="max-w-7xl mx-auto lg:px-8">
        <ul role="list" className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
          {offers.map((offer) => (
            <li key={offer.name} className="flex flex-col">
              <a
                href={offer.href}
                className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
              >
                <p className="text-sm text-gray-500">{offer.name}</p>
                <p className="font-semibold text-gray-900">{offer.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Offers;
