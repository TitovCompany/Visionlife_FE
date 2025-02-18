import React from 'react';
import {CatalogItem} from '../types/catalog';
import {FiDownload} from 'react-icons/fi';

interface DownloadItemProps {
  data: CatalogItem;
}

const DownloadItem: React.FC<DownloadItemProps> = ({data}) => {
  return (
    <li className="bg-white border border-gray-200  shadow-md hover:shadow-lg overflow-hidden transition min-h-[220px] sm:min-h-[250px] lg:min-h-20 flex flex-col">
      <div className="p-8 sm:p-10 lg:p-12">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {data.title}.{data.fileType}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-3">
          파일 유형: {data.fileType}
        </p>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <p className="text-gray-600 text-sm sm:text-base">
          파일 크기: {data.fileSize}MB
        </p>
        <a
          href={data.downloadUrl}
          download={data.title}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500  hover:bg-blue-600 transition min-w-[100px] ml-auto">
          <FiDownload className="w-4 h-4 mr-1"/>
          다운로드
        </a>
      </div>
    </li>
  );
};

export default DownloadItem;