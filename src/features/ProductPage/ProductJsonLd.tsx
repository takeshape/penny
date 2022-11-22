import { ProductProps } from 'features/ProductPage/Product/Product';
import Script from 'next/script';
import { useMemo } from 'react';
import { ReviewList } from 'types/review';

export type ProductJsonLdProps = Pick<ProductProps, 'product'> & {
  reviewList: ReviewList | null;
  trustpilotReviewList: ReviewList | null;
};

export const ProductJsonLd = ({ product, reviewList, trustpilotReviewList }: ProductJsonLdProps) => {
  const reviewsForJsonLd = useMemo(() => {
    return reviewList ?? trustpilotReviewList;
  }, [reviewList, trustpilotReviewList]);

  const review = useMemo(() => {
    if (reviewsForJsonLd) {
      return reviewsForJsonLd.items.map((review) => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating
        },
        author: {
          '@type': 'Person',
          name: review.reviewer.name
        }
      }));
    }
  }, [reviewsForJsonLd]);

  const aggregateRating = useMemo(() => {
    if (reviewsForJsonLd) {
      return {
        '@type': 'AggregateRating',
        ratingValue: reviewsForJsonLd.stats.average,
        ratingCount: reviewsForJsonLd.stats.count
      };
    }
  }, [reviewsForJsonLd]);

  return (
    <Script id="product-json-ld" type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.images[0]?.url,
        review,
        aggregateRating
      })}
    </Script>
  );
};
