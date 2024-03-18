import { siteUrl } from '@/config';
import { getAllCategoryPageSummaryNodes } from '@/features/ProductCategory/data';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const summaryNodes = await getAllCategoryPageSummaryNodes();
  return summaryNodes.map(({ handle, updatedAt }) => ({
    url: `${siteUrl}/collections/${handle}`,
    lastModified: updatedAt
  }));
}
