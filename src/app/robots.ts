import { isProduction, siteUrl } from '@/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : undefined,
      disallow: isProduction ? undefined : '/'
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
