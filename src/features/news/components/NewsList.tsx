import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
    <section className="max-w-screen-lg mx-auto px-4 py-6 space-y-6">
      {currentNews.map((news, index) => (
        <React.Fragment key={news.id}>
          <article
            className="flex items-start gap-6 cursor-pointer hover:opacity-80 transition duration-300"
            onClick={() => navigate(`/company/news/${news.id}`)}>
            <div className="w-48 h-36 flex-shrink-0">
              <img
                src={news.imageUrl || `/img/news/default-image-${news.id}.jpg`}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded-md">
                  {news.type}
                </span>
                <h3 className="text-lg font-bold text-gray-800">
                  {truncateText(news.title, 50)}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {truncateText(news.content, 150)}
              </p>
              <p className="text-xs text-gray-500">
                <span>{news.author}</span> |{' '}
                <span>{new Date(news.publishedDate).toLocaleDateString()}</span>
              </p>
            </div>
          </article>
          {index < currentNews.length - 1 && (
            <hr className="my-4 border-primary" />
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
