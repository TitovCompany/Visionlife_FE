import features from '../../../data/business/utex_features.json';
import ImageCard from '../../../components/ImageCard.tsx';
import SectionLayout from '../../../layout/SectionLayout.tsx';
import {forwardRef} from 'react';

const UtexFeatures = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <SectionLayout className='mx-auto flex max-w-5xl flex-col items-center justify-center px-4'>
      <div className='w-full pt-12 pb-10 text-left text-2xl font-semibold'>
        <p className='border-b-primary text-primary mx-1 mb-3 w-fit border-b pb-1 text-left text-sm font-bold'>
          #섬유 프린팅의 새로운 기준
        </p>
        <h3 className='text-3xl leading-10'>
          <span className='text-primary'>UTEX</span>의 차별화된
          <br />
          4가지 핵심 기술
        </h3>
      </div>
      <div
        ref={ref}
        className='grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2'>
        {features.items.map((item, index) => (
          <ImageCard
            key={item.id}
            as='div'
            title={item.title}
            animation={true}
            src={`/img/product/features/p${index + 1}.png`}
            alt={item.title}
            description={item.content}
            wrapperClass='biz_item group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500'
            imageClass='w-full sm:w-11/12 md:w-full aspect-[4/3] object-cover'
            descriptionClass='mt-2 whitespace-pre-line leading-relaxed text-sm sm:text-base'
          />
        ))}
      </div>
    </SectionLayout>
  );
});

export default UtexFeatures;
