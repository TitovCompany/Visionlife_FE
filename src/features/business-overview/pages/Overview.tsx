import overview from "../../../data/businessOverview.json";
import OverviewList from "../components/OverviewList.tsx";

const Overview = () => {
  return (
      <section>
        <h3>{overview.title}</h3>
        <article><p>{overview.description}</p></article>
        <OverviewList data={overview.features}/>
        <OverviewList data={overview.benefits}/>
      </section>
  );
};

export default Overview;