import { NavigationQuery } from '@/features/Navigation/queries';
import { getNavigation } from '@/features/Navigation/transforms';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';

export async function getNavigationData() {
  const { data } = await getAnonymousTakeshapeClient().query({
    query: NavigationQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 300 }
      }
    }
  });

  return getNavigation(data);
}
