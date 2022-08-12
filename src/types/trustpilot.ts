export type TrustpilotSummary = {
  average?: number;
  total: number;
};

export type TrustpilotConsumer = {
  displayName: string;
};

export type TrustpilotReview = {
  id: string;
  createdAt: string;
  stars: number;
  content: string;
  consumer: TrustpilotConsumer;
};

export type TrustpilotReviewList = {
  items: TrustpilotReview[];
  nextPage: boolean;
};
