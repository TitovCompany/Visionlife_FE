import overview from '../../../data/businessOverview.json';
import bizInfo from '../../../data/business/biz_info.json';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';
import {useRef} from 'react';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const Overview = () => {
  const sectionRef = useRef(null);
  useScrollAnimation('.biz_item', 'top 80%');

  return (
   <GridLayout className='pb-32'>
    <GridArticle>
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
    <GridArticle colStart={2} colEnd={12}>
     <h3 className='text-xl leading-normal font-semibold md:text-2xl'>
      <span className='text-primary'>비전라이프</span>는 환경 보호와 지속 가능한 생산을 실현하기 위해
      디지털 나염 기술과 친환경 솔루션을 제공합니다.
     </h3>

     <div className='text-md md:text-lg'>
      {overview.description.map((line: string, index: number) => (
       <p
        ref={sectionRef}
        key={index}
        className='biz_item mt-3 leading-relaxed md:mt-4'>
        {line}
       </p>
      ))}
     </div>
     <img
      src='/img/business/p1.jpg'
      alt=''
      className='h-96 w-full object-cover sm:w-full md:h-[500px] lg:w-[50%]'
     />
    </GridArticle>
    {/* 해결하는 문제 */}
    <GridArticle colStart={2} colEnd={12}>
     <h3 className='text-3xl font-bold text-primary mb-4'>비전라이프가 해결하는 문제</h3>
     <p>
      기존 섬유 염색 및 인쇄 공정은 많은 물과 화학약품을 필요로 하며,
      환경 오염을 유발하는 주요 원인 중 하나입니다.
      비전라이프의 무폐수 디지털 나염 기술은 이러한 문제를 해결하여,
      물 사용을 획기적으로 줄이고 배출되는 유해 물질을 최소화합니다.
     </p>
    </GridArticle>
    <GridArticle colStart={2} colEnd={12}>
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

    {/* PROUTEX & N-RECT 시스템 */}
    <GridArticle colStart={2} colEnd={12}>
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
    <GridArticle colStart={2} colEnd={12}>
     <h2 className='pt-16 text-2xl leading-relaxed font-bold md:pt-32 lg:text-4xl'>
      디지털 나염으로
      <br />
      완성하는 <span className='text-primary'>친환경 생산</span>
     </h2>
     {bizInfo.data.map((item, index) => (
      <div
       ref={sectionRef}
       key={index}
       className='biz_item flex items-center gap-5 pt-5 md:pt-10'>
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
  );
};

export default Overview;