import overview from '../../../data/businessOverview.json';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';
import {useRef} from 'react';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import clsx from 'clsx';

const Overview = () => {
  const sectionRef = useRef(null);
  useScrollAnimation('.biz_item', 'top 80%');

  return (
   <>
    {/* Hero */}
    <GridLayout cols={1} gap={0}>
     <GridArticle colSpan={1} rowSpan={1}>
      <video
       src='/video/eco.mp4'
       controls={false}
       className='object-cover min-h-[calc(100vh-67.98px)]'
       autoPlay
       loop
       muted
       playsInline/>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/10 backdrop-blur-xs p-6 rounded-lg'>
       <h2 className='md:text-4x pb-5 text-3xl font-extrabold md:pb-10 lg:text-5xl'>
        {overview.header}
       </h2>
       <h3 className='text-xl leading-normal font-semibold md:text-2xl'>
        비전라이프의 친환경 에코 잉크와
        <br />
        무폐수 디지털 나염 시스템
       </h3>
      </div>
     </GridArticle>
    </GridLayout>
    {/* Vision life Overview */}
    {/*<GridLayout className='py-32'>
     <GridArticle colStart={2} colEnd={7} className='pt-32 flex '>
      <div className='text-md md:text-lg'>
       <h3 className='text-xl leading-normal font-semibold md:text-2xl'>
        <span className='text-primary'>비전라이프</span>는 환경 보호와 지속 가능한 생산을 실현하기 위해
        디지털 나염 기술과 친환경 솔루션을 제공합니다.
       </h3>
       {overview.description.map((line: string, index: number) => (
        <p
         ref={sectionRef}
         key={index}
         className='biz_item mt-3 leading-relaxed md:mt-4'>
         {line}
        </p>
       ))}
      </div>
     </GridArticle>
     <img src='/img/business/p1.jpg' alt='' className={clsx('h-96 w-full object-cover md:h-[500px]', 'col-start-8 col-end-11')}/>
    </GridLayout>*/}
    <GridLayout className='py-32'>
     <GridArticle colStart={2} colEnd={7} className='pt-16'>
      <h3 className='text-3xl leading-normal font-semibold'>
       <span className='text-primary'>비전라이프</span>는
       환경 보호와 지속 가능한 생산을 실현하기 위해
       디지털 나염 기술과 친환경 솔루션을 제공합니다.
      </h3>
      {overview.description.map((line: string, index: number) => (
       <p
        ref={sectionRef}
        key={index}
        className='biz_item mt-3 leading-relaxed md:mt-10 text-lg'>
        {line}
       </p>
      ))}
     </GridArticle>
     <img src='/img/business/p1.jpg' alt='' className={clsx('h-96 w-full object-cover md:h-[700px]', 'col-start-8 col-end-13')}/>
    </GridLayout>
    {/* 해결하는 문제 */}
    <GridLayout className='py-32 h-96'>
     <img src="/img/business/p1.webp" alt="비전라이프가 해결하는 문제" className={clsx('col-start-2 col-end-6 h-[600px] -translate-y-60')}/>
     <GridArticle colStart={7} colEnd={12}>
      <h3 className='text-3xl font-bold text-primary mb-4'>
       비전라이프가 해결하는 문제
      </h3>
      <p className='text-xl text-primary leading-8'>
       기존 섬유 염색 및 인쇄 공정은 많은 물과 화학약품을 필요로 하며,
       환경 오염을 유발하는 주요 원인 중 하나입니다.
       비전라이프의 무폐수 디지털 나염 기술은 이러한 문제를 해결하여,
       물 사용을 획기적으로 줄이고 배출되는 유해 물질을 최소화합니다.
      </p>
     </GridArticle>
    </GridLayout>
    {/* 기술 차별점 및 효과 */}
    <GridLayout className='pt-32 text-xl leading-8 h-[500px]'>
     <GridArticle colStart={2} colEnd={10}>
      <h2 className='mt-10 text-2xl font-bold md:text-3xl lg:text-4xl text-primary'>
       기술 차별점 및 효과
      </h2>
      <p className='mt-4'>
       일반적인 섬유 염색 방식은 많은 물과 화학약품을 필요로 하지만,
       비전라이프의 <strong>무폐수 디지털 나염 기술</strong>은 물 사용을 획기적으로 줄이고,
       공정 중 배출되는 유해 물질을 최소화하여 환경 친화적인 생산을 가능하게 합니다.
      </p>
      <p className='mt-4'>
       또한, 비전라이프의 기술을 적용한 기업들은 생산 공정에서
       <strong className="text-primary">80% 이상의 물 절감 효과</strong>를 보고 있으며,
       기존 대비 <strong className="text-primary">탄소 배출량을 50% 이상 저감</strong>하는 데 성공하였습니다.
      </p>
     </GridArticle>
     <img src="/img/business/p2.webp" alt="비전라이프가 해결하는 문제" className={clsx('col-start-7 col-end-12 h-[700px] -translate-y-32')}/>
    </GridLayout>
    {/* PROUTEX & N-RECT 시스템 */}
    <GridLayout className='w-full pb-32 text-xl leading-8 align-middle'>
     <GridArticle colStart={2} colEnd={7} className=''>
      <h3 className='text-3xl font-bold text-primary mb-4'>PROUTEX & N-RECT 시스템</h3>
      <p className='mb-4'>
       비전라이프는 친환경 인쇄 솔루션을 제공하기 위해
       N-RECT (친환경 잉크)와 PROUTEX (디지털 프린트기기)를 개발하였습니다.
       두 가지 기술이 결합되어 무폐수 디지털 나염을 가능하게 하며,
       기존 대비 환경 부담을 줄이면서도 높은 인쇄 품질과 생산 효율성을 제공합니다.
      </p>
      <div className="flex gap-6 mt-6">
       <a href="/n-rect" className="px-6 py-3 bg-primary text-white rounded-lg">
        N-RECT 자세히 보기
       </a>
       <a href="/proutex" className="px-6 py-3 bg-secondary text-white rounded-lg">
        PROUTEX 자세히 보기
       </a>
      </div>
     </GridArticle>
    </GridLayout>
   </>
  );
};

export default Overview;