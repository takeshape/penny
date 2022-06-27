import { currencyList } from 'config';
import { NavigationQueryResponse } from 'types/takeshape';
import { Navigation } from './types';

export function getNavigation(response: NavigationQueryResponse): Navigation {
  const navigation = response?.navigation;

  if (!navigation) {
    return null;
  }

  return {
    message: navigation.messageHtml.replace(/<\/?p>/g, ''),
    links: navigation.links,
    currencies: [...currencyList]
  };
}
