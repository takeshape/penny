import { currencyList } from '@/config';
import { NavigationItem } from '@/types/navigation';

// TakeShape doesn't support scalar arrays, so sticking with this for now
export type NavigationCurrency = (typeof currencyList)[number];

export type NavigationMessage = string;

export type NavigationCategory = {
  name: string;
  featured: NavigationItem[];
  collection: NavigationItem[];
  categories: NavigationItem[];
  brands: NavigationItem[];
};

export type NavigationSubsection = {
  name: string;
  links: NavigationItem[];
};

export type NavigationSection = {
  name: string;
  link: NavigationItem | null;
  subsections: NavigationSubsection[] | null;
};

export type Navigation = {
  message: NavigationMessage;
  sections: NavigationSection[];
  currencies: typeof currencyList;
};
