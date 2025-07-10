import React from 'react';
import {Outlet} from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';
import Header from '../../layout/Header/Header.tsx';

const NewsLayout: React.FC = () => {
  return (
   <>
    <Header />
    <PageLayout title='뉴스 페이지 본문'>
     <Outlet />
    </PageLayout>
   </>
  );
};

export default NewsLayout;