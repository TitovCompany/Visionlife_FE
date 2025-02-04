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
            <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 mb-20">
                <h2 className="max-w-2xl w-full font-extrabold text-5xl md:text-6xl leading-tight">
                    비젼라이프의<br /> 유텍스를 소개합니다.
                </h2>
            </section>

            {/* 제품 개요 섹션 */}
            <SectionLayout
                key={overview.id}
                title={overview.title}
                className="flex flex-col justify-center items-center text-center px-4 md:px-8 mb-20"
                titleClassName="max-w-xl text-4xl md:text-5xl leading-tight"
            >
                <div className="space-y-6 w-full max-w-4xl flex flex-col justify-center items-center text-center">
                    {overview.items.map((item) => (
                        <div key={item.id} className="max-w-xl">
                            <p className="text-gray-700 text-lg">{item.content}</p>
                        </div>
                    ))}
                </div>
            </SectionLayout>

            {/* UTEX 특장점 (2x2 그리드) */}
            <SectionLayout
                key={features.id}
                title={features.title}
                className="flex flex-col justify-center items-center text-center px-4 md:px-8 mb-20"
                titleClassName="max-w-xl text-4xl md:text-5xl leading-tight"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {features.items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center">
                            <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true} />
                            <h3 className="text-2xl font-semibold mt-3">{item.title}</h3>
                            <p className="text-gray-700 text-lg">{item.content}</p>
                        </div>
                    ))}
                </div>
            </SectionLayout>

            {/* 잉크 시스템 섹션 */}
            <SectionLayout
                key={ink.id}
                title={ink.title}
                className="flex flex-col justify-center items-center text-center px-4 md:px-8 mb-20"
                titleClassName="max-w-xl text-4xl md:text-5xl leading-tight"
            >
                <ul className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
                    {ink.items.map((item) => (
                        <li key={item.id} className="flex flex-col items-center text-center">
                            <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true} />
                            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                            <p className="text-gray-700 text-lg">{item.content}</p>
                        </li>
                    ))}
                </ul>
            </SectionLayout>

            {/* 비교 섹션 */}
            <SectionLayout
                key={comparison.id}
                title={comparison.title}
                className="flex flex-col justify-center items-center text-center px-4 md:px-8 mb-20"
                titleClassName="max-w-xl text-4xl md:text-5xl leading-tight"
            >
                <div className="w-full max-w-4xl">
                    {comparison.items.map((item, index) => (
                        <div key={item.id} className={`space-y-10 ${index !== 0 ? 'mt-0 md:mt-20 lg:mt-50' : ''}`}>
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                                {item.steps.map((step) => (
                                    <div key={step.id} className="flex flex-col items-center text-center space-y-6">
                                        <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true} />
                                        <p className="text-gray-700 text-lg">{step.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionLayout>

            {/* 속도 및 경제성 섹션 */}
            <SectionLayout
                key={performance.id}
                title={performance.title}
                className="flex flex-col justify-center items-center text-center px-4 md:px-8 mb-20"
                titleClassName="max-w-xl text-4xl md:text-5xl leading-tight"
            >
                <div className="space-y-6 w-full max-w-4xl flex flex-col justify-center items-center text-center">
                    {performance.items.map((item) => (
                        <div key={item.id} className="max-w-xl">
                            <p className="text-gray-700 text-lg">{item.content}</p>
                        </div>
                    ))}
                </div>
            </SectionLayout>
        </>
    );
};

export default Utex;
