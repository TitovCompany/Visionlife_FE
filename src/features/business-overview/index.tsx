import PageLayout from "../../layout/PageLayout.tsx";
import {Link, Outlet, useParams} from "react-router-dom";

const Business = () => {
  const param = useParams();
  console.log(param)
  const isBusinessDetail = param.slug === undefined;
  return (
      <PageLayout title="사업개요 페이지 본문">
        <div className="mx-20">
          {isBusinessDetail && (
              <>
                <p>비젼라이프의 사업을 소개합니다.</p>
                {/* Overview */}
                <Link to={`/business/overview/introduction`}>Overview</Link>

                {/* Utex */}
                <Link to={`/business/utex/details`}>Utex</Link>
              </>
          )}

          <Outlet/>
        </div>
      </PageLayout>
  );
};

export default Business;