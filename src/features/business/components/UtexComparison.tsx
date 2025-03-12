import comparison from '../../../data/business/utex_comparison.json';
import SectionLayout from '../../../layout/SectionLayout.tsx';
import {forwardRef} from 'react';

const UtexComparison = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <SectionLayout className='mx-auto max-w-7xl bg-gray-50 px-4 py-16 pt-32'>
      {/* 기존 공정 */}
      <article ref={ref} className='max-w-6xl'>
        <div className='pb-6 text-left text-2xl font-semibold'>
          <p className='border-b-primary text-primary mb-3 w-fit border-b px-1 pb-1 text-left text-sm font-bold'>
            {/*섬유 염색 공정 비교*/}
            #복잡한 공정 구조와 높은 비용
          </p>
          <h3>기존 섬유 염색 공정</h3>
          <p className='text-gray-600'>다단계 처리 & 폐수 발생</p>
        </div>

        <ul className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {comparison.items[0].steps.map((step, idx) => (
            <div
              key={step.id}
              className='biz_item flex flex-col items-center gap-6 rounded-lg bg-white p-6 shadow-md lg:flex-row'>
              <img
                src={`/img/product/compare/p${idx + 1}.png`}
                alt={step.content}
                className='h-64 w-64 rounded-lg object-cover shadow-sm sm:h-96 sm:w-full md:h-60 md:w-60'
              />
              <div>
                <h4 className='text-lg font-bold'>{step.content}</h4>
                <p className='text-sm text-gray-600 md:text-lg'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </article>

      {/* UTEX 공정 */}
      <article ref={ref} className='max-w-6xl pt-20'>
        <div className='pb-6 text-left text-2xl font-semibold'>
          <p className='border-b-primary text-primary mb-3 w-fit border-b px-1 pb-1 text-left text-sm font-bold'>
            {/*섬유 염색 공정 비교*/}
            #단순한 공정, 폐수 없는 시스템
          </p>
          <h3>UTEX 친환경 염색 시스템</h3>
          <p className='text-primary'>단일 공정 & 폐수 0%</p>
        </div>

        <ul className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {comparison.items[1].steps.map((step) => (
            <div
              key={step.id}
              className='biz_item bg-primary-50 border-primary flex flex-col items-center gap-6 rounded-lg border p-6 shadow-md lg:flex-row'>
              <img
                src='/img/product/compare/p4.png'
                alt={step.content}
                className='h-64 w-64 rounded-lg object-cover shadow-sm sm:h-96 sm:w-full md:h-60 md:w-60'
              />
              <div>
                <h4 className='text-primary text-lg font-bold'>
                  {step.content}
                </h4>
                <p className='text-sm text-gray-700 md:text-lg'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </article>
    </SectionLayout>
  );
});

export default UtexComparison;
