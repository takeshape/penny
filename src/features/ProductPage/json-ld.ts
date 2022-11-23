import { ProductProps } from 'features/ProductPage/Product/Product';
import { ProductJsonLdProps } from 'next-seo';
import { ReviewList } from 'types/review';

export type GetProductJsonLdPropsArgs = Pick<ProductProps, 'product'> & {
  reviewsIoReviewList: ReviewList | null;
  trustpilotReviewList: ReviewList | null;
};

export const getProductJsonLdProps = ({
  product,
  reviewsIoReviewList,
  trustpilotReviewList
}: GetProductJsonLdPropsArgs): ProductJsonLdProps => {
  const reviewsForJsonLd = reviewsIoReviewList ?? trustpilotReviewList;

  let publisher: string;
  if (reviewsIoReviewList) {
    publisher = 'REVIEWS.io';
  } else if (trustpilotReviewList) {
    publisher = 'Trustpilot';
  }

  let reviews;
  if (reviewsForJsonLd) {
    reviews = reviewsForJsonLd.items.map((review) => ({
      author: review.reviewer.name,
      name: review.title,
      reviewBody: review.body,
      reviewRating: {
        ratingValue: review.rating
      },
      datePublished: review.createdAt,
      publisher: {
        type: 'Organization',
        name: publisher
      }
    }));
  }

  let aggregateRating;
  if (reviewsForJsonLd) {
    aggregateRating = {
      ratingValue: reviewsForJsonLd.stats.average,
      ratingCount: reviewsForJsonLd.stats.count
    };
  }

  return {
    productName: product.name,
    description: product.description,
    images: product.images.map((image) => image.url),
    reviews,
    aggregateRating
  };
};
