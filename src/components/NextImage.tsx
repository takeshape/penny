// Because of this... https://github.com/vercel/next.js/issues/18393

import { isStorybook, isTest } from 'config';
import NextBaseImage, { ImageProps } from 'next/future/image';

const NextImage = (props: ImageProps & { src: string }) => {
  if (isStorybook || isTest) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ''} />;
  }

  return <NextBaseImage {...props} alt={props.alt ?? ''} />;
};

export default NextImage;
