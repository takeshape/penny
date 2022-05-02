import { currencyList } from 'config';

export type NavigationLink = {
  name: string;
  href: string;
};

export type NavigationCategory = {
  name: string;
  featured: NavigationLink[];
  collection: NavigationLink[];
  categories: NavigationLink[];
  brands: NavigationLink[];
};

export type NavigationLinks = {
  categories: NavigationCategory[];
  pages: NavigationLink[];
};

export type NavigationCurrency = typeof currencyList[number];

export interface NavigationState {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  links: NavigationLinks;
  setLinks: () => void;
}
