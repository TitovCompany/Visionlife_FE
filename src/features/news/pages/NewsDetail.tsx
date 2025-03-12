import React from 'react';
import {useParams} from 'react-router-dom';
import newsData from '../../../data/news.json';

const NewsDetail: React.FC = () => {
  const {slug} = useParams();
  const newsItem =
    newsData.items.find((news) => news.id === slug) ||
    newsData.items.find((news) => news.id === slug);

  if (!newsItem) {
    return (
      <div className='flex h-screen items-center justify-center text-xl text-gray-600'>
        해당 뉴스를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <section className='mx-auto max-w-screen-lg px-4 py-32'>
      <div className='mx-auto max-w-2xl text-center'>
        <h1 className='mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl md:text-4xl'>
          {newsItem.title}
        </h1>
        <div className='mb-4 text-sm text-gray-500 sm:mb-6 sm:text-lg'>
          <span>{newsItem.author}</span> |{' '}
          <span className='ml-1 sm:ml-2'>
            {new Date(newsItem.publishedDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      <img
        src={newsItem.imageUrl}
        alt={newsItem.title}
        className='mt-4 mb-6 h-96 w-screen object-contain sm:mt-8 sm:mb-10'
      />

      <article className='mx-auto mt-20 max-w-3xl text-base leading-relaxed whitespace-pre-line text-gray-700 sm:text-lg md:text-xl'>
        {newsItem.content}
      </article>
    </section>
  );
};

export default NewsDetail;
