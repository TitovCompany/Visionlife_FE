import SectionLayout from "../../../layout/SectionLayout.tsx";
import DummyImgBox from "../../../components/DummyImgBox.tsx";

// JSON 데이터
import overview from "../../../data/business/utex_overview.json";
import features from "../../../data/business/utex_features.json";
import ink from "../../../data/business/utex_ink.json";
import comparison from "../../../data/business/utex_comparison.json";
import performance from "../../../data/business/utex_performance.json";

const Utex = () => {
  return (
      <>
        {/* 메인 타이틀 섹션 */}
        <section className="w-full h-screen flex flex-col justify-center items-center">
          <h2 className="max-w-[330px] w-full p-0 text-center font-extrabold text-4xl leading-tight">
            비젼라이프의 특허 기기 유텍스를 소개합니다.
          </h2>
        </section>

        {/* 제품 개요 섹션 */}
        <SectionLayout
            key={overview.id}
            title={overview.title}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] text-4xl leading-tight"
            titlePadding="p-0"
        >
          <div className="space-y-4 w-full max-w-4xl">
            {overview.items.map((item) => (
                <div key={item.id}>
                  <p className="text-gray-600">{item.content}</p>
                </div>
            ))}
          </div>
        </SectionLayout>

        {/* UTEX 특장점 섹션 */}
        <SectionLayout
            key={features.id}
            title={features.title}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] text-4xl leading-tight"
            titlePadding="p-0"
        >
          <div className="space-y-4 w-full max-w-4xl">
            {features.items.map((item) => (
                <div key={item.id}>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
            ))}
          </div>
        </SectionLayout>

        {/* 잉크 시스템 섹션 */}
        <SectionLayout
            key={ink.id}
            title={ink.title}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] text-4xl leading-tight"
            titlePadding="p-0"
        >
          <ul className="max-w-4xl w-full px-6 flex justify-between items-center">
            {ink.items.map((item) => (
                <li key={item.id} className="text-center">
                  <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </li>
            ))}
          </ul>
        </SectionLayout>

        {/* 비교 섹션 */}
        <SectionLayout
            key={comparison.id}
            title={comparison.title}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] text-4xl leading-tight"
            titlePadding="p-0"
        >
          <div className="space-y-8">
            {comparison.items.map((item) => (
                <div key={item.id} className="text-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <ul className="flex justify-center items-center space-x-6">
                    {item.steps.map((step) => (
                        <li key={step.id} className="flex flex-col items-center">
                          <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
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
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] text-4xl leading-tight"
            titlePadding="p-0"
        >
          <div className="space-y-4 w-full max-w-4xl">
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
