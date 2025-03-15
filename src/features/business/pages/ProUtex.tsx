import features from '../../../data/business/utex_features.json';
import ImageCard from '../../../components/ImageCard.tsx';
import comparison from '../../../data/business/utex_comparison.json';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import overview from '../../../data/business/utex_overview.json';

const ProUtex = () => {
 return (
  <GridLayout>
   <GridArticle>
    <video
     src='/video/print.mp4'
     controls={false}
     autoPlay
     loop
     muted
     playsInline
    />
   </GridArticle>
   <GridArticle>
    <img
     src='/img/product/p3.png'
     alt='기기명 Coltex'
     className='h-[300px] w-full object-cover md:h-[530px] lg:w-1/3 lg:rounded-lg'
    />
   </GridArticle>
   <GridArticle>
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
   </GridArticle>

   {/* PROUTEX 개요 */}
   <GridArticle>
    <div className='w-full px-4 pt-12 pb-10 text-left text-2xl font-semibold'>
     <p className='border-b-primary text-primary mx-1 mb-3 w-fit border-b pb-1 text-left text-sm font-bold'>
      #친환경 디지털 프린팅 기기
     </p>
     <h3 className='text-3xl leading-10'>
      비전라이프의 <span className='text-primary'>PROUTEX</span>
      <br />
      친환경 섬유 염색 솔루션
     </h3>
    </div>
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
   </GridArticle>

   {/* 핵심 기술 소개 */}
   <GridArticle>
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
   </GridArticle>

   {/* 콜 투 액션 */}
   <article className='mt-8 flex gap-6'>
    <a href='/n-rect' className='bg-primary rounded-lg px-6 py-3 text-white'>
     PROUTEX 전용 잉크 N-RECT 보기
    </a>
   </article>

   {/* Utex Features */}
   <GridArticle>
    <p className='border-b-primary text-primary mx-1 mb-3 w-fit border-b pb-1 text-left text-sm font-bold'>
     #섬유 프린팅의 새로운 기준
    </p>
    <h3 className='text-3xl leading-10'>
     <span className='text-primary'>PROUTEX</span>의 차별화된
     <br />
     4가지 핵심 기술
    </h3>
   </GridArticle>
   <GridArticle>
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
   </GridArticle>

   {/* 기존 공정 */}
   <GridArticle>
    <div className='pb-6 text-left text-2xl font-semibold'>
     <p className='border-b-primary text-primary mb-3 w-fit border-b px-1 pb-1 text-left text-sm font-bold'>
      #일반 디지털 프린팅의 한계
     </p>
     <h3>기존 디지털 프린팅 공정</h3>
     <p className='text-gray-600'>잉크 소비량 증가 & 색상 선명도 저하</p>
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
        <p className='text-sm text-gray-600 md:text-lg'>{step.description}</p>
       </div>
      </div>
     ))}
    </ul>
   </GridArticle>

   {/* PROUTEX 공정 */}
   <GridArticle>
    <div className='pb-6 text-left text-2xl font-semibold'>
     <p className='border-b-primary text-primary mb-3 w-fit border-b px-1 pb-1 text-left text-sm font-bold'>
      #PROUTEX 친환경 디지털 프린팅
     </p>
     <h3>PROUTEX 디지털 프린팅 공정</h3>
     <p className='text-primary'>고속 출력 & 무폐수 공정</p>
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
        <h4 className='text-primary text-lg font-bold'>{step.content}</h4>
        <p className='text-sm text-gray-700 md:text-lg'>{step.description}</p>
       </div>
      </div>
     ))}
    </ul>
   </GridArticle>
  </GridLayout>
 );
};

export default ProUtex;
