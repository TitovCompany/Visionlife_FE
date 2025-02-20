import SectionLayout from '../../../layout/SectionLayout.tsx';
import BusinessPoint from '../components/BusinessPoint.tsx';
import overview from '../../../data/businessOverview.json';
import bizInfo from '../../../data/business/biz_info.json';
import bizPoint from '../../../data/business/biz_point.json';

const Overview = () => {
  const maxWidth = 'max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto';
  return (
    <SectionLayout
      title="비전라이프 사업 소개"
      className="mx-auto grid w-full place-items-center md:py-32"
      titleClassName="hidden">
      <article
        className={`${maxWidth} flex w-full flex-col-reverse gap-10 leading-relaxed md:text-xl lg:flex-row`}>
        <div className="mx-auto w-full max-w-sm md:mr-auto md:max-w-lg">
          <h2 className="md:text-4x pb-5 text-3xl font-extrabold md:pb-10 lg:text-5xl">
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
              <p key={index} className="mt-3 leading-relaxed md:mt-4">
                {line}
              </p>
            ))}
          </div>
        </div>
        <img
          src="/img/business/p1.jpg"
          alt=""
          className="h-96 w-full object-cover md:h-[500px] md:w-[50%]"
        />
      </article>

      {/* 4가지 장점 */}
      {bizPoint.data.map((item, index) => (
        <BusinessPoint
          key={index}
          point={item.point}
          title={item.title}
          src={item.src}
          isReversed={item.isReversed}
        />
      ))}

      <article className="mx-auto w-full max-w-sm pb-20 lg:max-w-3xl">
        <h2 className="pt-32 text-2xl leading-relaxed font-bold lg:text-4xl">
          디지털 나염으로
          <br />
          완성하는 <span className="text-primary">친환경 생산</span>
        </h2>
        {bizInfo.data.map((item, index) => (
          <div key={index} className="flex items-center gap-5 pt-5 md:pt-10">
            <p className="text-primary pl-2 text-2xl font-bold md:pl-6 md:text-3xl">
              #{String(index + 1)}.
            </p>
            <p className="text-md pt-5 font-semibold md:pt-0 lg:text-xl lg:whitespace-pre-line">
              {item}
            </p>
          </div>
        ))}
      </article>
    </SectionLayout>
  );
};

export default Overview;
