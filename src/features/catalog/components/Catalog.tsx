import React, { useState } from "react";
import Pagination from "../../../components/Pagination";
import catalogData from "../../../data/catalogData.json";

const Catalog: React.FC = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(catalogData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = catalogData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="max-w-3xl md:max-w-4xl mx-auto py-12 px-4">
            {/* 제목 */}
            <h1 className="text-4xl font-bold text-center mb-6">카탈로그</h1>
            <hr className="border-gray-300 mb-6" />

            {/* 리스트 */}
            <ul className="space-y-4">
                {currentData.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-between p-4 border rounded-lg border-gray-300 bg-white shadow-sm hover:shadow-md transition"
                    >
                        {/* 파일 제목 */}
                        <span className="text-gray-800 font-medium flex-1">{item.title}</span>

                        {/* 다운로드 버튼 */}
                        <a
                            href={item.downloadUrl}
                            className="min-w-[100px] px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition text-center"
                            download
                        >
                            다운로드
                        </a>
                    </li>
                ))}
            </ul>

            {/* 페이지네이션 */}
            <div className="mt-8 flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Catalog;
