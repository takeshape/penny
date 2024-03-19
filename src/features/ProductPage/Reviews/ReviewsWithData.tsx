import { CreateReview } from '@/features/ProductPage/Reviews/CreateReview';
import { ProductPageReviewPageQuery } from '@/features/ProductPage/queries.takeshape';
import { getProductReviewsPage } from '@/features/ProductPage/transforms';
import { getReviewList } from '@/transforms/reviewsIo';
import { Review } from '@/types/review';
import { ProductPageReviewPageQueryResponse, ProductPageReviewPageQueryVariables } from '@/types/takeshape';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProductPageReviewsReviewList } from '../types';
import { Reviews } from './Reviews';

export type ReviewsWithDataProps = {
  productName: string;
  sku: string;
  reviewList: ProductPageReviewsReviewList;
  reviewsPerPage: number;
};

export const ReviewsWithData = ({ productName, sku, reviewList, reviewsPerPage }: ReviewsWithDataProps) => {
  const { stats, rollup, items, currentPage: initialPage, totalPages } = reviewList ?? getReviewList(null);

  const { isReady, query } = useRouter();
  const [currentPage, setCurrentPage] = useState(initialPage ?? 0);
  const [isCreateReviewOpen, setIsCreateReviewOpen] = useState(false);

  const [loadReviews, { data: pageData, loading, error }] = useLazyQuery<
    ProductPageReviewPageQueryResponse,
    ProductPageReviewPageQueryVariables
  >(ProductPageReviewPageQuery, {
    variables: {
      sku,
      page: currentPage,
      perPage: reviewsPerPage
    }
  });

  useEffect(() => {
    if (currentPage !== 1) {
      void loadReviews();
    }
  }, [currentPage, loadReviews]);

  const loadingItems = useMemo(() => Array(reviewsPerPage).fill(undefined) as unknown as Review[], [reviewsPerPage]);

  // Our product query has the first page of reviews, so use that if we're on page 1.
  // Otherwise we query for the requested page.
  const currentPageItems = useMemo(() => {
    if (loading) {
      return loadingItems;
    }

    if (currentPage === 1) {
      return items;
    }

    return (pageData && getProductReviewsPage(pageData)?.items) ?? loadingItems;
  }, [currentPage, items, loading, loadingItems, pageData]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, setCurrentPage, totalPages]);

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    if (isReady && query.writeReview) {
      setIsCreateReviewOpen(true);
    }
  }, [isReady, query.writeReview]);

  return (
    <>
      <Reviews
        stats={stats}
        rollup={rollup}
        items={currentPageItems}
        onPreviousPage={handlePrevious}
        onNextPage={handleNext}
        onCreateReview={() => setIsCreateReviewOpen(true)}
        error={error}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <CreateReview productName={productName} sku={sku} isOpen={isCreateReviewOpen} setIsOpen={setIsCreateReviewOpen} />
    </>
  );
};
