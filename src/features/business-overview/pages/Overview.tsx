import SectionLayout from "../../../layout/SectionLayout.tsx";
import BusinessPoint from '../components/BusinessPoint.tsx';
import overview from "../../../data/businessOverview.json";
import bizInfo from "../../../data/business/biz_info.json";

const Overview = () => {
  const maxWidth = "max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto"
  return (
    <>
      <SectionLayout
        title="비전라이프 사업 소개"
        className="w-full grid place-items-center py-32"
        titleClassName="hidden">
        <article className={`${maxWidth} flex w-full gap-10 leading-relaxed md:text-xl lg:flex-row`}>
          <div className="mr-auto w-full max-w-lg">
            <h2 className="mx-auto w-full max-w-lg pb-10 text-3xl font-extrabold md:max-w-xl md:text-4xl lg:max-w-2xl lg:text-5xl">
              {overview.header}
            </h2>
            <h3 className="text-lg leading-normal font-semibold sm:text-xl md:text-2xl">
              <span className="text-primary">비전라이프</span>의 친환경 에코
              잉크와
              <br />
              무폐수 디지털 나염 시스템
            </h3>

            <div className="text-lg">
              {overview.description.map((line: string, index: number) => (
                <p key={index} className="mt-3 leading-relaxed md:mt-4">{line}</p>
              ))}
            </div>
          </div>
          <img
            src="/img/business/p1.jpg"
            alt=""
            className="h-96 w-96 object-cover lg:h-[500px]"
          />
        </article>

        {/* 4가지 장점 */}
        <BusinessPoint point="# Point 1" title="전사지를 사용하지 않습니다." src="/img/business/p3.jpg"/>
        <BusinessPoint point="# Point 2" title="나염 원단에 직접 프린팅하여 실사 수준의 고품질 출력을 제공합니다." src="/img/business/p2.jpg" isReversed={true}/>
        <BusinessPoint point="# Point 3" title="선처리 코팅 공정이 필요 없습니다." src="/img/product/compare/p1.png"/>
        <BusinessPoint point="# Point 4" title="후처리 코팅 없이도 고품질 출력을 구현할 수 있습니다." src="/img/product/compare/p4.png" isReversed={true}/>

        <article className="w-full lg:max-w-3xl mx-auto">
          <h2 className="pt-32 pb-10 text-2xl lg:text-4xl font-bold leading-relaxed">
            디지털 나염으로<br/>완성하는 <span className="text-primary">친환경 생산</span>
          </h2>
          {bizInfo.data.map((item, index) => (
            <div className="flex items-center gap-5">
              <p className="pl-6 text-3xl font-bold text-primary">#{String(index + 1)}.</p>
              <p key={index} className="pt-6 text-lg lg:text-xl font-semibold lg:whitespace-pre-line">{item}</p>
            </div>
          ))}
        </article>
      </SectionLayout>
    </>
  );
};

export default Overview;
