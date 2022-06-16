import { useQuery } from '@apollo/client';
import { GetNavigationDataQuery, NavigationDataResults } from '../Navigation.queries';

export const TopCartIcon = () => {
  const { data } = useQuery<NavigationDataResults>(GetNavigationDataQuery);
  const { message } = data?.navigation ?? {};

  return <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">{message}</p>;
};

export default TopCartIcon;
