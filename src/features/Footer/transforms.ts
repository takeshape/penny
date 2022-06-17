import { FooterResponse } from './Footer.queries';

export function getFooter(response: FooterResponse) {
  const footer = response?.footer;

  if (!footer) {
    return null;
  }

  return footer;
}
