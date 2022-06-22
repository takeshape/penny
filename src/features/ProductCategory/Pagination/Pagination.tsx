import { PropsWithChildren, useCallback } from 'react';
import { PaginationLink } from './PaginationLink';

export interface PaginationProps {
  pagination: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    setCurrentPage: (nextPage: number) => void;
  };
}

export const Pagination = ({
  pagination: { hasNextPage, hasPreviousPage, setCurrentPage }
}: PropsWithChildren<PaginationProps>) => {
  const onPrevious = useCallback(() => setCurrentPage(-1), [setCurrentPage]);
  const onNext = useCallback(() => setCurrentPage(1), [setCurrentPage]);

  return (
    <nav
      aria-label="Pagination"
      className="max-w-7xl mx-auto space-x-2 px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
    >
      <div className="flex-1">
        <PaginationLink onClick={onPrevious} disabled={!hasPreviousPage}>
          Previous
        </PaginationLink>
      </div>
      <div className="flex-1 flex justify-end">
        <PaginationLink onClick={onNext} disabled={!hasNextPage}>
          Next
        </PaginationLink>
      </div>
    </nav>
  );
};
