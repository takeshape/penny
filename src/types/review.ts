export type ReviewReviewer = {
  name: string;
  imageUrl: string | null;
};

export type Review = {
  id: string;
  rating: number;
  title: string | null;
  body: string;
  createdAt: string;
  reviewer: ReviewReviewer;
};

export type ReviewStats = {
  average: number | null;
  count: number;
};

export type ReviewRollup = {
  rating: number;
  count: number;
};

export type ReviewList = {
  stats: ReviewStats;
  rollup?: ReviewRollup[];
  perPage: number;
  currentPage?: number;
  totalPages: number;
  items: Review[];
  hasNextPage: boolean;
};

export type ReviewHighlights = {
  stats: ReviewStats;
  featured: Review[];
};
