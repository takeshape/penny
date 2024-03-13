import { siteUrl } from '@/config';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';

export const Seo = ({ ...props }: NextSeoProps) => {
  const { asPath } = useRouter();
  const canonical = new URL(asPath, siteUrl).href;
  return <NextSeo canonical={canonical} {...props} />;
};

export default Seo;
