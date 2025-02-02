import PageLayout from "../../layout/PageLayout.tsx";
import {Outlet, useParams} from "react-router-dom";
import SectionLayout from "../../layout/SectionLayout.tsx";
import BusinessCard from "./components/BusinessCard.tsx";

const Business = () => {
  const param = useParams();
  const isBusinessDetail = param.slug === undefined;

  return (
      <PageLayout title="사업개요 페이지 본문">
        <div className="mx-20">
          {isBusinessDetail && (
              <SectionLayout
                  title="비젼라이프의 사업을 소개합니다."
                  className="grid place-items-center"
                  titleClassName="max-w-xl text-4xl leading-tight"
                  titlePadding="p-0"
              >
                <div className="w-full max-w-4xl px-10 flex justify-between">
                  {/* Overview */}
                  <BusinessCard
                      href="/business/overview/introduction"
                      title="Overview"
                  />
                  {/* Utex */}
                  <BusinessCard
                      href="/business/utex/details"
                      title="Utex"
                  />
                </div>
              </SectionLayout>
          )}

          <Outlet/>
        </div>
      </PageLayout>
  );
};

export default Business;