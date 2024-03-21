import classNames from '@/lib/util/classNames';
import { StarIcon } from '@heroicons/react/24/solid';
import { MouseEventHandler, useMemo } from 'react';

type StarProps = {
  lit?: boolean;
  onClick?: MouseEventHandler<SVGSVGElement>;
  hoverHighlight?: boolean;
};

export const Star = ({ lit, onClick, hoverHighlight = false }: StarProps) => (
  <StarIcon
    className={classNames(
      lit
        ? `text-yellow-400 ${hoverHighlight ? 'hover:fill-yellow-600' : ''}`
        : `text-gray-300 ${hoverHighlight ? 'hover:fill-gray-500' : ''}`,
      `h-5 w-5 flex-shrink-0 ${hoverHighlight ? 'cursor-pointer' : ''}`
    )}
    aria-hidden="true"
    onClick={onClick}
  />
);

type StarsProps = {
  scale?: number;
  rating: number;
  hoverHighlight?: boolean;
};

export const Stars = (props: StarsProps) => {
  const { scale = 5, rating, hoverHighlight } = props;
  const ratings = useMemo(() => [...Array(scale).keys()], [scale]);
  return (
    <div className="flex items-center">
      {ratings.map((index) => (
        <Star key={`${rating}/${index}`} lit={rating > index} hoverHighlight={hoverHighlight} />
      ))}
    </div>
  );
};

export default Stars;
