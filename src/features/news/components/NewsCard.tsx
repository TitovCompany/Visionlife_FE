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
  const {news, isDescription = false, isDefaultImg = false} = props;
  return (
    <li className="h-full w-full rounded-xl">
      <Link
        to={`/company/news/${news.id}`}
        className="flex w-[250px] h-[300px] sm:w-[350px] lg:h-[400px] flex-col overflow-hidden rounded-xl transition duration-300 hover:opacity-80">
        <img
          src={
            isDefaultImg
              ? news.imageUrl || `/img/news/default-image-${news.id}.jpg`
              : '/img/banner/p2.png'
          }
          alt={news.title}
          className="h-56 w-full rounded-t-lg object-cover md:h-64"
          loading="lazy"
        />
        <div className="flex h-40 w-full flex-grow flex-col rounded-b-xl bg-[#f3f3f3] px-6 pt-6 pb-10">
          <h3 className="mb-2 w-full text-lg font-semibold break-words whitespace-normal text-gray-800 line-clamp-2 lg:line-clamp-3">
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
