import React from 'react';
import {Link} from 'react-router-dom';
import {truncateText} from '../../../utils/truncateText.ts';
import {NewsType} from '../../../types';

interface NewsCardProps {
  news: NewsType;
  isDescription?: boolean;
  isDefaultImg?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = (props) => {
  const {
    news,
    isDescription = false,
    isDefaultImg = false,
  } = props;
  return (
    <li className="w-full h-full rounded-xl">
      <Link to={`/company/news/${news.id}`} className="flex cursor-pointer flex-col transition duration-300 hover:opacity-80 shadow-md overflow-hidden rounded-xl">
        <img
          src={isDefaultImg
            ? news.imageUrl || `/img/news/default-image-${news.id}.jpg`
            : '/img/banner/p2.png'}
          alt={news.title}
          className="w-full h-56 object-cover md:h-64 rounded-t-lg"
          loading="lazy"
        />
        <div className="h-40 pt-6 pb-10 px-10 flex flex-col flex-grow bg-[#f3f3f3] rounded-b-xl">
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            {news.title}
          </h3>
          {isDescription && (
            <p className="mb-4 flex-grow text-sm text-gray-600">
              {truncateText(news.content, 130)}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default NewsCard;
