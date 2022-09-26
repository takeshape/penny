import { PropsWithChildren, useCallback, useMemo } from 'react';
import { PaginationLink } from './PaginationLink';
import { usePagination } from './usePagination';

export interface PaginationWithPageListProps {
  pagination: {
    pageCount: number;
    currentPage: number;
    setCurrentPage: (nextPage: number, currentPage: number) => void;
  };
}

export const PaginationWithPageList = ({
  pagination: { pageCount, currentPage, setCurrentPage }
}: PropsWithChildren<PaginationWithPageListProps>) => {
  const paginationRange = usePagination({ currentPage, pageCount, siblingCount: 1 });
  const pageList = useMemo(() => {
    if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
      return null;
    }
    return (
      <div className="hidden space-x-2 sm:flex">
        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === '…') {
            return (
              <span key={`page-more-${idx}`} className="inline-flex items-center text-body-500 px-1.5 h-10">
                &#8230;
              </span>
            );
          }

          return (
            <PaginationLink
              key={`page-${pageNumber}`}
              current={pageNumber === currentPage}
              onClick={() => setCurrentPage(pageNumber as number, currentPage)}
            >
              {pageNumber}
            </PaginationLink>
          );
        })}
      </div>
    );
  }, [currentPage, setCurrentPage, paginationRange]);
  const onPrevious = useCallback(() => setCurrentPage(currentPage - 1, currentPage), [currentPage, setCurrentPage]);
  const onNext = useCallback(() => setCurrentPage(currentPage + 1, currentPage), [currentPage, setCurrentPage]);
  return (
    <nav
      aria-label="Pagination"
      className="max-w-7xl mx-auto space-x-2 px-4 mt-6 flex justify-between text-sm font-medium text-body-700 sm:px-6 lg:px-8"
    >
      <div className="flex-1">
        <PaginationLink onClick={onPrevious} disabled={currentPage === 1}>
          Previous
        </PaginationLink>
      </div>
      {pageList}
      <div className="flex-1 flex justify-end">
        <PaginationLink onClick={onNext} disabled={currentPage === pageCount}>
          Next
        </PaginationLink>
      </div>
    </nav>
  );
};
