import { useQuery } from '@apollo/client';
import { GetNavigationDataQuery, NavigationDataResults } from '../../queries';

export const TopMessage = () => {
  const { data } = useQuery<NavigationDataResults>(GetNavigationDataQuery);
  const { message } = data?.navigation ?? {};

  return <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">{message}</p>;
};
