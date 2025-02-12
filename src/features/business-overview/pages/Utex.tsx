import SectionLayout from '../../../layout/SectionLayout.tsx';
import DummyImgBox from '../../../components/DummyImgBox.tsx';

// JSON 데이터
import overview from '../../../data/business/utex_overview.json';
import features from '../../../data/business/utex_features.json';
import ink from '../../../data/business/utex_ink.json';
import comparison from '../../../data/business/utex_comparison.json';
import performance from '../../../data/business/utex_performance.json';

const Utex = () => {
  return (
    <>
      {/* 메인 타이틀 섹션 */}
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <h2 className="w-full max-w-[400px] p-0 text-center text-4xl leading-tight font-extrabold">
          비젼라이프의 유텍스를
          <br />
            소개합니다.
        </h2>
      </section>

      {/* 제품 개요 섹션 */}
      <SectionLayout
        title={overview.title}
        titleClassName="text-4xl text-gray-900 font-bold"
        className="flex flex-col items-center justify-center"
        titlePadding="p-10 md:p-20"
      >
        <div className="w-full max-w-4xl p-4">
          {overview.items.map((item) => (
            <div key={item.id} className="border-b border-pr py-4 last:border-0">
              <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </SectionLayout>


      {/* UTEX 특장점 섹션 */}
      <SectionLayout
        title={features.title}
        titleClassName="text-4xl"
        className="flex flex-col items-center justify-center"
        titlePadding="p-10 md:p-20"
      >
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {features.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500"
            >
              <DummyImgBox
                width="w-[140px]"
                height="h-[140px]"
                isCircle={true}
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
      {/* 잉크 시스템 섹션 */}
      <SectionLayout
        title={ink.title}
        titleClassName="text-4xl text-gray-900 font-bold"
        className="flex flex-col items-center justify-center"
        titlePadding="p-10 md:p-20"
      >
        <div className="w-full max-w-4xl space-y-8 p-4">
          {/* 상단: 한 개 */}
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

          {/* 하단: 두 개 */}
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



      {/* 비교 섹션 */}
      <SectionLayout
        key={comparison.id}
        title={comparison.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden"
        titlePadding="p-0"
        fullHeight={true}>
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
      </SectionLayout>

      {/* 속도 및 경제성 섹션 */}
      <SectionLayout
        key={performance.id}
        title={performance.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden"
        titlePadding="p-0"
        fullHeight={true}>
        <div className="w-full max-w-4xl space-y-4">
          {performance.items.map((item) => (
            <div key={item.id}>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Utex;
