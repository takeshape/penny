import type { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';

export interface Product {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  sizes: Array<{ name: string; description: string }>;
  breadcrumbs: Breadcrumb[];
}

export interface Review {
  id: number;
  rating: number;
  content: string;
  avatarSrc: string;
  author: string;
}

interface ReviewCount {
  rating: number;
  count: number;
}

export interface Reviews {
  average: number;
  totalCount: number;
  counts: ReviewCount[];
  featured: Review[];
}
