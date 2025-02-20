import overview from '../../../data/business/utex_overview.json';
import SectionLayout from '../../../layout/SectionLayout.tsx';
import {forwardRef} from 'react';

const UtexOverview = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <SectionLayout
      title={overview.title}
      className="mx-auto w-full max-w-7xl"
      titleClassName="hidden">
      <article ref={ref} className="flex h-full w-full flex-col justify-between gap-14 py-4 lg:p-4 lg:flex-row">
        <img src="/img/product/p3.png" alt="기기명 Coltex" className="h-[300px] w-full lg:rounded-lg object-cover md:h-[530px] lg:w-1/3"/>
        <div className="flex w-full flex-col justify-start mx-auto md:w-2/3">
          <h2 className="w-full max-w-xl pb-4 text-left text-2xl leading-12 font-extrabold md:pb-8 md:text-4xl">
            비전라이프의 <span className="text-primary">UTEX</span>
            <br />
            친환경 섬유 염색 솔루션
          </h2>
          <div className="mb-6 h-fit w-full text-left text-base md:text-lg lg:max-w-2xl">
            <p className="biz_item mb-4 leading-8">
              UTEX 무폐수 섬유 염색 시스템은 기존 섬유 염색 산업의 복잡한 문제를
              해결하며, 초고속 염색 속도와 비용 절감 효과를 제공합니다.
            </p>
            <p className="biz_item mb-8 leading-8">
              공정 단축을 통해 높은 경제성을 확보할 수 있으며, 섬유 염색뿐만
              아니라 다양한 산업 분야에도 활용할 수 있는 혁신적인 기술입니다.
            </p>
          </div>
          <ul className="w-full max-w-2xl space-y-3">
            {overview.items.map((item, idx) => (
              <li key={item.id} className="biz_item flex flex-col items-start gap-3">
                <p className="text-primary text-2xl font-bold">
                  #Point{String(idx + 1)}.
                </p>
                <p className="pl-5 text-base leading-relaxed text-gray-700 md:text-lg">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </SectionLayout>
  );
});

export default UtexOverview;
