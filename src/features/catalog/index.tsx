import PageLayout from "../../layout/PageLayout.tsx";
import Catalogcomponent from "./components/Catalog";

const Catalog = () => {
  return (
      <PageLayout title="카탈로그 페이지 본문">
        <div className="mx-20">
            <Catalogcomponent />
        </div>
      </PageLayout>
);
};

export default Catalog;
