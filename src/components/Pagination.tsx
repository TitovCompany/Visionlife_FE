import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pagesPerBlock?: number; // 페이지네이션 크기를 동적으로 설정할 수 있는 prop
}

const Pagination: React.FC<PaginationProps> = ({
                                                 currentPage,
                                                 totalPages,
                                                 onPageChange,
                                                 pagesPerBlock = 5, // 기본 크기는 5
                                               }) => {

  const currentBlock = Math.ceil(currentPage / pagesPerBlock);
  const startPage = (currentBlock - 1) * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

  return (
    <div className="mt-16 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
      <button
        className={`px-4 sm:px-8 py-1 text-base sm:text-lg ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index;
        return (
          <button
            key={pageNumber}
            className={`px-3 sm:px-6 py-1 text-base sm:text-lg cursor-pointer ${
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
        className={`px-4 sm:px-8 py-1 text-base sm:text-lg ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
