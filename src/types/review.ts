export type ReviewReviewer = {
  firstName: string;
  lastName: string;
  verifiedBuyer: string;
  address: string;
  imageUrl: string;
};

export type Review = {
  id: number;
  rating: number;
  title: string;
  body: string;
  createdAt: string;
  timeAgo: string;
  reviewer: ReviewReviewer;
};

export type ReviewStats = {
  average: number;
  count: number;
};

export type ReviewList = {
  stats: ReviewStats;
  perPage: number;
  currentPage: number;
  totalPages: number;
  data: Review[];
};

export type ReviewHighlights = {
  stats: ReviewStats;
  featured: Review[];
};
