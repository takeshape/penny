import Button from '@/components/Button/Button';
import { Stars } from '@/components/Stars/Stars';
import { ReviewsListItem } from '@/features/ProductPage/Reviews/ReviewsListItem';
import { ReviewsListItemLoading } from '@/features/ProductPage/Reviews/ReviewsListItemLoading';
import { ApolloError } from '@apollo/client';
import { signIn, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { ProductPageReviewsReview, ProductPageReviewsRollup, ProductPageReviewsStats } from '../types';
import { ReviewsRollup } from './ReviewsRollup';

export type ReviewsProps = {
  stats: ProductPageReviewsStats;
  items: ProductPageReviewsReview[];
  rollup?: ProductPageReviewsRollup[];
  currentPage: number;
  totalPages: number;
  onPreviousPage: MouseEventHandler;
  onNextPage: MouseEventHandler;
  onCreateReview: MouseEventHandler;
  error?: ApolloError;
};

export const Reviews = ({
  stats,
  items,
  rollup,
  onPreviousPage,
  onNextPage,
  onCreateReview,
  currentPage,
  totalPages,
  error
}: ReviewsProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-background">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-body-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <Stars rating={stats.average ?? 0} />
              <p className="sr-only">{stats.average ?? 0} out of 5 stars</p>
            </div>
            {stats.average !== null && <p className="ml-2 text-sm text-body-900">Based on {stats.count} reviews</p>}
          </div>

          {rollup && (
            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <ReviewsRollup rollup={rollup} stats={stats} />
            </div>
          )}

          <div className="mt-10">
            <h3 className="text-lg font-medium text-body-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-body-600">
              If you&rsquo;ve used this product, share your thoughts with other customers
            </p>

            {session ? (
              <Button
                onClick={onCreateReview}
                className="mt-6 inline-flex w-full bg-background border border-form-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-form-900 hover:bg-form-50 sm:w-auto lg:w-full cursor-pointer"
              >
                Write a review
              </Button>
            ) : (
              <span
                onClick={() => void signIn(undefined, { callbackUrl: `${pathname}?writeReview=true` })}
                className="mt-6 inline-flex w-full bg-background border border-form-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-form-900 hover:bg-form-50 sm:w-auto lg:w-full cursor-pointer"
              >
                Sign in to write a review
              </span>
            )}
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {error && 'There was an error loading more reviews.'}
              {!error &&
                items.map((item, idx) => (
                  <div key={item?.id ?? idx} className="py-12" data-testid="review-item">
                    {item ? <ReviewsListItem item={item} /> : <ReviewsListItemLoading />}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {totalPages > 0 && (
          <div className="mt-12 flex items-center lg:col-start-6 lg:col-span-7 text-body-900">
            <div className="mr-2">
              Page {currentPage} of {totalPages}
            </div>
            <Button className="h-8 px-4 text-sm mr-2" disabled={currentPage === 1} onClick={onPreviousPage}>
              Previous
            </Button>
            <Button className="h-8 px-4 text-sm" disabled={currentPage === totalPages} onClick={onNextPage}>
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
