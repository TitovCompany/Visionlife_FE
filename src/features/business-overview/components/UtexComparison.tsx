import comparison from '../../../data/business/utex_comparison.json';
import SectionLayout from '../../../layout/SectionLayout.tsx';

const UtexComparison = () => {
  return (
    <SectionLayout className="max-w-7xl mx-auto pt-32 px-4 bg-gray-50 py-16">
      {/* 기존 공정 */}
      <article className="max-w-6xl">
        <div className="text-left text-2xl font-semibold pb-6">
          <p className="w-fit mb-3 pb-1 px-1 text-left text-sm border-b border-b-primary text-primary font-bold">섬유 염색 공정 비교</p>
          <h3>기존 섬유 염색 공정</h3>
          <p className="text-gray-600">다단계 처리 & 폐수 발생</p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparison.items[0].steps.map((step, idx) => (
            <div key={step.id} className="bg-white rounded-lg shadow-md p-6 flex gap-6 items-center">
              <img
                src={`/img/product/compare/p${idx + 1}.png`}
                alt={step.content}
                className="w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-sm"
              />
              <div>
                <h4 className="text-lg font-bold">{step.content}</h4>
                <p className="text-gray-600 text-sm md:text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </article>

      {/* UTEX 공정 */}
      <article className="pt-20 max-w-6xl">
        <div className="text-left text-2xl font-semibold pb-6">
          <p className="w-fit mb-3 pb-1 px-1 text-left text-sm border-b border-b-primary text-primary font-bold">섬유 염색 공정 비교</p>
          <h3>UTEX 공정</h3>
          <p className="text-primary">단일 공정 & 폐수 0%</p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparison.items[1].steps.map((step) => (
            <div key={step.id} className="bg-primary-50 border border-primary rounded-lg shadow-md p-6 flex gap-6 items-center">
              <img
                src="/img/product/compare/p4.png"
                alt={step.content}
                className="w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-sm"
              />
              <div>
                <h4 className="text-lg font-bold text-primary">{step.content}</h4>
                <p className="text-gray-700 text-sm md:text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </article>
    </SectionLayout>
  );
};

export default UtexComparison;