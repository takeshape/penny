import { siteUrl } from '@/config';
import { getAllProductPageSummaryNodes } from '@/features/ProductPage/data';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const summaryNodes = await getAllProductPageSummaryNodes();
  return summaryNodes.map((node) => ({
    url: `${siteUrl}/products/${node.handle}`,
    lastModified: node.updatedAt
  }));
}
