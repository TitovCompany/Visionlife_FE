import React from 'react';
import FeaturedNews from './components/FeaturedNews';
import NewsList from './components/NewsList';
import { Outlet, useParams } from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';

const News: React.FC = () => {
  const { id } = useParams();

  return (
    <PageLayout
      title="뉴스 페이지 본문"
      isFullHeight={false}
      isMinHeight={false}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        <h1 className="mt-12 sm:mt-16 lg:mt-20 mb-8 w-full text-center text-4xl font-bold text-gray-900">
          언론 보도
        </h1>
        <hr className="border-primary mb-6 py-1" />
        {/* 상세 페이지인 경우 뉴스 목록 숨기고 DetailNews만 표시 */}
        {id && <Outlet />}
        {!id && (
          <>
            <FeaturedNews />
            <NewsList />
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default News;
