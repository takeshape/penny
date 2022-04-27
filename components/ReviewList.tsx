import { getColor } from '@theme-ui/color';
import StarRatings from 'react-star-ratings';
import { Box, Divider, Flex, Text, useThemeUI } from 'theme-ui';
import type { ReviewsIo_ListProductReviewsResponseStatsProperty, ReviewsIo_ProductReview } from 'types/takeshape';
import ReviewItem from './ReviewItem';

export interface ReviewListProps {
  reviews: ReviewsIo_ProductReview[] | null;
  stats: ReviewsIo_ListProductReviewsResponseStatsProperty | null;
}

export const ReviewList = (props: ReviewListProps) => {
  const { reviews, stats } = props;
  const { theme } = useThemeUI();
  if (!reviews?.length) return null;
  return (
    <Box sx={{ margin: '2rem 0' }}>
      {stats?.count && (
        <Flex
          as="header"
          sx={{
            alignItems: 'baseline',
            gap: '1rem'
          }}
        >
          <Text as="h2" sx={{ margin: 0 }}>
            {stats.count} {stats.count > 1 ? 'reviews' : 'review'}
          </Text>
          <StarRatings
            rating={stats.average}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor={getColor(theme, 'primary')}
          />
        </Flex>
      )}
      <Box as="ul" sx={{ paddingLeft: 0, listStyleType: 'none' }}>
        {reviews.map((review, index) => (
          <Box as="li" key={`review-${index}`}>
            <Divider sx={{ margin: '1rem 0' }} />
            <ReviewItem {...review} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewList;
