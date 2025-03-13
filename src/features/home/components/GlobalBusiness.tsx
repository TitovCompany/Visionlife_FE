import ThreeDScene from '../../../components/ThreeDScene.tsx';
import clsx from 'clsx';

const GlobalBusinessBtn = ({data}: {data: string[]}) => {
 return (
  <div className='h-full flex flex-col items-center justify-between gap-20'>
   {data.map((item, index) => (
    <p
     key={index}
     className={clsx(
      'w-40 bg-primary border-color text-color rounded-md border px-10 py-2 text-lg'
     )}>
     {item}
    </p>
   ))}
  </div>
 );
};

const GlobalBusiness = () => {
 return (
  <section className='h-full py-20'>
   <h2 className='mb-10 text-5xl font-bold'>Global Business</h2>
   <article className='flex items-center justify-center gap-10'>
    <GlobalBusinessBtn data={['중국', '유럽']} />
    <div className='h-96 w-96'>
     <ThreeDScene />
    </div>
    <GlobalBusinessBtn data={['인도네시아', '방글라데시']} />
   </article>
   <p className='text-3xl'>i’m with you</p>
  </section>
 );
};

export default GlobalBusiness;
