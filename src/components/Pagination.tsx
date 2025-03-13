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
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className='mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-4'>
      <button
        className={`px-4 py-1 text-base sm:px-8 sm:text-lg ${
          currentPage === 1
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:underline'
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        &lt;
      </button>

      {/* 페이지 숫자 버튼 */}
      {Array.from({length: totalPages}, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`cursor-pointer px-3 py-1 text-base sm:px-6 sm:text-lg ${
              currentPage === pageNumber
                ? '!text-primary font-bold'
                : 'hover:text-primary text-gray-700'
            }`}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        );
      })}

      <button
        className={`px-4 py-1 text-base sm:px-8 sm:text-lg ${
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:underline'
        }`}
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
