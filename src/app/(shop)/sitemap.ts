import { siteUrl } from '@/config';
import { getAllPageSummaryItems } from '@/features/Page/data';
import * as Sentry from '@sentry/nextjs';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let pages: Awaited<ReturnType<typeof getAllPageSummaryItems>> = [];

  try {
    pages = await getAllPageSummaryItems();
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureMessage(error.message);
    }
  }

  return [
    {
      url: `${siteUrl}`,
      lastModified: 'hourly'
    },
    {
      url: `${siteUrl}/products/sitemap.xml`
    },
    {
      url: `${siteUrl}/collections/sitemap.xml`
    },
    ...pages.map(({ slug, _updatedAt }) => ({
      url: `${siteUrl}/${slug}`,
      lastModified: _updatedAt ?? 'monthly'
    }))
  ];
}
