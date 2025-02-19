import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../../../data/news.json';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const newsItem =
    newsData.items.find((news) => news.id === id) ||
    newsData.items.find((news) => news.id === id);

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
    <section className="py-32 px-4 mx-auto max-w-screen-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {newsItem.title}
        </h1>
        <div className="mb-4 sm:mb-6 text-sm sm:text-lg text-gray-500">
          <span>{newsItem.author}</span> |{' '}
          <span className="ml-1 sm:ml-2">
          {new Date(newsItem.publishedDate).toLocaleDateString()}
        </span>
        </div>
      </div>

      <img
        src={newsItem.imageUrl}
        alt={newsItem.title}
        className="mt-4 sm:mt-8 mb-6 sm:mb-10 w-screen h-96 object-contain"
      />

      <article className="max-w-3xl mx-auto mt-20 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-700">
        {newsItem.content}
      </article>
    </section>
  );
};

export default NewsDetail;
