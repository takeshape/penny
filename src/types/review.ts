export type ReviewReviewer = {
  firstName: string;
  lastName: string;
  verifiedBuyer: string;
  address: string;
  imageUrl: string;
};

export type Review = {
  rating: number;
  title: string;
  body: string;
  createdAt: string;
  timeAgo: string;
  reviewer: ReviewReviewer;
};

export type ReviewList = {
  perPage: number;
  currentPage: number;
  totalPages: number;
  data: Review[];
};

export type ReviewStats = {
  average: number;
  count: number;
};
