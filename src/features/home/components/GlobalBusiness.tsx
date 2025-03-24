import ThreeDScene from '../../../components/ThreeDScene.tsx';
// import clsx from 'clsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

/*const GlobalBusinessBtn = ({data}: {data: string[]}) => {
 return (
  <div className='w-full h-full flex items-center justify-between gap-5'>
   {data.map((item, index) => (
    <p key={index} className={clsx('w-full bg-primary border-color text-color rounded-md border px-12 py-3 text-lg')}>
     {item}
    </p>
   ))}
  </div>
 );
};*/

const GlobalBusiness = () => {
 return (
  <GridArticle colStart={2} colEnd={12} className='min-h-screen flex flex-col justify-center'>
   <div className='items-start text-lg text-left mb-10 text-gray-700 leading-relaxed'>
    <h2 className='mb-10 text-5xl font-bold text-primary'>
     Global Business
    </h2>
    <p>
     비전라이프는 중국 DTP 기계 제조업체와 협력하여 전시장을 운영 중이며,
    </p>
    <p className='mt-2'>
     다양한 원단에 대한 샘플링을 통해 글로벌 시장 진입을 준비하고 있습니다.
    </p>
    <p className='mt-2'>
     N-RECT 기술은 국제 특허 출원 중이며,
     올해 <strong>1,000톤 규모(약 600억 원)</strong>
    </p>
    <p className='mt-2'>
     수출을 목표로 양산 설비를 구축하고 있습니다.
    </p>
    {/*<p className='text-3xl mt-10'>i’m with you</p>*/}
   </div>
   <div className='h-[500px] min-w-[600px]'>
    <ThreeDScene />
   </div>
    {/*<GlobalBusinessBtn data={['중국', '유럽', '인도네시아', '방글라데시']} />*/}
  </GridArticle>
 );
};

export default GlobalBusiness;