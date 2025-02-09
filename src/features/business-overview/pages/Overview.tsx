import overview from '../../../data/businessOverview.json';
import OverviewList from '../components/OverviewList.tsx';
import SectionLayout from '../../../layout/SectionLayout.tsx';

const Overview = () => {
  return (
    <SectionLayout
      title=""
      className="grid place-items-center"
      titlePadding="p-0">
      <h2 className="flex w-full max-w-xl items-center justify-center gap-4 pt-16 pb-10 text-4xl font-extrabold">
        <span className="h-[2px] w-16 bg-[#deee]"></span>
        {overview.header}
        <span className="h-[2px] w-16 bg-[#deee]"></span>
      </h2>
      <h3 className="text-center text-2xl leading-normal font-semibold">
        비젼라이프의 친환경 에코 잉크와
        <br />
        무폐수 디지털 나염 시스템
      </h3>
      <article className="w-full max-w-2xl pt-10 text-[1rem] leading-8">
        <p className="font-base">{overview.description}</p>
      </article>
      <div className="w-full pt-24">
        <OverviewList data={overview.features} />
        <OverviewList data={overview.benefits} />
      </div>
    </SectionLayout>
  );
};

export default Overview;
