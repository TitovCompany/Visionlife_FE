import {useRef} from 'react';
import history from '../../../data/profile/history.json';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const History = () => {
  const sectionRef = useRef(null);
  useScrollAnimation('.history_item', 'top 80%');
  return (
    <section
      ref={sectionRef}
      className="mx-auto min-h-screen w-full max-w-3xl overflow-x-hidden px-4 py-16 md:py-32">
      <div className="mb-10 font-bold md:mb-20">
        <h2 className="mb-4 text-2xl md:mb-10 md:text-4xl">
          <span className="text-primary">비젼라이프</span>가 걸어온 길
        </h2>
        <h3 className="text-lg md:text-3xl">
          지속 가능한 세상을 만들기 위한
          <br />
          비젼라이프의 노력과 성취를 돌아봅니다.
        </h3>
      </div>
      <ul className="flex flex-col space-y-8 md:space-y-12">
        {history.map((item) => (
          <li
            key={item.id}
            className="history_item flex flex-col items-center justify-start gap-2 md:flex-row md:items-start md:gap-10">
            <h4 className="w-full text-left text-xl font-semibold md:w-1/6 md:text-right md:text-2xl">
              {item.year.includes('~')
                ? `${item.year.split('~')[0]}년 ~ ${item.year.split('~')[1]}년`
                : `${item.year}년`}
            </h4>
            <div className="w-full text-left text-base md:w-5/6 md:text-left md:text-xl">
              {Array.isArray(item.event) ? (
                <>
                  {item.event.map((subEvent, index) => (
                    <p key={index} className="list-disc">
                      {subEvent}
                    </p>
                  ))}
                </>
              ) : (
                <p>{item.event}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default History;
