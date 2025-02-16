import React from 'react';
import { useNavigate } from 'react-router-dom';
import newsData from '../../../data/newsData.json';

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const FeaturedNews: React.FC = () => {
  const navigate = useNavigate();
  const featuredNews = newsData?.news ?? [];

  if (featuredNews.length === 0) {
    return (
      <div className="text-center text-xl font-semibold text-gray-600">
        No news available
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-6">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {featuredNews.map((news) => (
          <div
            key={news.id}
            className="flex cursor-pointer flex-col transition duration-300 hover:opacity-80 shadow-md  overflow-hidden"
            onClick={() => navigate(`/company/news/${news.id}`)}
          >
            <img
              src={news.imageUrl || `/img/news/default-image-${news.id}.jpg`}
              alt={news.title}
              className="w-full object-cover h-48 sm:h-56 md:h-64 lg:h-72"
            />
            <div className="flex flex-col p-4 flex-grow">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {news.title}
              </h3>
              <p className="mb-4 flex-grow text-sm text-gray-600">
                {truncateText(news.content, 130)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
