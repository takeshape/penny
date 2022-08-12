import NextImage from 'components/NextImage';

export interface TrustpilotStarsProps {
  stars: number;
  width?: number;
  height?: number;
}

export const TrustpilotStars = ({ stars, width, height }: TrustpilotStarsProps) => {
  let whole = Math.floor(stars);
  let half = (Math.floor(stars * 2) / 2) % 1 !== 0;

  return (
    <NextImage
      className="inline"
      src={`/images/trustpilot/Trustpilot_ratings_${whole}${half ? 'half' : ''}star-RGB.png`}
      alt={`${stars} stars`}
      height={height ?? 10}
      width={width ?? 100}
    />
  );
};
