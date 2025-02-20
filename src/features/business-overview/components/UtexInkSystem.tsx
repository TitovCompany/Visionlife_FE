import ink from '../../../data/business/utex_ink.json';
import ImageCard from '../../../components/ImageCard.tsx';
import SectionLayout from '../../../layout/SectionLayout.tsx';

const UtexInkSystem = () => {
  return (
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
  );
};

export default UtexInkSystem;