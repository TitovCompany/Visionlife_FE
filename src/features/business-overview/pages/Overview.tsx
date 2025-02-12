import overview from "../../../data/businessOverview.json";
import OverviewList from "../components/OverviewList.tsx";
import BenefitList from "../components/BenefitList.tsx";
import SectionLayout from "../../../layout/SectionLayout.tsx";

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
      <article className="mx-auto w-full max-w-4xl pt-10 text-[1rem] leading-relaxed">
        <div className="border-l-4 border-primary pl-6">
          {overview.description.map((line: string, index: number) => (
            <p key={index} className="mt-4">{line}</p>
          ))}
        </div>
      </article>

      <div className="w-full pt-20 space-y-16">
        <OverviewList data={overview.features} />

        <BenefitList data={overview.benefits} />
      </div>
    </SectionLayout>
  );
};

export default Overview;
