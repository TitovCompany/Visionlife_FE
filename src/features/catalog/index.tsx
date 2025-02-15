import { useState } from "react";
import PageLayout from "../../layout/PageLayout.tsx";
import catalogData from "../../data/catalogData.json";
import { CatalogItem } from "./types/CatalogDetail.ts";
import Pagination from "../../components/Pagination.tsx";

const Catalog = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(catalogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData: CatalogItem[] = catalogData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <PageLayout title="카탈로그">
      <div className="mx-auto max-w-5xl md:max-w-6xl lg:max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 ">
        <h1 className="text-4xl font-bold text-center text-gray-900 mt-12 sm:mt-16 lg:mt-20 mb-8">
          카탈로그
        </h1>
        <hr className="border-primary mb-6 py-1" />

        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((item: CatalogItem) => (
            <li key={item.id} className="bg-white border border-gray-200  shadow-md hover:shadow-lg overflow-hidden transition min-h-[220px] sm:min-h-[250px] lg:min-h-[280px] flex flex-col">
              <div className="p-8 sm:p-10 lg:p-12 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {item.title}.{item.fileType}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base mt-3">
                    파일 유형: {item.fileType}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
                <p className="text-gray-600 text-sm sm:text-base">
                  파일 크기: {item.fileSize}MB
                </p>
                <a
                  href={item.downloadUrl}
                  download={item.title}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500  hover:bg-blue-600 transition min-w-[100px] ml-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="white"
                    className="mr-1"
                  >
                    <path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z" />
                    <path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z" />
                  </svg>
                  다운로드
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Catalog;
