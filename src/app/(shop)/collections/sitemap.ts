import { siteUrl } from '@/config';
import { getAllCategoryPageSummaryNodes } from '@/features/ProductCategory/data';
import * as Sentry from '@sentry/nextjs';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const summaryNodes = await getAllCategoryPageSummaryNodes();
    return summaryNodes.map(({ handle, updatedAt }) => ({
      url: `${siteUrl}/collections/${handle}`,
      lastModified: updatedAt
    }));
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureMessage(error.message);
    }

    return [];
  }
}
