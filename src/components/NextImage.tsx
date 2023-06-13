import { isTest } from 'config';
import NextBaseImage, { ImageProps } from 'next/image';

const NextImage = (props: ImageProps & { src: string }) => {
  if (isTest) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ''} />;
  }

  return <NextBaseImage {...props} alt={props.alt ?? ''} />;
};

export default NextImage;
