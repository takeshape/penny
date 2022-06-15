import { StarIcon } from '@heroicons/react/solid';
import { useMemo } from 'react';
import classNames from 'utils/classNames';

interface StarProps {
  lit?: boolean;
}

export const Star = ({ lit }: StarProps) => (
  <StarIcon
    className={classNames(lit ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0')}
    aria-hidden="true"
  />
);

interface StarsProps {
  scale?: number;
  rating: number;
}

export const Stars = (props: StarsProps) => {
  const { scale = 5, rating } = props;
  const ratings = useMemo(() => [...Array(scale).keys()], [scale]);
  return (
    <div className="flex items-center">
      {ratings.map((index) => (
        <Star key={`${rating}/${index}`} lit={rating > index} />
      ))}
    </div>
  );
};

export default Stars;
