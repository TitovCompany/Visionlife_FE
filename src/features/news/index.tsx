import React from 'react';
import {Outlet} from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';

const NewsLayout: React.FC = () => {
  return (
    <PageLayout title='뉴스 페이지 본문'>
      <Outlet />
    </PageLayout>
  );
};

export default NewsLayout;
