import React from 'react';
import { useNavigate } from 'react-router-dom';

interface News {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

interface NewsCardProps {
  news: News;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const NewsCard = ({ news }: NewsCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer flex-col transition duration-300 hover:opacity-80 shadow-md overflow-hidden"
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
  );
};

export default NewsCard;
