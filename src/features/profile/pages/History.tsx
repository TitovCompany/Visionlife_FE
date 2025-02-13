import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import history from '../../../data/history.json';

gsap.registerPlugin(ScrollTrigger); // GSAP 플러그인 등록

const History = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.history_item') as HTMLElement[];
    sections.forEach((section, idx) => {
      gsap.fromTo(
        section,
        {opacity: 0, x: idx % 2 === 0 ? -100 : 100},
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
      className="mx-auto min-h-screen w-full max-w-3xl py-32">
      <div className="mb-20 font-bold">
        <h2 className="mb-10 text-4xl">
          <span className="text-primary">비젼라이프</span>가 걸어온 길
        </h2>
        <h3 className="text-3xl">
          지속 가능한 세상을 만들기 위한
          <br />
          비젼라이프의 노력과 성취를 돌아봅니다.
        </h3>
      </div>
      <ul className="flex flex-col space-y-12">
        {history.map((item) => (
          <li key={item.id} className="flex justify-start gap-10">
            <h4 className="w-1/6 text-right text-2xl font-semibold">
              {item.year.includes('~')
                ? `${item.year.split('~')[0]}년 ~ ${item.year.split('~')[1]}년`
                : `${item.year}년`}
            </h4>
            <p className="w-5/6 text-xl">
              {Array.isArray(item.event) ? (
                <ul className="list-disc space-y-2">
                  {item.event.map((subEvent, index) => (
                    <li key={index}>{subEvent}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.event}</p>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default History;
