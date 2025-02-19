import SectionLayout from '../../../layout/SectionLayout.tsx';


// JSON 데이터
import overview from '../../../data/business/utex_overview.json';
import features from '../../../data/business/utex_features.json';
import ink from '../../../data/business/utex_ink.json';
import comparison from '../../../data/business/utex_comparison.json';
import BulletPoint from '../../../components/bullet-point/BulletPoint.tsx';
import ImageCard from '../../../components/ImageCard.tsx';

const Utex2 = () => {
  return (
    <div className="py-12 sm:py-20 md:py-32">
      {/* 제품 개요 섹션 */}
      <SectionLayout
        title={overview.title}
        className="w-full max-w-7xl mx-auto"
        titleClassName="hidden">
        <article className="w-full h-full p-4">
          <h2 className="w-full max-w-xl mx-auto pb-16 md:pb-20 text-center text-2xl md:text-4xl leading-tight font-extrabold">
            비젼라이프의 <span className="text-primary">UTEX</span>
            <br />
            친환경 섬유 염색 솔루션
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/2">
              <img
                src="/img/product/p3.png"
                alt="기기명 Coltex"
                className="w-full h-[300px] md:h-[530px] object-cover rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start">
              <div className="w-full h-fit text-left text-base md:text-lg mb-6">
                <p className="mb-4">
                  UTEX 무폐수 섬유 염색 시스템은 기존 섬유 염색 산업의 복잡한 문제를 해결하며,
                  초고속 염색 속도와 비용 절감 효과를 제공합니다.
                </p>
                <p>
                  공정 단축을 통해 높은 경제성을 확보할 수 있으며, 섬유 염색뿐만 아니라
                  다양한 산업 분야에도 활용할 수 있는 혁신적인 기술입니다.
                </p>
              </div>
              <ul className="w-full max-w-2xl space-y-3">
                {overview.items.map((item, idx) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <div className="shrink-0">
                      <BulletPoint bulletPoints={String(idx + 1)} />
                    </div>
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

      <SectionLayout
        title={features.title}
        className="flex flex-col items-center justify-center px-4"
        titleClassName="hidden">
        <h2 className="w-full max-w-xl mx-auto pt-12 sm:pt-32 pb-10 sm:pb-20 text-center text-3xl sm:text-4xl leading-tight font-extrabold">
          <span className="text-primary">UTEX</span>가 제공하는 4가지 핵심 가치
        </h2>
        <div className="w-full h-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.items.map((item, index) => (
            <ImageCard
              key={item.id}
              as="div"
              title={item.title}
              animation={true}
              src={`/img/product/features/p${index + 1}.png`}
              alt={item.title}
              description={item.content}
              wrapperClass="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500"
              imageClass="w-full sm:w-11/12 md:w-full aspect-[4/3] object-cover"
              descriptionClass="mt-2 whitespace-pre-line leading-relaxed text-sm sm:text-base"/>
          ))}
        </div>
      </SectionLayout>

      {/* 잉크 시스템 섹션 */}
      <SectionLayout
        title={ink.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden">
        <h2 className="w-full max-w-xl mx-auto pt-12 sm:pt-32 pb-10 sm:pb-20 text-center text-3xl sm:text-4xl leading-tight font-extrabold">
          <span className="text-primary">UTEX</span> 잉크 시스템
        </h2>
        <div className="w-full max-w-4xl space-y-8 p-4">
          {/* 상단: 한 개 */}
          <div className="flex justify-center">
            {ink.items[0] && (
              <ImageCard
                key={ink.items[0].id}
                as="div"
                title={ink.items[0].title}
                animation={true}
                src={`/img/product/ink/p1.png`}
                alt={ink.items[0].title}
                description={ink.items[0].content}
                wrapperClass="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500"
                descriptionClass="mt-2 text-gray-600 whitespace-pre-line text-xs sm:text-sm md:text-base"/>
            )}
          </div>
          {/* 하단: 두 개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ink.items.slice(1, 3).map((item, idx) => (
              <ImageCard
                key={item.id}
                as="div"
                title={item.title}
                animation={true}
                src={`/img/product/ink/p${idx + 2}.png`}
                alt={item.title}
                description={item.content}
                wrapperClass="group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500"
                descriptionClass="mt-2 text-gray-600 whitespace-pre-line text-xs sm:text-sm md:text-base"/>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* 비교 섹션 */}
      <SectionLayout
        key={comparison.id}
        title={comparison.title}
        className="flex flex-col items-center justify-center px-4"
        titleClassName="hidden"
        fullHeight={false}>
        <h2 className="w-full max-w-xl mx-auto pt-12 sm:pt-32 pb-10 sm:pb-20 text-center text-3xl sm:text-4xl leading-tight font-extrabold">
          <span className="text-primary">UTEX</span> vs 기존 섬유 염색 공정
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* 기존 공정 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
              기존 섬유 염색 공정
            </h3>
            <ul className="space-y-3">
              {comparison.items[0].steps.map((step, idx) => (
                <ImageCard
                  key={step.id}
                  as="li"
                  animation={true}
                  src={`/img/product/compare/p${idx + 1}.png`}
                  alt={step.content}
                  description={step.content}
                  wrapperClass="flex flex-col items-center p-4 bg-white shadow rounded-lg"
                  imageClass="w-[120px] md:w-[140px] h-[120px] md:h-[140px] object-cover rounded-full"
                  descriptionClass="mt-2 text-gray-700 text-sm md:text-base"/>
              ))}
            </ul>
          </div>
          {/* UTEX 공정 */}
          <div className="bg-primary p-6 rounded-lg shadow-md text-white">
            <h3 className="text-center text-xl font-semibold mb-4">UTEX 공정</h3>
            <ul className="space-y-3">
              {comparison.items[1].steps.map((step) => (
                <ImageCard
                  key={step.id}
                  as="li"
                  animation={true}
                  src="/img/product/compare/p4.png"
                  alt={step.content}
                  description={step.content}
                  wrapperClass="flex flex-col items-center p-4 bg-white shadow rounded-lg text-gray-800"
                  imageClass="w-[120px] md:w-[140px] h-[120px] md:h-[140px] object-cover rounded-full"
                  descriptionClass="mt-2 text-sm md:text-base"/>
              ))}
            </ul>
          </div>
        </div>
      </SectionLayout>


    </div>
  );
};

export default Utex2;
