import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { ReviewList } from 'types/review';
import { TrustpilotLoading } from './TrustpilotLoading';
import { TrustpilotStars } from './TrustpilotStars';

export const readOnlyReviews = true;
export const useReviewsFromProductQuery = false;

export interface TrustpilotProps {
  error: boolean;
  currentPageData: ReviewList | null;
  currentPage: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

export const Trustpilot = ({ error, currentPageData, currentPage, handleNext, handlePrevious }: TrustpilotProps) => {
  const { stats } = currentPageData ?? {};

  if (error) {
    return <Alert status="warn" primaryText="Could not load Trustpilot reviews." />;
  }

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-background">
      <div className="grid grid-cols-2 gap-1 mb-6">
        <div className="flex items-center">
          {stats?.average && (
            <>
              <TrustpilotStars stars={stats.average} width={200} />
              <span className="text-2xl font-bold pl-4 pr-2 inline-block">{stats.average}</span> / 5
              <span className="text-body-500 pl-2 pr-2"> • </span>
            </>
          )}
          <span className="font-bold pr-1">{stats?.count}</span> reviews
        </div>
        <div className="text-right">
          <NextLink href="https://trustpilot.com">
            <NextImage
              className="inline cursor-pointer"
              src="/images/trustpilot/Trustpilot_brandmark_gr-blk-RGB.png"
              alt=""
              height={100}
              width={150}
            />
          </NextLink>
        </div>
      </div>
      {stats?.average && (
        <>
          <hr />
          {!currentPageData && <TrustpilotLoading />}
          {currentPageData && (
            <div>
              {currentPageData.items.map((item) => (
                <div key={item.id} className="mt-3 mb-4">
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    <div>{item.reviewer.name}</div>
                    <div className="text-right">{item.createdAt}</div>
                  </div>
                  <TrustpilotStars stars={item.rating} width={125} />
                  <div className="mt-2">{item.body}</div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          )}
          <span className="mr-2">Page {currentPage}</span>
          <Button
            className="h-8 px-4 text-sm mr-2"
            disabled={!currentPageData || currentPage === 1}
            onClick={handlePrevious}
          >
            Previous
          </Button>
          <Button
            className="h-8 px-4 text-sm"
            disabled={!currentPageData || !currentPageData.hasNextPage}
            onClick={handleNext}
          >
            Next
          </Button>
        </>
      )}
    </section>
  );
};
