import {Outlet} from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';
import Header from '../../layout/Header/Header.tsx';

const Business = () => {
  return (
    <>
     <Header />
     <PageLayout title='사업개요 페이지 본문'>
      <Outlet />
     </PageLayout>
    </>
  );
};

export default Business;