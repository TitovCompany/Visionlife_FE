import PageLayout from "../../layout/PageLayout.tsx";
import {Link} from "react-router-dom";

const OverView = () => {
  return (
      <PageLayout title="사업개요 페이지 본문">
        <div className="mx-20">
          {/* Overview */}
          <Link to={`/business/overview/${slug}`}>Overview</Link>

          {/* Utex */}
          <Link to={`/business/overview/${slug}`}>Utex</Link>
        </div>
      </PageLayout>
  );
};

export default OverView;