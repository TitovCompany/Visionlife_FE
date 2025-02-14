import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../../../data/newsData.json';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const newsItem =
    newsData.news.find((news) => news.id === id) ||
    newsData.newsList.find((news) => news.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!newsItem) {
    return (
      <div className="flex h-screen items-center justify-center text-xl text-gray-600">
        해당 뉴스를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-screen-lg px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        {newsItem.title}
      </h1>
      <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
        <span>{newsItem.author}</span> |{' '}
        <span className="ml-1 sm:ml-2">
          {new Date(newsItem.publishedDate).toLocaleDateString()}
        </span>
      </div>
      <hr className="mb-6 sm:mb-10 border-b-2 border-gray-300" />
      <img
        src={newsItem.imageUrl}
        alt={newsItem.title}
        className="mt-4 sm:mt-8 mb-6 sm:mb-10 h-60 sm:h-80 md:h-96 w-full object-cover"
      />
      <article className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
        {newsItem.content}
      </article>
      <hr className="mt-8 sm:mt-12 border-b-2 border-gray-300" />
    </section>
  );
};

export default NewsDetail;
