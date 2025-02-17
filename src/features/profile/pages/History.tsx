import { useRef } from 'react';
import history from '../../../data/history.json';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const History = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(".history_item", "top 80%");
  return (
    <section ref={sectionRef} className="mx-auto min-h-screen w-full max-w-3xl py-16 md:py-32 px-4 overflow-x-hidden">
      <div className="mb-10 md:mb-20 font-bold ">
        <h2 className="mb-4 md:mb-10 text-2xl md:text-4xl">
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
            className="history_item flex flex-col md:flex-row items-center md:items-start justify-start gap-2 md:gap-10">
            <h4 className="w-full md:w-1/6 text-left md:text-right text-xl md:text-2xl font-semibold">
              {item.year.includes('~')
                ? `${item.year.split('~')[0]}년 ~ ${item.year.split('~')[1]}년`
                : `${item.year}년`}
            </h4>
            <div className="w-full md:w-5/6 text-left md:text-left text-base md:text-xl">
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
