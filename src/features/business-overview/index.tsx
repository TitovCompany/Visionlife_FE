import {Outlet} from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';

const Business = () => {
  return (
    <PageLayout
      title="사업개요 페이지 본문"
      isFullHeight={false}
      isMinHeight={false}>
      <Outlet />
    </PageLayout>
  );
};

export default Business;
