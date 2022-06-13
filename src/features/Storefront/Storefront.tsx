import BackgroundImage from 'features/Storefront/BackgroundImage/BackgroundImage';
import Hero from 'features/Storefront/Hero/Hero';
import Offers from 'features/Storefront/Offers/Offers';
import Sale from 'features/Storefront/Sale/Sale';
import Testimonials from 'features/Storefront/Testimonials/Testimonials';
import TrendingProducts from 'features/Storefront/TrendingProducts/TrendingProducts';
import { StorefrontComponentsProperty } from 'types/takeshape';
import { GetStorefrontResponse } from '../../queries';
import Collections from './Collections/Collections';

function storefrontResponseToComponent(component: StorefrontComponentsProperty) {
  switch (component.__typename) {
    case 'BackgroundImageComponent':
      return (
        <BackgroundImage {...component}>{component.components.map(storefrontResponseToComponent)}</BackgroundImage>
      );
    case 'CollectionsComponent':
      return <Collections {...component} />;
    case 'HeroComponent':
      return <Hero {...component} />;
    case 'OffersComponent':
      return <Offers {...component} />;
    case 'SaleComponent':
      return <Sale {...component} />;
    case 'TestimonialsComponent':
      return <Testimonials {...component} />;
    case 'TrendingProductsComponent':
      return <TrendingProducts />;
    default:
      return null;
  }
}

const Storefront = ({ storefront }: GetStorefrontResponse) => {
  return <main className="bg-white">{storefront.components.map(storefrontResponseToComponent)}</main>;
};

export default Storefront;
