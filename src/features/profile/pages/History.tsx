import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import history from '../../../data/history.json';

gsap.registerPlugin(ScrollTrigger); // GSAP 플러그인 등록

const History = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // history_item 클래스를 가진 요소들을 애니메이션 대상으로 선택
    const sections = gsap.utils.toArray('.history_item') as HTMLElement[];
    sections.forEach((section, idx) => {
      gsap.fromTo(
        section,
        { opacity: 0, x: idx % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // 뷰포트 80%에 들어올 때 실행
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto min-h-screen w-full max-w-3xl py-16 md:py-32 px-4 overflow-x-hidden"
    >
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
            className="history_item flex flex-col md:flex-row items-center md:items-start justify-start gap-2 md:gap-10"
          >
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
