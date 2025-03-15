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
  <GridLayout>
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
   {/* History */}
   <GridArticle>
    {history.map((item, index) => (
     <article
      key={item.id}
      className={clsx(
       'px-20 py-10',
       'flex flex-col items-center justify-start',
       index % 2 === 0 && 'bg-primary text-color w-3/4'
      )}>
      {/* History - header */}
      <div className='w-full text-left font-bold'>
       <h2 className='text-xl md:text-2xl'>
        {item.year.includes('~')
         ? `${item.year.split('~')[0]}년 ~ ${item.year.split('~')[1]}년`
         : `${item.year}년`}
       </h2>
       <h3 className='text-lg leading-10 md:text-3xl'>{item.title}</h3>
      </div>
      {/* History - Contents */}
      <div className='mt-5 w-full text-left text-base'>
       <p className='mb-2 md:text-xl'>
        {Array.isArray(item.event) ? (
         <>
          {item.event.map((subEvent, index) => (
           <p key={index} className='list-disc'>
            {subEvent}
           </p>
          ))}
         </>
        ) : (
         <p>{item.event}</p>
        )}
       </p>
       <p>{item.description}</p>
      </div>
     </article>
    ))}
   </GridArticle>
  </GridLayout>
 );
};

export default History;