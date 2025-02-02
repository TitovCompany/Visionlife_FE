import overview from "../../data/businessOverview.json";
import utex from "../../data/businessUtex.json";
import PageLayout from "../../layout/PageLayout.tsx";
import OverviewList from "./components/OverviewList.tsx";

const OverView = () => {
  return (
      <PageLayout title="사업개요 페이지 본문">
        <div className="mx-20">
          {/* Overview */}
          <section>
            <h3>{overview.title}</h3>
            <article><p>{overview.description}</p></article>
            <OverviewList data={overview.features}/>
            <OverviewList data={overview.benefits}/>
          </section>

          {/* Utex */}
          <section>
            <h3>{utex.title}</h3>
            {utex.sections.map(section => (
                <article key={section.id}>
                  {section.items.map(({id, content}) => (
                      <p key={id}>{content}</p>
                  ))}
                </article>
            ))}
          </section>
        </div>
      </PageLayout>
  );
};

export default OverView;