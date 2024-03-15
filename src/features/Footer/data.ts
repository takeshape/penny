import { getAnonymousClient } from '@/utils/takeshape/server';
import { FooterQuery } from './queries';
import { getFooter } from './transforms';

const client = getAnonymousClient();

export async function getFooterData() {
  const { data } = await client.query({
    query: FooterQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 300 }
      }
    }
  });

  return getFooter(data);
}
