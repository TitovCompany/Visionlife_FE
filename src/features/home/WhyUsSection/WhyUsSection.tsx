import {useRef} from 'react';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import { CheckCircle, Leaf, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const WhyUsSection = () => {
 const articleRef = useRef<HTMLElement | null>(null);
 const titleRef = useRef<HTMLDivElement | null>(null);
 const contentRef = useRef<(HTMLElement | null)[]>([]);
 const features = [
  { icon: Leaf, title: "친환경", description: "99% 무폐수 생산 공정" },
  { icon: ShieldCheck, title: "고품질", description: "최신 기술 적용" },
  { icon: CheckCircle, title: "B2B 맞춤 지원", description: "기업 맞춤형 솔루션 제공" },
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
  <GridArticle ref={articleRef} colStart={2} colEnd={11} className='py-32 text-center'>
   {/* Title */}
   <div ref={titleRef} className='text-primary'>
    <h2 className="text-5xl font-bold">Why Choose Us?</h2>
    <p className="mt-4 text-xl text-gray-600">지속 가능성과 품질을 동시에 제공합니다.</p>
   </div>
   {/* Contents */}
   <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((feature, index) => (
     <li key={index} ref={(el) => {
      if (el) contentRef.current[index] = el;
     }} className="flex flex-col items-center text-center">
      <feature.icon className="w-16 h-16 text-primary" />
      <h3 className="mt-4 text-2xl font-semibold">{feature.title}</h3>
      <p className="mt-2 text-gray-600">{feature.description}</p>
     </li>
    ))}
   </ul>
  </GridArticle>
 );
};

export default WhyUsSection;