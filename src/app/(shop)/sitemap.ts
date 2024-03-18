import { siteUrl } from '@/config';
import { getAllPageSummaryItems } from '@/features/Page/data';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPageSummaryItems();

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
