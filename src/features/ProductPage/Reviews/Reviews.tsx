import { useLazyQuery } from '@apollo/client';
import Button from 'components/Button/Button';
import { Stars } from 'components/Stars/Stars';
import { ProductPageReviewPageQuery } from 'features/ProductPage/queries';
import { CreateReview } from 'features/ProductPage/Reviews/CreateReview';
import { ReviewsListItem } from 'features/ProductPage/Reviews/ReviewsListItem';
import { ReviewsListItemLoading } from 'features/ProductPage/Reviews/ReviewsListItemLoading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getReview } from 'transforms/reviewsIo';
import { Review } from 'types/review';
import { ProductPageReviewPageQueryResponse, ProductPageReviewPageQueryVariables } from 'types/takeshape';
import { ProductPageReviewsReviewList } from '../types';
import { ReviewsRollup } from './ReviewsRollup';

export interface ReviewsProps {
  productName: string;
  sku: string;
  reviewList: ProductPageReviewsReviewList;
  showRollup?: boolean;
  reviewsPerPage: number;
}

export const Reviews = ({ productName, sku, reviewList, showRollup, reviewsPerPage }: ReviewsProps) => {
  const { stats, rollup, data, currentPage: initialPage, totalPages } = reviewList;

  const router = useRouter();
  const { status } = useSession();

  const [currentPage, setCurrentPage] = useState(initialPage);

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
      loadReviews();
    }
  }, [currentPage, loadReviews]);

  const loadingReviews = useMemo(() => Array(reviewsPerPage).fill(undefined) as unknown as Review[], [reviewsPerPage]);

  // Our product query has the first page of reviews, so use that if we're on page 1.
  // Otherwise we query for the requested page.
  const currentPageData = useMemo(() => {
    if (loading) {
      return loadingReviews;
    }

    if (currentPage === 1) {
      return data;
    }

    if (currentPage > 1) {
      return pageData && pageData.reviewData.reviews.data.map(getReview);
    }
  }, [currentPage, data, loading, loadingReviews, pageData]);

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

  const [isCreateReviewOpen, setIsCreateReviewOpen] = useState(false);

  useEffect(() => {
    if (router.isReady && router.query.writeReview) {
      setIsCreateReviewOpen(true);
    }
  }, [router.isReady, router.query.writeReview]);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <Stars rating={stats.average ?? 0} />
              <p className="sr-only">{stats.average ?? 0} out of 5 stars</p>
            </div>
            {stats.average !== null && <p className="ml-2 text-sm text-gray-900">Based on {stats.count} reviews</p>}
          </div>

          {showRollup && rollup && (
            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <ReviewsRollup rollup={rollup} stats={stats} />
            </div>
          )}

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you&rsquo;ve used this product, share your thoughts with other customers
            </p>

            {status === 'authenticated' ? (
              <Button
                className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                onClick={() => setIsCreateReviewOpen(true)}
              >
                Write a review
              </Button>
            ) : (
              <a
                href={`/api/auth/signin?callbackUrl=${encodeURIComponent(`${router.asPath}?writeReview=true`)}`}
                className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Sign in to write a review
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {error && 'There was an error loading more reviews.'}
              {!error &&
                currentPageData &&
                currentPageData.map((review, idx) => (
                  <div key={review?.id ?? idx} className="py-12">
                    {review ? <ReviewsListItem review={review} /> : <ReviewsListItemLoading />}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {totalPages && (
          <div className="mt-12 flex items-center lg:col-start-6 lg:col-span-7">
            <div className="mr-2">
              Page {currentPage} of {totalPages}
            </div>
            <Button className="h-8 px-4 text-sm mr-2" disabled={currentPage === 1} onClick={handlePrevious}>
              Previous
            </Button>
            <Button className="h-8 px-4 text-sm" disabled={currentPage === totalPages} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
      </div>

      <CreateReview productName={productName} sku={sku} isOpen={isCreateReviewOpen} setIsOpen={setIsCreateReviewOpen} />
    </section>
  );
};
