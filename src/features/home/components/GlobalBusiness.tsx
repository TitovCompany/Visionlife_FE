import ThreeDScene from '../../../components/ThreeDScene.tsx';
import clsx from 'clsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const GlobalBusinessBtn = ({data}: {data: string[]}) => {
 return (
  <div className='w-full h-full flex items-center justify-between gap-5'>
   {data.map((item, index) => (
    <p key={index} className={clsx('w-full bg-primary border-color text-color rounded-md border px-12 py-3 text-lg')}>
     {item}
    </p>
   ))}
  </div>
 );
};

const GlobalBusiness = () => {
 return (
  <GridArticle colStart={2} colEnd={12} className='min-h-screen flex flex-col items-center justify-center'>
   <div className='text-lg text-center mb-10'>
    <div className='py-32'>
     <h2 ref={addToRefs} className='text-4xl font-bold text-primary'>
      글로벌 확장을 위한 기술 기반
     </h2>
     <p ref={addToRefs} className='text-lg leading-relaxed text-gray-700 mt-4'>
      비전라이프는 중국 DTP 기계 제조업체와 협력하여 전시장을 운영 중이며,
      다양한 원단에 대한 샘플링을 통해 글로벌 시장 진입을 준비하고 있습니다.
     </p>
     <p ref={addToRefs} className='mt-6 text-lg leading-relaxed text-gray-700'>
      N-RECT 기술은 국제 특허 출원 중이며,
      올해 <strong>1,000톤 규모(약 600억 원)</strong> 수출을 목표로 양산 설비를 구축하고 있습니다.
     </p>
    </div>
    <h2 className='mb-5 text-5xl font-bold text-primary'>
     Global Business
    </h2>
    <p>비전라이프는 글로벌 시장에서 지속 가능한 기술을 바탕으로</p>
    <p>새로운 가치를 창출하고 있습니다.</p>
    {/*<p className='text-3xl mt-10'>i’m with you</p>*/}
   </div>
   <div className='flex items-center justify-around gap-10 mb-10'>
    <div className='h-[500px] min-w-[600px]'>
     <ThreeDScene />
    </div>
   </div>
    <GlobalBusinessBtn data={['중국', '유럽', '인도네시아', '방글라데시']} />
  </GridArticle>
 );
};

export default GlobalBusiness;