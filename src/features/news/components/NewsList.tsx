import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination';
import newsData from '../../../data/newsData.json';

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const NewsList: React.FC = () => {
  const navigate = useNavigate();
  const newsList = newsData?.newsList ?? [];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = newsList.slice(startIndex, startIndex + itemsPerPage);

  if (newsList.length === 0) {
    return (
      <div className="text-center text-xl font-semibold text-gray-600">
        No news available
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-screen-lg space-y-6 px-4 sm:px-6 md:px-8 py-6">
      {currentNews.map((news, index) => (
        <React.Fragment key={news.id}>
          <article
            className="flex flex-col sm:flex-row cursor-pointer items-start gap-4 transition duration-300 hover:opacity-80 shadow overflow-hidden"
            onClick={() => navigate(`/company/news/${news.id}`)}
          >
            <div className="w-full sm:w-48 h-48 sm:h-36 flex-shrink-0">
              <img
                src={news.imageUrl || `/img/news/default-image-${news.id}.jpg`}
                alt={news.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-2 p-4">
              <div className="flex items-center space-x-2">
                <span className="rounded-md bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">
                  {news.type}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  {truncateText(news.title, 50)}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                {truncateText(news.content, 150)}
              </p>
              <p className="text-xs text-gray-500">
                <span>{news.author}</span> |{' '}
                <span>{new Date(news.publishedDate).toLocaleDateString()}</span>
              </p>
            </div>
          </article>
          {index < currentNews.length - 1 && (
            <hr className="border-primary my-4" />
          )}
        </React.Fragment>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default NewsList;
