import { Storefront as StorefrontType, StorefrontComponentsProperty } from 'types/takeshape';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { Collection } from './Collection/Collection';
import { Collections } from './Collections/Collections';
import { Hero } from './Hero/Hero';
import { Offers } from './Offers/Offers';
import { Sale } from './Sale/Sale';
import { Testimonials } from './Testimonials/Testimonials';
import { StorefrontCollection } from './types';

function storefrontResponseToComponent(collection: StorefrontCollection) {
  const StorefrontComponent = (component: StorefrontComponentsProperty, index = 0) => {
    switch (component.__typename) {
      case 'BackgroundImageComponent':
        return (
          <BackgroundImage key={index} {...component}>
            {component.components.map(storefrontResponseToComponent(collection))}
          </BackgroundImage>
        );
      case 'CollectionsComponent':
        return <Collections key={index} {...component} />;
      case 'HeroComponent':
        return <Hero key={index} {...component} />;
      case 'OffersComponent':
        return <Offers key={index} {...component} />;
      case 'SaleComponent':
        return <Sale key={index} {...component} />;
      case 'TestimonialsComponent':
        return <Testimonials key={index} {...component} />;
      case 'TrendingProductsComponent':
        return <Collection key={index} collection={collection} {...component} />;
      default:
        return null;
    }
  };

  return StorefrontComponent;
}

export interface StorefrontProps {
  storefront: StorefrontType;
  collection: StorefrontCollection;
}

export const Storefront = ({ collection, storefront }: StorefrontProps) => {
  return <div className="bg-white">{storefront.components.map(storefrontResponseToComponent(collection))}</div>;
};
