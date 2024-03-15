import { Storefront } from '@/features/Storefront/Storefront';
import { GetStorefrontQuery } from '@/features/Storefront/queries';
import { getStorefront } from '@/features/Storefront/transforms';
import { GetStorefrontQueryResponse } from '@/types/takeshape';
import { getAnonymousClient } from '@/utils/takeshape/server';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function HomePage() {
  const { data, error } = await getAnonymousClient().query<GetStorefrontQueryResponse>({
    query: GetStorefrontQuery
  });

  const storefront = getStorefront(data);

  if (error) {
    throw new Error(`Failed to get storefront, received message ${error.message}`);
  }

  if (!storefront) {
    return notFound();
  }

  return <Storefront storefront={storefront} />;
}
