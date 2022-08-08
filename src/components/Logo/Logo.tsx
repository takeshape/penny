import NextImage from 'components/NextImage';
import { siteLogo, siteName } from 'config';

export interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  return (
    <div className="relative flex justify-center items-center">
      <span className="sr-only">{siteName}</span>
      <NextImage src={siteLogo} alt={siteName} height={100} width={100} className={props.className} />
    </div>
  );
};
