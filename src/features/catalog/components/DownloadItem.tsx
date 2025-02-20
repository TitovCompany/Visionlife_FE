import React from 'react';
import {CatalogItem} from '../types/catalog';
import {FiDownload} from 'react-icons/fi';

interface DownloadItemProps {
  data: CatalogItem;
}

const DownloadItem: React.FC<DownloadItemProps> = ({data}) => {
  return (
    <li className="flex min-h-[220px] flex-col overflow-hidden border border-gray-200 bg-white shadow-md transition hover:shadow-lg sm:min-h-[250px] lg:min-h-20">
      <div className="p-8 sm:p-10 lg:p-12">
        <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
          {data.title}.{data.fileType}
        </h2>
        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          파일 유형: {data.fileType}
        </p>
      </div>

      <div className="flex items-center justify-between bg-gray-100 px-6 py-4">
        <p className="text-sm text-gray-600 sm:text-base">
          파일 크기: {data.fileSize}MB
        </p>
        <a
          href={data.downloadUrl}
          download={data.title}
          className="ml-auto inline-flex min-w-[100px] items-center bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
          <FiDownload className="mr-1 h-4 w-4" />
          다운로드
        </a>
      </div>
    </li>
  );
};

export default DownloadItem;
