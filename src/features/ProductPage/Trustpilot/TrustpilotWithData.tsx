'use client';

import { reviewsPerPage } from '@/config';
import { TrustpilotProductPageReviewPageQuery } from '@/features/ProductPage/queries.takeshape';
import { useLazyQueryWithTransform } from '@/lib/query';
import { ReviewList } from '@/types/review';
import {
  TrustpilotProductPageReviewPageQueryResponse,
  TrustpilotProductPageReviewPageQueryVariables
} from '@/types/takeshape';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Trustpilot } from './Trustpilot';

export const readOnlyReviews = true;
export const useReviewsFromProductQuery = false;

export type TrustpilotProps = {
  sku: string;
  reviewList: ReviewList;
};

export const TrustpilotWithData = ({ sku, reviewList }: TrustpilotProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [loadReviews, { transformedData: pageData, error }] = useLazyQueryWithTransform<
    TrustpilotProductPageReviewPageQueryResponse,
    TrustpilotProductPageReviewPageQueryVariables,
    ReviewList
  >(TrustpilotProductPageReviewPageQuery);

  useEffect(() => {
    if (currentPage !== 1) {
      void loadReviews({
        variables: {
          sku,
          page: currentPage,
          perPage: reviewsPerPage
        }
      });
    }
  }, [currentPage, loadReviews, sku]);

  // Our product query has the first page of reviews, so use that if we're on page 1.
  // Otherwise we query for the requested page.
  const currentPageData = useMemo(() => {
    if (currentPage === 1) {
      return reviewList;
    }

    return pageData ?? null;
  }, [currentPage, pageData, reviewList]);

  const handleNext = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage, setCurrentPage]);

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  return (
    <Trustpilot
      error={Boolean(error)}
      currentPageData={currentPageData}
      currentPage={currentPage}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  );
};
