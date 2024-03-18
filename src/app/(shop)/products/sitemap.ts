import { siteUrl } from '@/config';
import { getAllProductPageSummaryNodes } from '@/features/ProductPage/data';
import * as Sentry from '@sentry/nextjs';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Google's limit is 50,000 URLs per sitemap
    const summaryNodes = await getAllProductPageSummaryNodes();
    return summaryNodes.map(({ handle, updatedAt }) => ({
      url: `${siteUrl}/products/${handle}`,
      lastModified: updatedAt
    }));
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureMessage(error.message);
    }

    return [];
  }
}
