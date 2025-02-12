import PageLayout from '../../layout/PageLayout.tsx';
import {Outlet, useParams} from 'react-router-dom';
import SectionLayout from '../../layout/SectionLayout.tsx';
import BusinessCard from './components/BusinessCard.tsx';


const Business = () => {
  const param = useParams();
  const isBusinessDetail = param.slug === undefined;

  return (
    <PageLayout title="사업개요 페이지 본문">
      {isBusinessDetail && (
        <SectionLayout
          className="mx-auto max-w-3xl pt-40"
          titlePadding="p-0">
          <h2 className="text-left text-4xl leading-tight font-extrabold">
            비젼라이프를
            소개합니다.
          </h2>
          <div className="grid w-full max-w-4xl grid-cols-2 gap-8 pt-14">
            {/* Overview */}
            <BusinessCard
              href="/business/overview/introduction"
              title="Overview"
              description="친환경 염색 기술로 지속 가능한 미래를 만듭니다."
            />
            {/* Utex */}
            <BusinessCard
              href="/business/utex/details"
              title="Utex"
              description="무폐수 디지털 나염 시스템으로 섬유 염색의 패러다임을 바꿉니다."
            />
          </div>
        </SectionLayout>
      )}

      <Outlet />
    </PageLayout>
  );
};

export default Business;
