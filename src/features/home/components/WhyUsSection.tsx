import {useRef} from 'react';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const WhyUsSection = () => {
 const articleRef = useRef<HTMLElement | null>(null);
 const titleRef = useRef<HTMLDivElement | null>(null);
 const contentRef = useRef<(HTMLElement | null)[]>([]);
 const features = [
  { image: '/img/logo.webp', title: "간소화한 공정단계", description: "잉크부터 디자이너, A/S까지 한 번에 – 올인원 토탈 솔루션" },
  { image: '/img/logo.webp', title: "물 한 방울 없이, 더 깨끗하게", description: "폐수 ZERO, 탄소 ZERO – 친환경 그 자체인 수성 잉크" },
  { image: '/img/logo.webp', title: "최상의 견뢰도 컨디션", description: "어떤 소재든 선명하게, 견뢰도 최상급 구현" },
 ];

 useGSAP(() => {
  gsap.fromTo(titleRef.current, {
   y: 100,
   opacity: 0,
  }, {
   y: 0,
   opacity: 1,
   scrollTrigger: {
    trigger: titleRef.current,
    start: 'top 80%',
    end: 'top 60%',
    markers: true,
   }
  });

  // LI 요소 하나씩 등장하도록 설정
  contentRef.current.forEach((el, index) => {
   if (el) {
    gsap.fromTo(
     el,
     { opacity: 0, y: 50 },
     {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.3, // 요소마다 순차적 등장
      scrollTrigger: {
       trigger: el,
       start: "top 80%", // 요소가 화면에 들어올 때 시작
       end: "top 60%", // 요소가 지나가면 끝남
       toggleActions: "play none none none",
      },
     }
    );
   }
  });
 }, []);

 return (
  <GridArticle ref={articleRef} colStart={2} colEnd={12} className='text-center h-screen flex flex-col justify-center'>
   {/* Title */}
   <div ref={titleRef} className='text-primary text-left'>
    <h2 className="text-5xl font-bold">Why Choose Us?</h2>
    <p className="mt-4 text-xl text-gray-600">지속 가능성과 품질을 동시에 제공합니다.</p>
   </div>
   {/* Contents */}
   <ul className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
     <li key={index} ref={(el) => {
      if (el) contentRef.current[index] = el;
     }} className="flex flex-col items-center text-center">
      <img src={feature.image} alt="" />
      <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
      <p className="mt-2 text-gray-600">{feature.description}</p>
     </li>
    ))}
   </ul>
  </GridArticle>
 );
};

export default WhyUsSection;