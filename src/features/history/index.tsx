import GridLayout from '../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../layout/Grid/GridArticle.tsx';
import history from '../../data/profile/history.json';
//import clsx from 'clsx';

const History = () => {
  return (
   <GridLayout className='gap-y-0'>
      {/* Hero */}
      <GridArticle className="relative aspect-video w-full min-h-[220px] md:min-h-[400px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/video/history.mp4"
          controls={false}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Header */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 pt-20 md:pt-0">
          <h2 className="mb-2 text-lg font-bold text-white drop-shadow md:mb-6 md:text-5xl">
            비젼라이프의 여정
          </h2>
          <h3 className="text-xs leading-6 text-white drop-shadow md:text-2xl md:leading-10 text-center">
            더 나은 미래를 위한 혁신과 도전,<br />
            비전라이프가 걸어온 길을 함께합니다.
          </h3>
        </div>
      </GridArticle>

      {/* 타임라인 History */}
      <GridArticle colStart={1} colEnd={13}>
     <div className="relative mx-auto w-full max-w-full py-10 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-primary before:-translate-x-1/2 before:hidden lg:before:block">
      <ul className='relative'>
            {history.map((item) => {
              const isRange = item.year.includes('~');
              const [startYear, endYear] = isRange ? item.year.split('~') : [item.year, null];

              return (
                <li
                  key={item.id}
                  className="history-timeline-item relative mb-20 flex flex-col md:flex-row w-full justify-between items-start text-left"
                >
                  {/* dot */}
                  <div className="absolute left-1/2 lg:left-1/2 top-[30px] lg:top-[48px] z-10 w-6 h-6 -translate-x-1/2 rounded-full border-4 border-primary bg-white hidden lg:block"></div>

                  {/* 연도 */}
                  <div className="max-w-md  p-6 mt-1 text-left">
                    <h2 className="inline-block py-1 text-3xl md:text-5xl font-semibold text-primary">
                      <span className="flex md:hidden">
                        {isRange ? `${startYear}년 ~ ${endYear}년` : `${item.year}년`}
                      </span>
                      <span className="hidden md:flex flex-col items-center">
                        {isRange ? (
                          <>
                            <span>{startYear}년</span>
                            <span className="text-xl md:text-3xl">~</span>
                            <span>{endYear}년</span>
                          </>
                        ) : (
                          <span>{item.year}년</span>
                        )}
                      </span>
                    </h2>
                  </div>

                  {/* 카드 */}
                  <div className="max-w-md p-6 mt-5 text-left">
                    <h3 className="mb-3 text-lg md:text-2xl font-bold">{item.title}</h3>
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

	