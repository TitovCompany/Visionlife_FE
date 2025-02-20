import features from '../../../data/business/utex_features.json';
import ImageCard from '../../../components/ImageCard.tsx';
import SectionLayout from '../../../layout/SectionLayout.tsx';

const UtexFeatures = () => {
  return (
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
  );
};

export default UtexFeatures;