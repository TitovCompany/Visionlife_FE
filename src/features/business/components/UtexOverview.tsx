import overview from '../../../data/business/utex_overview.json';
import {forwardRef} from 'react';

const UtexOverview = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
   <article
    ref={ref}
    className='flex h-full w-full flex-col justify-between gap-14 py-4 lg:flex-row lg:p-4'>
     <img
      src='/img/product/p3.png'
      alt='기기명 Coltex'
      className='h-[300px] w-full object-cover md:h-[530px] lg:w-1/3 lg:rounded-lg'
     />
     <div className='mx-auto flex w-full flex-col justify-start md:w-2/3'>
       <h2 className='w-full max-w-xl pb-4 text-left text-2xl leading-12 font-extrabold md:pb-8 md:text-4xl'>
         비전라이프의 <span className='text-primary'>PROUTEX</span>
         <br />
         친환경 섬유 염색 솔루션
       </h2>
       <div className='mb-6 h-fit w-full text-left text-base md:text-lg lg:max-w-2xl'>
         <p className='biz_item mb-4 leading-8'>
           PROUTEX는 N-RECT 친환경 잉크에 최적화된 디지털 프린팅 기기입니다.
           기존 프린터 대비 더 빠른 속도, 낮은 잉크 소비량, 더 선명한 품질을 제공합니다.
         </p>
         <p className='biz_item mb-8 leading-8'>
           PROUTEX는 **무폐수 공정**을 지원하여 환경 부담을 줄이며,
           일반적인 면, 폴리에스터, 나일론 원단에 최적화된 고품질 출력이 가능합니다.
         </p>
       </div>
       <ul className='w-full max-w-2xl space-y-3'>
         {overview.items.map((item, idx) => (
          <li
           key={item.id}
           className='biz_item flex flex-col items-start gap-3'>
            <p className='text-primary text-2xl font-bold'>
              #Point{String(idx + 1)}.
            </p>
            <p className='pl-5 text-base leading-relaxed text-gray-700 md:text-lg'>
              {item.content}
            </p>
          </li>
         ))}
       </ul>
     </div>
   </article>
  );
});

export default UtexOverview;