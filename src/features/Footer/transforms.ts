import { FooterResponse } from 'types/takeshape';

export function getFooter(response: FooterResponse) {
  const footer = response?.footer;

  if (!footer) {
    return null;
  }

  return footer;
}
