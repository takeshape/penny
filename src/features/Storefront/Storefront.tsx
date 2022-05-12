import BackgroundImage from 'features/Storefront/BackgroundImage/BackgroundImage';
import Hero, { HeroProps } from 'features/Storefront/Hero/Hero';
import Offers, { OffersProps } from 'features/Storefront/Offers/Offers';
import Sale, { SaleProps } from 'features/Storefront/Sale/Sale';
import Testimonials, { TestimonialsProps } from 'features/Storefront/Testimonials/Testimonials';
import Collections, { CollectionsProps } from './Collections/Collections';
import TrendingProducts, { TrendingProductsProps } from './TrendingProducts/TrendingProducts';

export interface StorefrontProps extends OffersProps, TestimonialsProps, CollectionsProps, TrendingProductsProps {
  hero: HeroProps;
  sale: SaleProps;
  saleImage: string;
};

const Storefront: React.FC<StorefrontProps> = props => {
  const {hero, offers, testimonials, collections, trendingProducts, sale, saleImage} = props;
  return (
    <main className="bg-white">
      <Offers offers={offers} />
      <Hero {...hero} />
      <TrendingProducts trendingProducts={trendingProducts} />
      <Collections collections={collections} />
      <BackgroundImage image={saleImage}>
        <Sale {...sale} />
        <Testimonials testimonials={testimonials} />
      </BackgroundImage>
    </main>
  )
}

export default Storefront;
