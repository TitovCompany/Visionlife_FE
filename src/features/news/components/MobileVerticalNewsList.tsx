// MobileVerticalNewsList.tsx
import React from 'react';
import news from '../../../data/news.json';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination.tsx';
import usePagenation from '../../../hooks/usePagenation.ts';
import { NewsType } from '../../../types';

const MobileVerticalNewsList: React.FC = () => {
  const itemsPerPage = 10;
  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagenation<NewsType>(news.items, itemsPerPage);

  return (
    <section className="p-4 bg-white">
      <ul className="divide-y divide-gray-200">
        {currentItems.map(item => (
          <li key={item.id} className="py-3">
            <Link to={`/company/news/${item.id}`} className="flex items-start gap-3">
              <div className="w-24 h-16 flex-shrink-0">
                <img
                  src={item.imageUrl || `/img/news/default-image-${item.id}.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-xs text-gray-500">{item.author}</span>
                <h3 className="mt-1 text-sm font-bold text-gray-800 leading-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default MobileVerticalNewsList;
