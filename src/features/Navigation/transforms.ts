import { currencyList } from 'config';
import { NavigationResponse } from 'features/Navigation/queries';
import { Navigation } from './types';

export function getNavigation(response: NavigationResponse): Navigation {
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
