import { getColor } from '@theme-ui/color';
import StarRatings from 'react-star-ratings';
import { Box, Flex, Text, useThemeUI } from 'theme-ui';
import type { ReviewsIo_ProductReview } from 'types/takeshape';

export interface ReviewListItemProps extends ReviewsIo_ProductReview {}

export const ReviewListItem = ({ title, review, rating, timeago, date_created }: ReviewListItemProps) => {
  const { theme } = useThemeUI();
  return (
    <Box>
      <Flex as="header" sx={{ alignItems: 'baseline', gap: '1rem' }}>
        <Box sx={{ marginBottom: '.75em' }}>
          <Text as="h3" sx={{ marginBottom: 0 }}>
            {title}
          </Text>
          <Text as="time" title={date_created} sx={{ fontSize: '.8em', lineHeight: 1, opacity: 0.7 }}>
            {timeago}
          </Text>
        </Box>
        <StarRatings
          rating={rating}
          numberOfStars={5}
          starDimension="14px"
          starSpacing="1px"
          starRatedColor={getColor(theme, 'primary')}
        />
      </Flex>
      <Text as="p">{review}</Text>
    </Box>
  );
};

export default ReviewListItem;
