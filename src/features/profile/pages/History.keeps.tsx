import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import history from '../../../data/history.json';

gsap.registerPlugin(ScrollTrigger); // GSAP 플러그인 등록

const HistoryKeeps = () => {
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
    <section ref={sectionRef} className="mx-auto min-h-screen w-full max-w-7xl py-32">
      <h2 className="mb-10 text-center text-3xl font-bold">비젼라이프가 걸어온 길</h2>
      <h3 className="mb-10 text-center text-3xl font-bold">지속 가능한 세상을 만들기 위한 비젼라이프의 노력과 성취를 돌아봅니다.</h3>
      <ul className="flex flex-col space-y-12">
        {history.map((item, idx) => (
          <li key={item.id} className="history_item flex items-center">
            <div
              className={`w-1/4 pr-5 text-right font-semibold text-gray-600 ${idx % 2 === 0 ? 'order-1' : 'order-2'}`}>
              {item.year}
            </div>
            <div
              className={`w-3/4 rounded-lg bg-gray-100 p-5 shadow-lg ${idx % 2 === 0 ? 'order-2' : 'order-1'}`}>
              {' '}
              {item.event}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HistoryKeeps;
