import GridLayout from '../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../layout/Grid/GridArticle.tsx';
import history from '../../data/profile/history.json';
//import clsx from 'clsx';

const History = () => {
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
     <div className="relative mx-auto w-full max-w-full py-10 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-primary before:-translate-x-1/2">
      <ul className='relative'>
       {history.map((item) => {
        return (
          <li
            key={item.id}
            className="relative mb-20 flex w-full justify-between pl-10"
          >
           {/* dot */}
           <div className="absolute left-1/2 top-[30px] z-10 w-6 h-6 -translate-x-1/2 rounded-full border-4 border-primary bg-white"></div>

           {/* 연도 */}
           <div className="max-w-md rounded-xl p-6 text-left mt-1">
            <h2 className="inline-block py-1 text-5xl font-semibold text-primary">
      <span className="flex flex-col items-center">
        {item.year.includes('~') ? (
          <>
           <span>{item.year.split('~')[0]}년</span>
           <span className="text-3xl">~</span>
           <span>{item.year.split('~')[1]}년</span>
          </>
        ) : (
          `${item.year}년`
        )}
      </span>
            </h2>
           </div>

           {/* card */}
           <div className="max-w-md rounded-xl p-6 text-left mt-1">
            <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
            {Array.isArray(item.event) ? (
              <ul className="text-base text-gray-700">
               {item.event.map((e, i) => (
                 <li key={i}>{e}</li>
               ))}
              </ul>
            ) : (
              <p className="text-base text-gray-700">{item.event}</p>
            )}
            <p className="mt-2 text-sm text-gray-500">{item.description}</p>
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