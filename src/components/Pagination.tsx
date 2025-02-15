import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                 currentPage,
                                                 totalPages,
                                                 onPageChange,
                                               }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-2">
      <button
        className={`px-3 sm:px-6 md:px-8 py-1 sm:py-2 text-sm sm:text-base md:text-lg ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:underline'
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* 페이지 숫자 버튼 */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-sm sm:text-base md:text-lg transition-colors rounded ${
              currentPage === pageNumber
                ? 'font-bold !text-primary'
                : 'text-gray-700 hover:text-primary'
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`px-3 sm:px-6 md:px-8 py-1 sm:py-2 text-sm sm:text-base md:text-lg ${
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-50'
            : 'hover:underline'
        }`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
