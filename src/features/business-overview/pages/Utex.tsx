import SectionLayout from '../../../layout/SectionLayout.tsx';
import DummyImgBox from '../../../components/DummyImgBox.tsx';

// JSON 데이터
import overview from '../../../data/business/utex_overview.json';
import features from '../../../data/business/utex_features.json';
import ink from '../../../data/business/utex_ink.json';
import comparison from '../../../data/business/utex_comparison.json';
import BulletPoint from '../../../components/bullet-point/BulletPoint.tsx';

const Utex = () => {
  return (
    <div className="py-32">
      {/* 제품 개요 섹션 */}
      <SectionLayout
        title={overview.title}
        className="w-full max-w-7xl mx-auto"
        titleClassName="hidden">
        <article className="w-full h-full p-4">
            <h2 className="w-full max-w-xl mx-auto pb-20 text-center text-4xl leading-tight font-extrabold">
              비젼라이프의 <span className="text-primary">UTEX</span>
              <br />
              혁신적인 섬유 염색 솔루션
            </h2>
          <div className="flex justify-between gap-5">
            <div className="w-full flex-1">
              <img src="/img/product/p3.png" alt="기기명 Coltex" className="w-full h-[530px] object-cover rounded-lg"/>
            </div>
            <div className="flex-1 flex flex-col justify-start">
              <div className="w-full h-fit text-left text-lg/8">
                <p className="mb-5">
                  UTEX 무폐수 섬유염색 시스템은 기존 섬유 염색 산업의 복잡한 문제를 해결하며,
                  초고속 염색 속도와 비용 절감 효과를 제공합니다.
                </p>
                <p className="mb-10">
                  공정 단축을 통해 높은 경제성을 확보할 수 있으며, 섬유 염색뿐만 아니라
                  다양한 산업 분야에도 활용할 수 있는 혁신적인 기술입니다.
                </p>
              </div>
              <ul className="w-full max-w-2xl">
                {overview.items.map((item, idx) => (
                  <li key={item.id} className="py-4 text-left flex items-center gap-5">
                    <BulletPoint bulletPoints={String(idx + 1)}/>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </SectionLayout>

      {/* UTEX 특장점 섹션 */}
      {/*<SectionLayout
        title={features.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden"
        titlePadding="p-10 md:p-20"
      >
        <div className="w-full max-w-6xl grid grid-cols-2 grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {features.items.map((item) => (
            <div key={item.id} className="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500">
              <DummyImgBox
                width="w-full"
                height="h-full"
                isCircle={false}
              />
              <h3 className="mt-6 md:mt-10 text-base font-semibold text-gray-800 relative inline-block">
                {item.title}
                <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="mt-2 text-gray-600 whitespace-pre-line leading-relaxed text-sm md:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </SectionLayout>
       잉크 시스템 섹션
      <SectionLayout
        title={ink.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden"
        titlePadding="p-10 md:p-20"
      >
        <div className="w-full max-w-4xl space-y-8 p-4">
           상단: 한 개
          <div className="flex justify-center">
            {ink.items[0] && (
              <div
                key={ink.items[0].id}
                className="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500"
              >
                <DummyImgBox
                  width="w-[140px]"
                  height="h-[140px]"
                  isCircle={true}
                />
                <h3 className="mt-6 md:mt-10 text-base font-semibold text-gray-800 relative inline-block">
                  {ink.items[0].title}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="mt-2 text-gray-600 whitespace-pre-line text-sm md:text-base">
                  {ink.items[0].content}
                </p>
              </div>
            )}
          </div>

           하단: 두 개
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ink.items.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500"
              >
                <DummyImgBox
                  width="w-[140px]"
                  height="h-[140px]"
                  isCircle={true}
                />
                <h3 className="mt-4 text-base font-semibold text-gray-800 relative inline-block">
                  {item.title}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="mt-2 text-gray-600 whitespace-pre-line text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

       비교 섹션
      <SectionLayout
        key={comparison.id}
        title={comparison.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden"
        titlePadding="p-0"
        fullHeight={false}>
        <div className="space-y-8">
          {comparison.items.map((item) => (
            <div key={item.id} className="text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <ul className="flex items-center justify-center space-x-6">
                {item.steps.map((step) => (
                  <li key={step.id} className="flex flex-col items-center">
                    <DummyImgBox
                      width="w-[140px]"
                      height="h-[140px]"
                      isCircle={true}
                    />
                    <p className="text-gray-600">{step.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionLayout>*/}
    </div>
  );
};

export default Utex;
