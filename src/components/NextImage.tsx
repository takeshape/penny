// Because of this... https://github.com/vercel/next.js/issues/18393

import { isStorybook } from 'config';
import NextBaseImage, { ImageProps } from 'next/image';

const NextImage = (props: ImageProps) => {
  return <NextBaseImage unoptimized={isStorybook} {...props} />;
};

export default NextImage;
