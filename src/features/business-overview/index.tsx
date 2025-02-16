import {Outlet} from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';
import CurrentInfoPath from './components/CurrentInfoPath.tsx';

const Business = () => {
  return (
    <PageLayout
      title="사업개요 페이지 본문"
      fullHeight={false}
      minHeight={false}>
      <CurrentInfoPath/>
      <Outlet />
    </PageLayout>
  );
};

export default Business;
