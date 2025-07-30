import {memo, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import clsx from 'clsx';

interface SectionHeaderProps {
 id?: string;
 title: string;
 subTitle?: string | string[];
 align?: 'left' | 'center' | 'right';
 titleClass?: string;
 subTitleClass?: string;
}

const TEXT_ALIGN = {
 left: 'text-left',
 center: 'text-center',
 right: 'text-right',
}

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);
const SectionHeader = ({
 title,
 subTitle,
 id,
 align = 'left',
 titleClass = '',
 subTitleClass = '',
}: SectionHeaderProps) => {
 const subTitleDesign = 'text-xl leading-relaxed text-gray-600';
 // 전체 컨테이너를 참조할 ref (ScrollTrigger 기준 대상)
 const containerRef = useRef<HTMLDivElement | null>(null);
 // 제목 요소 ref
 const titleRef = useRef<HTMLHeadingElement | null>(null);
 // 서브타이틀 각각의 ref를 저장할 배열
 const subtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);

 // mount 시 단 한 번 실행
 useGSAP(() => {
  // title이 존재할 때만 실행
  if (!titleRef.current) return;

  // timeline 생성 + ScrollTrigger 연결
  const tl = gsap.timeline({
   scrollTrigger: {
    // 섹션이 화면에 들어올 때 감지할 요소
    trigger: containerRef.current,
    // 섹션의 top이 뷰포트 80% 지점에 닿으면 시작
    start: 'top 60%',
    end: 'top 40%',
    // 위아래 방향 모두 진입 시 play
    // 스크롤을 올릴경우 반대로 애니메이션 실행
    toggleActions: 'play none reverse none',
    // markers: true, // 디버그 마커 활성화
   },
  });

  // title → subtitle 순서대로 등장
  tl.fromTo(
   titleRef.current,
   {opacity: 0, y: 80},
   {opacity: 1, y: 0, duration: 1}
  );

  // 서브타이틀 순차 등장 (subtitleRefs 배열에 있는 각각에 대해)
  subtitleRefs.current.forEach((el, i) => {
   if (el) {
    tl.fromTo(el,
     {opacity: 0, y: 40},
     {opacity: 1, y: 0, duration: 0.6, delay: i * 0.1},
     // 타이틀 애니메이션과 일부 겹치도록
     '-=0.4'
    );
   }
  });
 }, []);

 return (
  <div
   ref={containerRef}
   className={clsx('text-primary w-full', TEXT_ALIGN[align])}>
   <h2 ref={titleRef} id={id} className={`mb-6 text-5xl font-bold md:text-7xl ${titleClass}`}>
    {title}
   </h2>
   {Array.isArray(subTitle)
    ? subTitle.map((text, idx) => (
       <p
        key={idx}
        className={`${subTitleDesign} ${subTitleClass}`}
        ref={(el) => {
         if (el) {
          subtitleRefs.current[idx] = el;
         }
        }}>
        {text}
       </p>
      ))
    : subTitle && (
       <p
        className={`${subTitleDesign} ${subTitleClass}`}
        ref={(el) => {
         if (el) {
          subtitleRefs.current[0] = el;
         }
        }}>
        {subTitle}
       </p>
      )}
  </div>
 );
};

export default memo(SectionHeader);