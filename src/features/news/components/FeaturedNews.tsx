import React from 'react';
import {useNavigate} from 'react-router-dom';
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
    <section className="mx-auto max-w-screen-xl px-4 py-6">
      <hr className="border-primary mb-6" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredNews.map((news) => (
          <div
            key={news.id}
            className="flex cursor-pointer flex-col transition duration-300 hover:opacity-80"
            onClick={() => navigate(`/company/news/${news.id}`)}>
            <img
              src={news.imageUrl || `/img/news/default-image-${news.id}.jpg`}
              alt={news.title}
              className="mb-4 h-70 w-full object-cover"
            />
            <div className="flex flex-grow flex-col">
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
      <hr className="border-primary mt-6" />
    </section>
  );
};

export default FeaturedNews;
