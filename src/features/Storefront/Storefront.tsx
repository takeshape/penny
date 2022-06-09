import { useQuery } from '@apollo/client';
import Hero from 'features/Storefront/Hero/Hero';
import Offers from 'features/Storefront/Offers/Offers';
import Sale from 'features/Storefront/Sale/Sale';
import Testimonials from 'features/Storefront/Testimonials/Testimonials';
import { GetStorefrontQuery, GetStorefrontResponse } from '../../queries';
import Collections from './Collections/Collections';

const Storefront = () => {
  const { data } = useQuery<GetStorefrontResponse>(GetStorefrontQuery);

  return (
    <main className="bg-white">
      {data.storefront.components.map((component) => {
        switch (component.__typename) {
          case 'BackgroundImageComponent':
            return null;
          case 'CollectionsComponent':
            return <Collections {...component} />;
          case 'HeroComponent':
            return <Hero {...component} />;
          case 'OffersComponent':
            return <Offers offers={component.offers} />;
          case 'SaleComponent':
            return <Sale {...component} />;
          case 'TestimonialsComponent':
            return <Testimonials {...component} />;
          default:
            return null;
        }
      })}
    </main>
  );
};

export default Storefront;
