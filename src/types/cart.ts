export type CartItem = {
  id: string;
  name: string;
  description: string;
  href: string;
  currency: string;
  unitAmount: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
  interval: 'none' | 'day' | 'week' | 'month' | 'year';
  intervalCount: number;
  // Freeform data, for display or later API calls
  data: Record<string, unknown>;
};
