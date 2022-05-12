interface PaginationLinkProps {
  current?: boolean;
  href?: string;
}

const PaginationLink: React.FC<PaginationLinkProps> = ({current, href, children}) => {
  if (current) {
    return (
      <a
        href={href ?? '#'}
        className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={href}
      className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
    >
      {children}
    </a>
  )
}

export interface PaginationProps {
  pagination: {
    pageCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const {pagination: {pageCount, currentPage, setCurrentPage}} = props;
  return (
    <nav
        aria-label="Pagination"
        className="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
      >
        <div className="min-w-0 flex-1">
          <PaginationLink>Previous</PaginationLink>
        </div>
        <div className="hidden space-x-2 sm:flex">
          <PaginationLink>1</PaginationLink>
          <PaginationLink>2</PaginationLink>
          <PaginationLink current>3</PaginationLink>
          <span className="inline-flex items-center text-gray-500 px-1.5 h-10">...</span>
          <PaginationLink>8</PaginationLink>
          <PaginationLink>9</PaginationLink>
          <PaginationLink>10</PaginationLink>
        </div>
        <div className="min-w-0 flex-1 flex justify-end">
          <PaginationLink>Next</PaginationLink>
        </div>
      </nav>
  )
}

export default Pagination;
