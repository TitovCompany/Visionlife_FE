import overview from "../../../data/businessOverview.json";
import OverviewList from "../components/OverviewList.tsx";
import SectionLayout from "../../../layout/SectionLayout.tsx";

const Overview = () => {
  return (
      <SectionLayout
          title={overview.title}
          className="grid place-items-center"
          titleClassName="max-w-xl pt-16 text-4xl leading-tight"
          titlePadding="p-0"
      >
        <div className="max-w-2xl">
          <article className="w-full text-[1rem] leading-8">
            <p>{overview.description}</p>
          </article>
        </div>

        <OverviewList data={overview.features}/>
        <OverviewList data={overview.benefits}/>
      </SectionLayout>
  );
};

export default Overview;