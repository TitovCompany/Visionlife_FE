import overview from "../../../data/businessOverview.json";
import OverviewList from "../components/OverviewList.tsx";
import BenefitList from "../components/BenefitList.tsx";
import SectionLayout from "../../../layout/SectionLayout.tsx";

const Overview = () => {
  return (
    <div className="max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto">
      <SectionLayout
        title="비전라이프 사업 소개"
        className="py-32 grid place-items-center"
        titleClassName="hidden">

        <article className="mx-auto w-full md:text-xl leading-relaxed flex lg:flex-row gap-10">
          <div className="w-full max-w-lg mr-auto">
            <h2 className="w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto pb-10 text-3xl md:text-4xl lg:text-5xl font-extrabold">
              {overview.header}
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl leading-normal font-semibold">
              <span className="text-primary">비전라이프</span>의 친환경 에코 잉크와
              <br />
              무폐수 디지털 나염 시스템
            </h3>

            <div className="text-lg">
              {overview.description.map((line: string, index: number) => (
                <p key={index} className="mt-3 md:mt-4 leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
          <img
            src="/img/business/p1.jpg"
            alt=""
            className="w-96 h-96 lg:h-[500px] object-cover"/>
        </article>

        <div className="px-4 md:px-8">
          <div className="w-full pt-32 space-y-12 md:space-y-10 lg:space-y-12">
            <OverviewList data={overview.features} />
            <div className="pt-20">
              <BenefitList data={overview.benefits} />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Overview;
