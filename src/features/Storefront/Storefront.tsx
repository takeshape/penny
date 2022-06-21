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
  const StorefrontComponent = (component: StorefrontComponentsProperty) => {
    switch (component.__typename) {
      case 'BackgroundImageComponent':
        return (
          <BackgroundImage {...component}>
            {component.components.map(storefrontResponseToComponent(items))}
          </BackgroundImage>
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
        return (
          <Wrapper>
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
  const components = storefrontResponseToComponent(items);

  return (
    <main className="bg-white">
      {storefront.components.map((component, idx) => {
        return <div key={idx}>{components(component)}</div>;
      })}
    </main>
  );
};
