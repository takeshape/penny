import { NavigationQuery } from '@/features/Navigation/queries';
import { getNavigation } from '@/features/Navigation/transforms';
import { getAnonymousClient } from '@/utils/takeshape/server';

const client = getAnonymousClient();

export async function getNavigationData() {
  const { data } = await client.query({
    query: NavigationQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 300 }
      }
    }
  });

  return getNavigation(data);
}
