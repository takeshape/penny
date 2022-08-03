import { GetStorefrontQueryResponse } from 'types/takeshape';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { Collection } from './Collection/Collection';
import { Collections } from './Collections/Collections';
import { Hero } from './Hero/Hero';
import { Offers } from './Offers/Offers';
import { Sale } from './Sale/Sale';
import { Testimonials } from './Testimonials/Testimonials';
import { BackgroundImageChild, StorefrontChild } from './types';

function backgroundImageChildToComponent(component: BackgroundImageChild, index = 0) {
  switch (component.__typename) {
    case 'SaleComponent':
      return <Sale key={index} {...component} />;
    case 'TestimonialsComponent':
      return <Testimonials key={index} {...component} />;
    default:
      return null;
  }
}

function storefrontChildToComponent() {
  const StorefrontComponent = (component: StorefrontChild, index = 0) => {
    switch (component.__typename) {
      case 'BackgroundImageComponent':
        return (
          <BackgroundImage key={index} {...component}>
            {component.components.map(backgroundImageChildToComponent)}
          </BackgroundImage>
        );
      case 'CollectionsComponent':
        return <Collections key={index} {...component} />;
      case 'HeroComponent':
        return <Hero key={index} {...component} />;
      case 'OffersComponent':
        return <Offers key={index} {...component} />;
      case 'CollectionComponent':
        return <Collection key={index} {...component} />;
      default:
        return null;
    }
  };

  return StorefrontComponent;
}

export interface StorefrontProps {
  storefront: GetStorefrontQueryResponse['storefront'];
}

export const Storefront = ({ storefront }: StorefrontProps) => {
  return <div className="bg-background">{storefront.components.map(storefrontChildToComponent())}</div>;
};
