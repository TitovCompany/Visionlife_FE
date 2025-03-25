// import {useRef} from 'react';
import history from '../../../data/profile/history.json';
// import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';
import clsx from 'clsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const History = () => {
 // const sectionRef = useRef(null);
 // useScrollAnimation('.history_item', 'top 80%');
 return (
  <GridLayout className='gap-y-0'>
   {/* Hero */}
   <GridArticle>
    <video
     width='100%'
     height='100%'
     src='/video/history.mp4'
     controls={false}
     autoPlay
     loop
     muted
     playsInline
    />
    {/* Header */}
    <div className='absolute top-1/2 left-1/2 mb-10 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white md:mb-20'>
     <h2 className='mb-4 text-2xl md:mb-10 md:text-6xl'>비젼라이프의 여정</h2>
     <h3 className='text-lg leading-10 md:text-3xl'>
      더 나은 미래를 위한 혁신과 도전,
      <br />
      비전라이프가 걸어온 길을 함께합니다.
     </h3>
    </div>
   </GridArticle>

   {/* 타임라인 History */}
   <GridArticle colStart={1} colEnd={13}>
    <div className="relative mx-auto w-full max-w-5xl py-10 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-primary before:-translate-x-1/2">
     <ul className='relative'>
      {history.map((item, idx) => {
       const isLeft = idx % 2 === 0;
       return (
        <li
         key={item.id}
         className={clsx(
          'relative mb-20 flex w-full',
          isLeft ? 'justify-start pr-10' : 'justify-end pl-10'
         )}
        >
         {/* dot */}
         <div className='absolute left-1/2 top-[30px] z-10 w-6 h-6 -translate-x-1/2 rounded-full border-4 border-primary bg-white'></div>
         {/* card */}
         <div
          className={clsx(
           'max-w-md rounded-xl  p-6 ',
           isLeft ? 'mr-auto text-right' : 'ml-auto text-left'
          )}
         >
          <h2 className='mb-3 inline-block bg-primary px-4 py-1 text-lg font-semibold text-color'>
           {item.year.includes('~')
            ? `${item.year.split('~')[0]}년 ~ ${item.year.split('~')[1]}년`
            : `${item.year}년`}
          </h2>
          <h3 className='mb-3 text-2xl font-bold'>{item.title}</h3>
          {Array.isArray(item.event) ? (
           <ul className='list-disc pl-5 text-base text-gray-700'>
            {item.event.map((e, i) => (
             <li key={i}>{e}</li>
            ))}
           </ul>
          ) : (
           <p className='text-base text-gray-700'>{item.event}</p>
          )}
          <p className='mt-2 text-sm text-gray-500'>{item.description}</p>
         </div>
        </li>
       );
      })}
     </ul>
    </div>
   </GridArticle>
  </GridLayout>
 );
};

export default History;
