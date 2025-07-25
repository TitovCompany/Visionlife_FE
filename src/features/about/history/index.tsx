import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import history from '../../../data/profile/history.json';
import HistoryTimeline from './HistoryTimeline.tsx';
//import clsx from 'clsx';

const History = () => {
 return (
  <GridLayout className='gap-y-0'>
   {/* Hero */}
   <GridArticle className='relative aspect-video min-h-[220px] w-full overflow-hidden md:min-h-[400px]'>
    <video
     className='h-full w-full object-cover'
     src='/video/history.mp4'
     controls={false}
     autoPlay
     loop
     muted
     playsInline
    />
    {/* Header */}
    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/40 pt-20 md:pt-0'>
     <h2 className='mb-2 text-lg font-bold text-white drop-shadow md:mb-6 md:text-5xl'>
      비젼라이프의 여정
     </h2>
     <h3 className='text-center text-xs leading-6 text-white drop-shadow md:text-2xl md:leading-10'>
      더 나은 미래를 위한 혁신과 도전,
      <br />
      비전라이프가 걸어온 길을 함께합니다.
     </h3>
    </div>
   </GridArticle>

   {/* 타임라인 History */}
   <GridArticle colStart={1} colEnd={13}>
    <div className='md:px-48 before:bg-primary relative mx-auto w-full max-w-full py-10 before:absolute before:inset-y-0 before:left-1/2 before:hidden before:w-1 before:-translate-x-1/2 lg:before:block'>
     <ul className='relative'>
      {history.map((item) => (
       <HistoryTimeline
        key={String(item.id)}
        id={String(item.id)}
        year={item.year}
        title={item.title}
        event={item.event}
        description={item.description}
       />
      ))}
     </ul>
    </div>
   </GridArticle>
  </GridLayout>
 );
};

export default History;