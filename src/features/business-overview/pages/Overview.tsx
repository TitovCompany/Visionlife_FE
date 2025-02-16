import overview from "../../../data/businessOverview.json";
import OverviewList from "../components/OverviewList.tsx";
import BenefitList from "../components/BenefitList.tsx";
import SectionLayout from "../../../layout/SectionLayout.tsx";

const Overview = () => {
  return (
    <div className="container mx-auto">
      <SectionLayout
        title="비전라이프 사업 소개"
        className="py-32 grid place-items-center"
        titleClassName="hidden"
        titlePadding="p-0">

        <div className="w-full pb-28">
          <h2 className="flex w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto items-center justify-center gap-2 md:gap-4 lg:gap-6 pb-10 text-3xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="h-[2px] w-10 md:w-16 bg-[#deee]"></span>
            {overview.header}
            <span className="h-[2px] w-10 md:w-16 bg-[#deee]"></span>
          </h2>

          <h3 className="text-center text-lg sm:text-xl md:text-2xl leading-normal font-semibold">
            비젼라이프의 친환경 에코 잉크와
            <br />
            무폐수 디지털 나염 시스템
          </h3>
        </div>

        <article className="mx-auto w-full max-w-lg md:max-w-2xl lg:max-w-4xl md:text-xl leading-relaxed">
          <div className="border-l-4 border-primary pl-4 md:pl-6">
            {overview.description.map((line: string, index: number) => (
              <p key={index} className="mt-3 md:mt-4">{line}</p>
            ))}
          </div>
        </article>

        <div className="w-full pt-32 space-y-12 md:space-y-10 lg:space-y-12">
          <OverviewList data={overview.features} />
          <div className="pt-20">
            <BenefitList data={overview.benefits} />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Overview;
