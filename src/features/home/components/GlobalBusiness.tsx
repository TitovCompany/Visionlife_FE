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
  <GridArticle colStart={2} colEnd={12} className='py-20 flex flex-col '>
   <div className='flex items-center justify-around gap-10 mb-10'>
    <div className='text-lg text-left'>
     <h2 className='mb-5 text-5xl font-bold text-primary'>
      Global Business
     </h2>
     <p>비전라이프는 글로벌 시장에서 지속 가능한 기술을 바탕으로</p>
     <p>새로운 가치를 창출하고 있습니다.</p>
     {/*<p className='text-3xl mt-10'>i’m with you</p>*/}
    </div>
    <div className='h-[500px] min-w-[600px]'>
     <ThreeDScene />
    </div>
   </div>
    <GlobalBusinessBtn data={['중국', '유럽', '인도네시아', '방글라데시']} />
  </GridArticle>
 );
};

export default GlobalBusiness;