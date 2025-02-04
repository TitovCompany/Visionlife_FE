import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center mt-6 space-x-8">
            <button
                className={`px-8 text-lg ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:underline"
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
                        className={`px-6 text-lg transition-colors ${
                            currentPage === pageNumber
                                ? "font-bold !text-green-500" 
                                : "text-gray-700 hover:text-green-500"
                        }`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            <button
                className={`px-8 text-lg ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:underline"
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
