import SectionLayout from "../../../layout/SectionLayout.tsx";
import BusinessPoint from '../components/BusinessPoint.tsx';
import overview from "../../../data/businessOverview.json";
import bizInfo from "../../../data/business/biz_info.json";
import bizPoint from "../../../data/business/biz_point.json";

const Overview = () => {
  const maxWidth = "max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto"
  return (
    <SectionLayout
      title="비전라이프 사업 소개"
      className="w-full mx-auto grid place-items-center md:py-32"
      titleClassName="hidden">
      <article className={`${maxWidth} flex flex-col-reverse w-full gap-10 leading-relaxed md:text-xl lg:flex-row`}>
        <div className="mx-auto md:mr-auto w-full max-w-sm md:max-w-lg">
          <h2 className="pb-5 md:pb-10 text-3xl font-extrabold md:text-4x lg:text-5xl">
            {overview.header}
          </h2>
          <h3 className="text-xl leading-normal font-semibold md:text-2xl">
            <span className="text-primary">비전라이프</span>의 친환경 에코
            잉크와
            <br />
            무폐수 디지털 나염 시스템
          </h3>

          <div className="text-md md:text-lg">
            {overview.description.map((line: string, index: number) => (
              <p key={index} className="mt-3 leading-relaxed md:mt-4">{line}</p>
            ))}
          </div>
        </div>
        <img src="/img/business/p1.jpg" alt="" className="h-96 w-full object-cover md:w-[50%] md:h-[500px]"/>
      </article>

      {/* 4가지 장점 */}
      {bizPoint.data.map((item, index) => (
        <BusinessPoint key={index} point={item.point} title={item.title} src={item.src} isReversed={item.isReversed}/>
      ))}

      <article className="w-full pb-20 max-w-sm lg:max-w-3xl mx-auto">
        <h2 className="pt-32 text-2xl lg:text-4xl font-bold leading-relaxed">
          디지털 나염으로<br/>완성하는 <span className="text-primary">친환경 생산</span>
        </h2>
        {bizInfo.data.map((item, index) => (
          <div key={index} className="pt-5 md:pt-10 flex items-center gap-5">
            <p className="pl-2 md:pl-6 text-2xl md:text-3xl font-bold text-primary">
              #{String(index + 1)}.
            </p>
            <p className="pt-5 md:pt-0 text-md lg:text-xl font-semibold lg:whitespace-pre-line">{item}</p>
          </div>
        ))}
      </article>
    </SectionLayout>
  );
};

export default Overview;
