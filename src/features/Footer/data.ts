import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { FooterQuery } from './queries';
import { getFooter } from './transforms';

export async function getFooterData() {
  const { data } = await getAnonymousTakeshapeClient().query({
    query: FooterQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 300 }
      }
    }
  });

  return getFooter(data);
}
