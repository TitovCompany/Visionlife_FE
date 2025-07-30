import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';

// ScrollTrigger 플러그인 등록 (컴포넌트 파일에도 명시)
gsap.registerPlugin(ScrollTrigger);

interface FeatureItemProps {
 index: number;
 image: string;
 title: string;
 subTitle: string;
 description: string;
}

const HomeFeatureItem = ({
 index,
 image,
 title,
 subTitle,
 description,
}: FeatureItemProps) => {
 // li 전체를 트리거로 사용
 const featureItemRef = useRef<HTMLLIElement>(null);
 const imgRef = useRef<HTMLImageElement>(null);
 const titleRef = useRef<HTMLHeadingElement>(null);
 const subTitleRef = useRef<HTMLHeadingElement>(null);
 const descRef = useRef<HTMLParagraphElement>(null);

 useGSAP(() => {
  // 요소가 모두 존재하는지 확인
  if (!featureItemRef.current || !imgRef.current || !titleRef.current || !descRef.current) return;

  // --- 이미지 애니메이션 (개별 처리) ---
  gsap.to(imgRef.current, {
   width: '300%', // 스크롤 시 늘어날 너비
   opacity: 1,     // 처음부터 보이도록 opacity 1 유지
   scrollTrigger: {
    trigger: featureItemRef.current, // li 요소를 트리거로 사용
    start: 'top 80%', // li가 뷰포트 80% 지점에 도달했을 때 시작
    end: 'top 50%',   // li가 뷰포트 50% 지점에 도달했을 때 끝
    scrub: true,      // 스크롤과 동기화하여 부드럽게 재생
    toggleActions: 'play none reverse none', // 스크롤 내리면 재생, 올리면 역재생
    markers: true, // 디버깅용 (개발 완료 후 제거)
   },
  });

  // --- 텍스트 애니메이션 (타임라인 사용) ---
  const textTl = gsap.timeline({
   scrollTrigger: {
    trigger: featureItemRef.current, // li 요소를 트리거로 사용
    start: 'top 80%', // li가 뷰포트 80% 지점에 도달했을 때 시작
    end: 'top 50%',   // li가 뷰포트 50% 지점에 도달했을 때 끝
    toggleActions: 'play none reverse none', // 스크롤 내리면 재생, 올리면 역재생
    markers: true, // 디버깅용 (개발 완료 후 제거)
   },
  });

  // 제목 애니메이션
  textTl.fromTo(titleRef.current,
   { opacity: 0, y: 50 },
   { opacity: 1, y: 0, duration: 0.8 }
  );

  // 서브타이틀 애니메이션
  if (subTitleRef.current) {
   textTl.fromTo(subTitleRef.current,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7 },
    "<0.1" // 이전 애니메이션(제목)이 시작한 후 0.1초 뒤 시작
   );
  }

  // 설명 애니메이션
  textTl.fromTo(descRef.current,
   { opacity: 0, y: 20 },
   { opacity: 1, y: 0, duration: 0.6 },
   "<0.1" // 이전 애니메이션(서브타이틀)이 시작한 후 0.1초 뒤 시작
  );

 }, [index]); // index는 의존성 배열에 그대로 둠

 return (
  <li
   ref={featureItemRef}
   // 이미지는 처음부터 보여야 하므로, 초기 opacity:0 스타일은 제거
   className={clsx(
    'mt-56 flex items-center text-center gap-10',
    index === 1 && "flex-row-reverse"
   )}
  >
   <img
    ref={imgRef}
    src={image}
    alt={title + ' 이미지'}
    // 이미지의 초기 너비는 CSS로 설정하거나 GSAP fromTo의 from 값으로 설정
    // 예를 들어, 초기 너비가 '40%'이면서 스크롤 시 '300%'로 늘어나게 할 수 있음
    // here, initial width in CSS can be for example `w-40%` or use `fromTo` for width
    className='h-32 w-32 object-contain md:h-[180px] md:w-[180px] lg:h-[300px] lg:w-[300px]'
    style={{ width: '40%' }} // 초기 너비를 명시적으로 설정
   />
   <div className='text-left'>
    <h3
     ref={titleRef}
     className='text-lg font-semibold md:text-2xl lg:text-4xl'>
     {title}
    </h3>
    <h4
     ref={subTitleRef}
     className='text-xl mt-3'>
     {subTitle}
    </h4>
    <p
     ref={descRef}
     className='mt-5 text-sm text-gray-600 md:text-base lg:text-lg'>
     {description}
    </p>
   </div>
  </li>
 );
};

export default HomeFeatureItem;