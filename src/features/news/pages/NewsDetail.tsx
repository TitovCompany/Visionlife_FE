import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import newsData from '../../../data/newsData.json';

const NewsDetail: React.FC = () => {
  const {id} = useParams();
  const newsItem =
    newsData.news.find((news) => news.id === id) ||
    newsData.newsList.find((news) => news.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!newsItem) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-xl">
        해당 뉴스를 찾을 수 없습니다.
      </div>
    );
  }
  return (
    <section className="max-w-screen-lg mx-auto px-6 py-12">
      {' '}
      {/* ✅ 전체 여백 추가 */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {newsItem.title}
      </h1>
      <div className="text-gray-500 text-sm mb-6">
        <span>{newsItem.author}</span> |
        <span className="ml-2">
          {new Date(newsItem.publishedDate).toLocaleDateString()}
        </span>
      </div>
      <hr className="border-b-2 border-gray-300 mb-10" />
      <img
        src={newsItem.imageUrl}
        alt={newsItem.title}
        className="w-full h-100 object-cover mt-8 mb-10"
      />
      <article className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mt-10">
        {newsItem.content}
      </article>
      <hr className="mt-12 border-b-2 border-gray-300" />
    </section>
  );
};

export default NewsDetail;
