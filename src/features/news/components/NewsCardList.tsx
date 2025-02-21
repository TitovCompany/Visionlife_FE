import React from 'react';
import clsx from 'clsx';
import news from '../../../data/news.json';
import {Link} from 'react-router-dom';
import Pagination from '../../../components/Pagination.tsx';
import usePagenation from '../../../hooks/usePagenation.ts';
import {NewsType} from '../../../types';

interface NewsCardListProps {
  layout?: 'horizontal' | 'vertical';
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const NewsCardList: React.FC<NewsCardListProps> = (props) => {
  const {layout = 'horizontal'} = props;
  const itemsPerPage = 5;
  const {currentItems, currentPage, totalPages, setCurrentPage} =
    usePagenation<NewsType>(news.items, itemsPerPage);

  const displayedItems =
    layout === 'horizontal' ? news.items.slice(0, 3) : currentItems;

  const listClasses = clsx(
    layout === 'horizontal' &&
      'grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8',
    layout === 'vertical' && 'pb-14 max-w-4xl mx-auto space-y-6'
  );

  const itemClasses = clsx(layout === 'vertical' && 'my-5 md:my-14');

  const linkClasses = clsx(
    'flex flex-col transition gap-4',
    'duration-300 hover:opacity-80 overflow-hidden',
    layout === 'horizontal' && 'cursor-pointer items-start',
    layout === 'vertical' && 'md:flex-row'
  );

  const imgWrapClasses = clsx(
    layout === 'horizontal' && 'w-full h-full object-cover',
    layout === 'vertical' && 'w-full md:w-48 h-48 sm:h-36 flex-shrink-0'
  );

  const imgClasses = clsx(
    'rounded-md',
    layout === 'horizontal' &&
      'w-full object-cover h-48 sm:h-56 md:h-64 lg:h-72',
    layout === 'vertical' && 'h-full w-full object-cover'
  );

  return (
    <ul className={listClasses}>
      {displayedItems.map((item) => (
        <li key={item.id} className={itemClasses}>
          <Link to={`/company/news/${item.id}`} className={linkClasses}>
            <div className={clsx(imgWrapClasses, 'p-2', 'mt-4')}>
              <img
                src={item.imageUrl || `/img/news/default-image-${item.id}.jpg`}
                alt={item.title}
                className={imgClasses} />
            </div>

            {layout === 'horizontal' && (
              <div className="flex flex-grow flex-col p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            )}

            {layout === 'vertical' && (
              <div className="flex flex-col space-y-2 p-4">
                <h3 className="text-base font-bold text-gray-800 sm:text-lg">
                  {truncateText(item.title, 50)}
                </h3>
                <p className="hidden lg:block text-sm leading-relaxed text-gray-600">
                  {truncateText(item.content, 150)}
                </p>
                <p className="text-xs text-gray-500">
                  <span>{item.author}</span> |{' '}
                  <span>
                    {new Date(item.publishedDate).toLocaleDateString()}
                  </span>
                </p>
              </div>
            )}
          </Link>
        </li>
      ))}

      {layout === 'vertical' && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </ul>
  );
};

export default NewsCardList;
