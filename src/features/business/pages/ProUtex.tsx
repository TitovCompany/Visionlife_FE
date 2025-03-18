import features from '../../../data/business/utex_features.json';
import ImageCard from '../../../components/ImageCard.tsx';
import comparison from '../../../data/business/utex_comparison.json';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import overview from '../../../data/business/utex_overview.json';
import bizInfo from '../../../data/business/biz_info.json';
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const ProUtex = () => {
 const sectionRef = useRef(null);
 useScrollAnimation('.biz_item', 'top 80%');

 return (
  <>
   {/* Hero */}
   <GridLayout>
    <GridArticle className='relative'>
     <video
      src='/video/print.mp4'
      controls={false}
      className='min-h-[calc(100vh-67.98px)] object-cover'
      autoPlay
      loop
      muted
      playsInline
     />
     <h2 className='absolute top-1/2 left-1/2 w-full max-w-xl -translate-1/2 pb-4 text-center text-2xl leading-12 font-extrabold text-white md:pb-8 md:text-4xl'>
      비전라이프의 PROUTEX
      <br />
      친환경 섬유 염색 솔루션
     </h2>
    </GridArticle>
   </GridLayout>
   {/* PROUTEX Intro */}
   <GridLayout rows={4} className='h-screen'>
    <GridArticle rowStart={2} colStart={2} colEnd={6} className='place-content-center content-center'>
     <img src='/img/product/p3.png' alt='기기명 Coltex' className='h-[300px] w-full object-cover md:h-[530px] lg:rounded-lg ' />
    </GridArticle>
    <GridArticle rowSpan={2} colStart={7} colEnd={11} className='text-lg content-center'>
     <p className='biz_item mb-4 leading-8 '>
      PROUTEX는 N-RECT 친환경 잉크에 최적화된 디지털 프린팅 기기입니다. 기존
      프린터 대비 더 빠른 속도, 낮은 잉크 소비량, 더 선명한 품질을 제공합니다.
     </p>
     <p className='biz_item mb-8 leading-8'>
      PROUTEX는 무폐수 공정을 지원하여 환경 부담을 줄이며, 일반적인 면,
      폴리에스터, 나일론 원단에 최적화된 고품질 출력이 가능합니다.
     </p>
    </GridArticle>
    <GridArticle rowStart={3} colStart={7} colEnd={10}>
     <ul className='w-full max-w-2xl space-y-3 flex'>
      {overview.items.map((item, idx) => (
       <li key={item.id} className='bg-primary text-color biz_item flex-col items-start gap-3 text-lg px-8 py-10 h-96 flex justify-end'>
        <p className=' text-2xl font-bold'># Point {String(idx + 1)}.</p>
        <p className='text-base leading-relaxed hidden'>{item.content}</p>
       </li>
      ))}
     </ul>
    </GridArticle>
   </GridLayout>
   {/* 섬유 염색 솔루션 (Proutex 장점) */}
   <GridLayout className='py-32 gap-y-0'>
    <GridArticle colStart={1} colEnd={6} className='flex'>
     {features.items.map((item, index) => (
      <ImageCard
       key={item.id}
       as='div'
       title={item.title}
       animation={true}
       src={`/img/product/features/p${index + 1}.png`}
       alt={item.title}
       description={item.content}
       wrapperClass='biz_item group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500 max-h-96 max-w-96'
       descriptionClass='mt-2 whitespace-pre-line leading-relaxed text-sm sm:text-base'
      />
     ))}
    </GridArticle>
    <GridArticle colStart={6} colEnd={11}>
     <div className='w-full pt-12 pb-10 text-left text-2xl font-semibold'>
      <p className='border-b-primary text-primary mx-1 mb-3 w-fit border-b pb-1 text-left text-sm font-bold'>#친환경 디지털 프린팅 기기</p>
      <h3 className='text-3xl leading-10'>
       비전라이프의 <span className='text-primary'>PROUTEX</span><br />
       친환경 섬유 염색 솔루션
      </h3>
     </div>
     <div className='text-lg leading-8'>
      <p className='mb-6'>
       PROUTEX는 <strong>N-RECT 친환경 잉크</strong>를 사용하여, 무폐수 공정과
       뛰어난 품질의 디지털 나염을 구현하는 프린팅 기기입니다. 기존 대비 더 빠른
       속도, 낮은 잉크 소비량, 높은 품질을 제공합니다.
      </p>
      <p className='mb-6'>
       기존 디지털 프린팅 공정이 <strong>전처리/후처리 과정</strong>이 필요한
       반면, PROUTEX는 출력과 동시에 염색이 완료되므로,
       <strong>생산 속도가 빠르고 환경 오염이 발생하지 않습니다.</strong>
      </p>
     </div>
    </GridArticle>
    <GridArticle colStart={2} colEnd={6}>
     <div className='border-primary rounded-lg border p-6 shadow-lg'>
      <h4 className='text-primary text-xl font-bold'># 전처리 無</h4>
      <p className='mt-3 text-gray-700'>
       기존 디지털 프린팅 공정에서는 전처리(코팅)가 필수지만, PROUTEX는 별도의
       전처리 없이 원단에 직접 염색이 가능합니다.
      </p>
     </div>
     <div className='border-primary rounded-lg border p-6 shadow-lg'>
      <h4 className='text-primary text-xl font-bold'># 후처리 無</h4>
      <p className='mt-3 text-gray-700'>
       일반적인 프린팅 방식은 증열, 수세 과정이 필요하여 폐수가 발생하지만,
       PROUTEX는 출력과 동시에 색상이 고정되어, 후처리 공정이 필요 없습니다.
      </p>
     </div>
     {/* 콜 투 액션 */}
     <article className='mt-8 flex gap-6'>
      <a href='/n-rect' className='bg-primary rounded-lg px-6 py-3 text-white'>
       PROUTEX 전용 잉크 N-RECT 보기
      </a>
     </article>
    </GridArticle>
    <GridArticle colStart={7} colEnd={12}>
     {bizInfo.data.map((item, index) => (
      <div ref={sectionRef} key={index} className='biz_item flex items-center gap-5 pt-5 md:pt-10'>
       <p className='text-primary pl-2 text-2xl font-bold md:pl-6 md:text-3xl'>
        {String(index + 1)}.
       </p>
       <p className='text-md pt-5 font-semibold md:pt-0 lg:text-xl lg:whitespace-pre-line'>
        {item}
       </p>
      </div>
     ))}
    </GridArticle>

   </GridLayout>
   {/* 기존 공정 & PROUTEX 공정 */}
   <GridLayout rows={2} className='py-32'>
    <GridArticle colStart={7} colEnd={12}>
     {/* Header */}
     <div className='pb-6 text-right text-3xl text-primary font-bold'>
      <h3 className='mb-3'>
       # PROUTEX 친환경 디지털 프린팅
      </h3>
      <h3 className='mb-3'>고속 출력 & 무폐수 공정</h3>
      <h3 className='mb-3'>PROUTEX 디지털 프린팅 공정</h3>
     </div>
     <div className='biz_item bg-primary-50 border-primary flex flex-col items-center gap-6 rounded-lg border p-6 shadow-md'>
      <img src='/img/product/compare/p4.png' alt='출력과 동시에 염색 완료' className='rounded-lg object-cover w-full h-full'/>
      <div>
       <h4 className='text-primary text-lg font-bold'>출력과 동시에 염색 완료</h4>
       <p className='text-sm text-gray-700 md:text-lg'>별도의 전처리나 후처리 없이 원단에 직접 염색이 이루어지므로 생산 속도가 빠르고, 환경 오염이 발생하지 않습니다.</p>
      </div>
     </div>
    </GridArticle>
    <GridArticle colStart={2} colEnd={6}>
     <div className='pb-6 text-left text-2xl font-semibold'>
      <p className='border-b-primary text-primary mb-3 w-fit border-b px-1 pb-1 text-left text-sm font-bold'>
       #일반 디지털 프린팅의 한계
      </p>
      <h3>기존 디지털 프린팅 공정</h3>
      <p className='text-gray-600'>잉크 소비량 증가 & 색상 선명도 저하</p>
     </div>
     <div className='flex'>
      {comparison.items[0].steps.map((step, idx) => (
       <div key={step.id} className='flex flex-col items-center gap-6 rounded-lg bg-white shadow-md'>
        <img src={`/img/product/compare/p${idx + 1}.png`} alt={step.content} className='w-full h-full object-cover rounded-lg' />
        <div>
         <h4 className='text-lg font-bold'>{step.content}</h4>
         <p className='text-sm text-gray-600 md:text-lg'>{step.description}</p>
        </div>
       </div>
      ))}
     </div>
    </GridArticle>
   </GridLayout>
  </>
 );
};

export default ProUtex;