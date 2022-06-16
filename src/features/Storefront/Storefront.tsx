import Wrapper from 'components/Wrapper/Content';
import { Header } from 'features/ProductCategory/Header/Header';
import { ProductGrid, ProductGridProps } from 'features/ProductCategory/ProductGrid/ProductGrid';
import BackgroundImage from 'features/Storefront/BackgroundImage/BackgroundImage';
import Hero from 'features/Storefront/Hero/Hero';
import Offers from 'features/Storefront/Offers/Offers';
import Sale from 'features/Storefront/Sale/Sale';
import Testimonials from 'features/Storefront/Testimonials/Testimonials';
import { StorefrontComponentsProperty } from 'types/takeshape';
import { GetStorefrontResponse } from '../../queries';
import Collections from './Collections/Collections';

function storefrontResponseToComponent(products: ProductGridProps['products']) {
  const StorefrontComponent = (component: StorefrontComponentsProperty) => {
    switch (component.__typename) {
      case 'BackgroundImageComponent':
        return (
          <BackgroundImage {...component}>
            {component.components.map(storefrontResponseToComponent(products))}
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
            <ProductGrid products={products} />;
          </Wrapper>
        );
      default:
        return null;
    }
  };

  return StorefrontComponent;
}

const Storefront = ({ products, storefront }: GetStorefrontResponse & ProductGridProps) => {
  return <main className="bg-white">{storefront.components.map(storefrontResponseToComponent(products))}</main>;
};

export default Storefront;
