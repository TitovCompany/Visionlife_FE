import PageLayout from '../../layout/PageLayout.tsx';
import {Outlet} from 'react-router-dom';
import Header from '../../layout/Header/Header.tsx';

const ProfileLayout = () => {
 return (
  <>
   <Header />
   <PageLayout title='회사 소개 페이지 본문'>
    <Outlet />
   </PageLayout>
  </>
 );
};

export default ProfileLayout;