import { PropsWithChildren, useCallback } from 'react';
import { PaginationLink } from './PaginationLink';

export interface PaginationProps {
  pagination: {
    pageCount: number;
    currentPage: number;
    setCurrentPage: (nextPage: number, currentPage: number) => void;
  };
}

export const Pagination = ({
  pagination: { pageCount, currentPage, setCurrentPage }
}: PropsWithChildren<PaginationProps>) => {
  const onPrevious = useCallback(() => setCurrentPage(currentPage - 1, currentPage), [currentPage, setCurrentPage]);
  const onNext = useCallback(() => setCurrentPage(currentPage + 1, currentPage), [currentPage, setCurrentPage]);
  return (
    <nav
      aria-label="Pagination"
      className="max-w-7xl mx-auto space-x-2 px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
    >
      <div className="flex-1">
        <PaginationLink onClick={onPrevious} disabled={currentPage === 1}>
          Previous
        </PaginationLink>
      </div>
      <div className="flex-1 flex justify-end">
        <PaginationLink onClick={onNext} disabled={currentPage === pageCount}>
          Next
        </PaginationLink>
      </div>
    </nav>
  );
};
