import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import history from "../../../data/history.json";

gsap.registerPlugin(ScrollTrigger); // GSAP 플러그인 등록

const History = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".history_item") as HTMLElement[];
    sections.forEach((section, idx) => {
      gsap.fromTo(
          section,
          { opacity: 0, x: idx % 2 === 0 ? -100 : 100},
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: section,
              start: "top 80%", // 뷰포트 80%에 들어올 때 실행
              toggleActions: "play none none reverse",
            }
          })
    })
  }, []);

  return (
      <section ref={sectionRef} className="w-full min-h-screen max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">기업 연혁</h2>
        <ul className="flex flex-col space-y-12">
          {history.map((item, idx) => (
              <li key={item.id} className="history_item flex items-center">
                <div className={`w-1/4 text-right pr-5 text-gray-600 font-semibold ${idx % 2 === 0 ? "order-1" : "order-2"}`}>
                  {item.year}
                </div>
                <div className={`w-3/4 bg-gray-100 p-5 rounded-lg shadow-lg ${idx % 2 === 0 ? "order-2" : "order-1"}`}>                  {item.event}
                </div>
              </li>
          ))}
        </ul>
      </section>
  );
};

export default History;