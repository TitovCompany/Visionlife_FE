import SectionLayout from '../../../layout/SectionLayout.tsx';

// JSON 데이터
import overview from '../../../data/business/utex_overview.json';
import features from '../../../data/business/utex_features.json';
import ink from '../../../data/business/utex_ink.json';
import comparison from '../../../data/business/utex_comparison.json';
import ImageCard from '../../../components/ImageCard.tsx';

const Utex2 = () => {
  return (
    <div className="py-12 sm:py-20 md:py-32">
      {/* 제품 개요 섹션 */}
      <SectionLayout
        title={overview.title}
        className="mx-auto w-full max-w-7xl"
        titleClassName="hidden">
        <article className="flex h-full w-full flex-col justify-between gap-14 p-4 md:flex-row">
          <img
            src="/img/product/p3.png"
            alt="기기명 Coltex"
            className="h-[300px] w-full rounded-lg object-cover md:h-[530px] md:w-1/3"
          />
          <div className="flex w-full flex-col justify-start md:w-2/3">
            <h2 className="w-full max-w-xl pb-4 text-left text-2xl font-extrabold md:pb-8 md:text-4xl leading-12">
              비전라이프의 <span className="text-primary">UTEX</span>
              <br />
              친환경 섬유 염색 솔루션
            </h2>
            <div className="mb-6 h-fit w-full text-left text-base md:text-lg lg:max-w-2xl">
              <p className="mb-4 leading-8">
                UTEX 무폐수 섬유 염색 시스템은 기존 섬유 염색 산업의 복잡한
                문제를 해결하며, 초고속 염색 속도와 비용 절감 효과를 제공합니다.
              </p>
              <p className="mb-8 leading-8">
                공정 단축을 통해 높은 경제성을 확보할 수 있으며, 섬유 염색뿐만
                아니라 다양한 산업 분야에도 활용할 수 있는 혁신적인 기술입니다.
              </p>
            </div>
            <ul className="w-full max-w-2xl space-y-3">
              {overview.items.map((item, idx) => (
                <li key={item.id} className="flex flex-col items-start gap-3">
                  <p className="text-primary text-2xl font-bold">#Point{String(idx + 1)}.</p>
                  <p className="pl-5 text-base leading-relaxed text-gray-700 md:text-lg">
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </SectionLayout>

      <SectionLayout
        title={features.title}
        className="flex flex-col items-center justify-center px-4"
        titleClassName="hidden">
        <h2 className="mx-auto w-full max-w-xl pt-12 pb-10 text-center text-3xl leading-tight font-extrabold sm:pt-32 sm:pb-20 sm:text-4xl">
          <span className="text-primary">UTEX</span>가 제공하는 4가지 핵심 가치
        </h2>
        <div className="grid h-full w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
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
              descriptionClass="mt-2 whitespace-pre-line leading-relaxed text-sm sm:text-base"
            />
          ))}
        </div>
      </SectionLayout>

      {/* 잉크 시스템 섹션 */}
      <SectionLayout
        title={ink.title}
        className="flex flex-col items-center justify-center"
        titleClassName="hidden">
        <h2 className="mx-auto w-full max-w-xl pt-12 pb-10 text-center text-3xl leading-tight font-extrabold sm:pt-32 sm:pb-20 sm:text-4xl">
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
                descriptionClass="mt-2 text-gray-600 whitespace-pre-line text-xs sm:text-sm md:text-base"
              />
            )}
          </div>
          {/* 하단: 두 개 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                descriptionClass="mt-2 text-gray-600 whitespace-pre-line text-xs sm:text-sm md:text-base"
              />
            ))}
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className="max-w-7xl mx-auto pt-32 px-4">
        <h2 className="pb-10 text-center text-4xl font-bold">섬유 염색 공정 비교</h2>
        <article className="max-w-6xl">
          <div className="text-left text-2xl font-semibold">
            <h3>기존 섬유 염색 공정</h3>
            <p>다단계 처리 & 폐수 발생</p>
          </div>
          <ul className="space-y-3">
            {comparison.items[0].steps.map((step, idx) => (
              <ImageCard
                key={step.id}
                as="li"
                animation={true}
                isFlex={true}
                src={`/img/product/compare/p${idx + 1}.png`}
                alt={step.content}
                title={step.content}
                description={step.description}
                wrapperClass="pt-10 flex gap-10"
                imageClass="w-96 md:w-96 h-96 md:h-96 object-cover"
                descriptionClass="mt-2 text-gray-700 text-sm md:text-xl"
              />
            ))}
          </ul>
        </article>

        <article className="pt-20 max-w-6xl">
          <div className="text-left text-2xl font-semibold">
            <h3>UTEX 공정</h3>
            <p>단일 공정 & 폐수 0%</p>
          </div>
          <ul className="space-y-3">
            {comparison.items[1].steps.map((step) => (
              <ImageCard
                key={step.id}
                as="li"
                animation={true}
                isFlex={true}
                src="/img/product/compare/p4.png"
                alt={step.content}
                title={step.content}
                description={step.description}
                wrapperClass="pt-10 flex gap-10"
                imageClass="w-96 md:w-96 h-96 md:h-96 object-cover"
                descriptionClass="mt-2 text-gray-700 text-sm md:text-xl"
              />
            ))}
          </ul>
        </article>
      </SectionLayout>
    </div>
  );
};

export default Utex2;
