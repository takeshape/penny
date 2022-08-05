import { useLazyQuery } from '@apollo/client';
import { trustpilotReviewsPerPage } from 'config/ecommerce';
import { trustpilotBusinessUnit } from 'config/trustpilot';
import { TrustpilotProductPageReviewPageQuery } from 'features/ProductPage/queries.takeshape';
import { getTrustpilotProductReviewsPage } from 'features/ProductPage/transforms';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  TrustpilotProductPageReviewPageQueryResponse,
  TrustpilotProductPageReviewPageQueryVariables
} from 'types/takeshape';
import { TrustpilotReviewList, TrustpilotSummary } from 'types/trustpilot';
import { Trustpilot } from './Trustpilot';

export const readOnlyReviews = true;
export const useReviewsFromProductQuery = false;

export interface TrustpilotProps {
  sku: string;
  trustpilotReviewList: TrustpilotReviewList;
  trustpilotSummary: TrustpilotSummary;
}

export const TrustpilotWithData = ({ sku, trustpilotSummary, trustpilotReviewList }: TrustpilotProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [loadReviews, { data: pageData, error }] = useLazyQuery<
    TrustpilotProductPageReviewPageQueryResponse,
    TrustpilotProductPageReviewPageQueryVariables
  >(TrustpilotProductPageReviewPageQuery, {
    variables: {
      businessUnit: trustpilotBusinessUnit,
      sku,
      page: currentPage,
      perPage: trustpilotReviewsPerPage
    }
  });

  useEffect(() => {
    if (currentPage !== 1) {
      loadReviews();
    }
  }, [currentPage, loadReviews]);

  // Our product query has the first page of reviews, so use that if we're on page 1.
  // Otherwise we query for the requested page.
  const currentPageData = useMemo(() => {
    if (currentPage === 1) {
      return trustpilotReviewList;
    }

    return pageData ? getTrustpilotProductReviewsPage(pageData) : null;
  }, [currentPage, pageData, trustpilotReviewList]);

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
      trustpilotSummary={trustpilotSummary}
      error={Boolean(error)}
      currentPageData={currentPageData}
      currentPage={currentPage}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  );
};
