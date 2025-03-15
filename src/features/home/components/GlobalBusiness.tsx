import ThreeDScene from '../../../components/ThreeDScene.tsx';
import clsx from 'clsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const GlobalBusinessBtn = ({data}: {data: string[]}) => {
 return (
  <div className='h-full flex flex-col items-center justify-between gap-20'>
   {data.map((item, index) => (
    <p
     key={index}
     className={clsx(
      'bg-primary border-color text-color rounded-md border px-12 py-3 text-lg'
     )}>
     {item}
    </p>
   ))}
  </div>
 );
};

const GlobalBusiness = () => {
 return (
  <GridArticle colStart={2} colEnd={12} className='py-20'>
   <h2 className='mb-10 text-5xl font-bold'>Global Business</h2>
   <div className='flex items-center justify-center gap-10'>
    <GlobalBusinessBtn data={['중국', '유럽']} />
    <div className='h-96 w-96'>
     <ThreeDScene />
    </div>
    <GlobalBusinessBtn data={['인도네시아', '방글라데시']} />
   </div>
   <p className='text-3xl'>i’m with you</p>
  </GridArticle>
 );
};

export default GlobalBusiness;
