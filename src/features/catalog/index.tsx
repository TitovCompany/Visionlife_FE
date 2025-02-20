// import { useState } from "react";
import PageLayout from '../../layout/PageLayout.tsx';
import catalogData from '../../data/catalogData.json';
import {CatalogItem} from './types/catalog';
// import Pagination from "../../components/Pagination.tsx";
import DownloadItem from './components/DownloadItem.tsx';

const Catalog = () => {
  /*const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(catalogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData: CatalogItem[] = catalogData.slice(
    startIndex,
    startIndex + itemsPerPage
  );*/

  return (
    <PageLayout title="카탈로그" isFullHeight={false} isMinHeight={false}>
      <div className="mx-auto min-h-full w-full max-w-sm flex-grow md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
        <div className="py-12 md:py-16 lg:py-20">
          <h1 className="border-b-primary border-b pb-8 text-left text-4xl font-bold text-gray-900">
            자료실
          </h1>

          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col lg:gap-10">
            {catalogData.map((item: CatalogItem) => (
              <DownloadItem key={item.id} data={item} />
            ))}
          </ul>

          {/*<div className="mt-8 mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>*/}
        </div>
      </div>
    </PageLayout>
  );
};

export default Catalog;
