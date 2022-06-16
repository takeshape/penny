import { PropsWithChildren, useCallback, useMemo } from 'react';
import { usePagination } from './usePagination';

interface PaginationLinkProps {
  onClick?: () => void;
  current?: boolean;
  disabled?: boolean;
  href?: string;
}

const PaginationLink = ({
  onClick,
  current,
  disabled,
  href,
  children
}: React.PropsWithChildren<PaginationLinkProps>) => {
  if (disabled) {
    return (
      <span className="inline-flex items-center px-4 h-10 border border-gray-200 rounded-md bg-gray-200 text-gray-400 cursor-not-allowed">
        {children}
      </span>
    );
  }

  if (current) {
    return (
      <span className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export interface PaginationProps {
  pagination: {
    pageCount: number;
    currentPage: number;
    setCurrentPage: (nextPage: number, currentPage: number) => void;
  };
}

export const PaginationWithPageList = ({
  pagination: { pageCount, currentPage, setCurrentPage }
}: PropsWithChildren<PaginationProps>) => {
  const paginationRange = usePagination({ currentPage, pageCount, siblingCount: 1 });
  const pageList = useMemo(() => {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
    return (
      <div className="hidden space-x-2 sm:flex">
        {paginationRange.map((pageNumber) => {
          if (pageNumber === '…') {
            return <span className="inline-flex items-center text-gray-500 px-1.5 h-10">&#8230;</span>;
          }
          return (
            <PaginationLink
              key={`page-${pageNumber}`}
              current={pageNumber === currentPage}
              onClick={() => setCurrentPage(pageNumber, currentPage)}
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
      className="max-w-7xl mx-auto space-x-2 px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
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
