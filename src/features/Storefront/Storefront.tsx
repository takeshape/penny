import Wrapper from 'components/Wrapper/Content';
import { Header } from 'features/ProductCategory/Header/Header';
import { ProductGrid, ProductGridProps } from 'features/ProductCategory/ProductGrid/ProductGrid';
import { StorefrontComponentsProperty } from 'types/takeshape';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import { Collections } from './Collections/Collections';
import { Hero } from './Hero/Hero';
import { Offers } from './Offers/Offers';
import { GetStorefrontResponse } from './queries';
import { Sale } from './Sale/Sale';
import { Testimonials } from './Testimonials/Testimonials';

function storefrontResponseToComponent(items: ProductGridProps['items']) {
  const StorefrontComponent = (component: StorefrontComponentsProperty, index = 0) => {
    switch (component.__typename) {
      case 'BackgroundImageComponent':
        return (
          <BackgroundImage key={index} {...component}>
            {component.components.map(storefrontResponseToComponent(items))}
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
        return (
          <Wrapper key={index}>
            <Header header={{ text: { primary: 'Trending Products', secondary: '' } }} />
            <ProductGrid items={items} />;
          </Wrapper>
        );
      default:
        return null;
    }
  };

  return StorefrontComponent;
}

export const Storefront = ({ items, storefront }: GetStorefrontResponse & ProductGridProps) => {
  return <main className="bg-white">{storefront.components.map(storefrontResponseToComponent(items))}</main>;
};
