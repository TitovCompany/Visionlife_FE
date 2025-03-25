import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import clsx from 'clsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const textContents = [
 "Proutex의 로고는 Vision Life(VL)의 첫 글자를 형상화하여 브랜드의 정체성을 시각적으로 표현합니다. ‘V’와 ‘L’의 조합을 통해 기업의 핵심 가치를 담아내며, 두꺼운 서체와 기울어진 디자인으로 혁신성과 역동성을 강조합니다.",
 "로고의 중심을 가로지르는 곡선 라인은 지속 가능성과 부드러운 흐름을 상징하며, Proutex 제품과 Vision Life 브랜드의 연결성을 시각적으로 표현합니다. 또한, 배경 패턴은 Proutex 제품의 직물 또는 인쇄 기술을 반영한 텍스처로, 브랜드의 핵심 기술력을 강조하는 중요한 요소입니다.",
 "컬러 아이덴티티는 브랜드 철학을 반영하여 골드는 프리미엄과 신뢰성을, 레드와 블루 조합은 에너제틱하면서도 전문적인 느낌을 부여합니다. 이를 통해 Proutex는 차별화된 기술력과 지속 가능한 미래를 위한 혁신을 실현하는 브랜드임을 나타냅니다."
];

gsap.registerPlugin(ScrollTrigger);
const VisualIdentity = () => {
 const containerRef = useRef<HTMLElement | null>(null);
 const titleRef = useRef<HTMLHeadingElement | null>(null);
 const subTitleRef = useRef<HTMLHeadingElement | null>(null);
 const contentRef = useRef<HTMLHeadingElement | null>(null);
 const imgRef = useRef<HTMLImageElement | null>(null);
 const subContentRef = useRef<(HTMLParagraphElement | null)[]>([]);

 // 공통 애니메이션 적용 함수
 const animateWithTimeline = (
  timeline: gsap.core.Timeline,
  elements: (HTMLElement | null)[],
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
 ) => {
  timeline.fromTo(elements.filter(Boolean), fromVars, toVars);
 };

 useGSAP(() => {
  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: containerRef.current,
    start: "top 85%",
    end: "top 30%",
    scrub: 1,
    markers: true, // 디버깅용
   }
  });

  // 일반 요소 (Y축 애니메이션)
  const animateElements = [titleRef.current, contentRef.current, subTitleRef.current];
  animateWithTimeline(
   tl,
   animateElements,
   { y: 200, opacity: 0 },
   { y: 0, opacity: 1, duration: 1.5, stagger: 0.3 }
  );

  // 이미지 (X축 애니메이션)
  animateWithTimeline(
   tl,
   [imgRef.current],
   { x: -200, opacity: 0 },
   { x: 0, opacity: 1, duration: 1.5 }
  );

  // 하위 문장 (Y축 stagger 적용)
  animateWithTimeline(
   tl,
   subContentRef.current,
   { y: 200, opacity: 0 },
   { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 }
  );

 }, []);

 return (
  /* [clip-path:polygon(...)]을 사용하여 원하는 모양을 만든다.
     0_10% → 왼쪽 상단을 아래로 내린다.
     100%_0 → 오른쪽 상단을 직선으로 유지.
     100%_100% → 오른쪽 하단은 그대로.
     0%_100% → 왼쪽 하단도 그대로 (즉, 하단은 직선 유지).*/
  <GridLayout className={clsx('relative min-h-[100vh]', 'text-color bg-primary [clip-path:polygon(0_10%,100%_0,100%_100%,0%_100%)]')}>
   <GridArticle ref={containerRef} colStart={2} className={clsx('mt-32 mb-20 max-w-3xl', 'text-left', 'content-center')}>
    <h2 ref={titleRef} className='text-7xl font-bold'>Visual Identity</h2>
    <p ref={contentRef} className='mt-10 text-xl leading-10'>
     우리의 브랜드 아이덴티티는 지속 가능성과 혁신을 반영합니다.
     우리는 친환경 소재와 디자인을 결합하여 더욱 지속 가능한 미래를 만들어갑니다.
     모든 브랜드 요소는 환경과 조화를 이루며, 사용자와 소통하는 경험을 제공합니다.
    </p>
   </GridArticle>
   {/* Logo */}
   <GridArticle colStart={2} colEnd={13} className={clsx('w-full', 'mb-32', 'flex')}>
    <img ref={imgRef} src="/img/logo.webp" alt="Vision Life Logo" />
    <div className='w-full h-full p-6'>
     <h2 ref={subTitleRef} className="text-4xl font-bold mb-10">Proutex 브랜드 아이덴티티</h2>
     {textContents.map((text, index) => (
      <p ref={(el) => {
       if (el) subContentRef.current[index] = el;
      }} key={index} className={`text-xl leading-relaxed ${index !== 0 ? "mt-6" : ""}`}>{text}</p>
     ))}
    </div>
   </GridArticle>
  </GridLayout>
 );
};

export default VisualIdentity;