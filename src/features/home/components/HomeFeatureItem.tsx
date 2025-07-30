import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx'; // clsx는 그대로 사용합니다.

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
 const featureItemRef = useRef<HTMLLIElement>(null);
 const imgRef = useRef<HTMLImageElement>(null);
 const titleRef = useRef<HTMLHeadingElement>(null);
 const subTitleRef = useRef<HTMLHeadingElement>(null);
 const descRef = useRef<HTMLParagraphElement>(null);

 useGSAP(() => {
  if (!featureItemRef.current || !imgRef.current || !titleRef.current || !descRef.current) return;

  // --- 이미지 애니메이션 ---
  gsap.to(imgRef.current, {
   width: '63%',
   scrollTrigger: {
    trigger: featureItemRef.current,
    start: 'top 80%',
    end: 'top 50%',
    scrub: true,
    toggleActions: 'play none reverse none',
    markers: true,
   },
  });

  // --- 텍스트 애니메이션 (타임라인 사용) ---
  const textTl = gsap.timeline({
   scrollTrigger: {
    trigger: featureItemRef.current,
    start: 'top 80%',
    end: 'top 50%',
    toggleActions: 'play none reverse none',
    markers: true,
   },
  });

  textTl.fromTo(titleRef.current,
   { opacity: 0, y: 50 },
   { opacity: 1, y: 0, duration: 0.8 }
  );
  if (subTitleRef.current) {
   textTl.fromTo(subTitleRef.current,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7 },
    "<0.1"
   );
  }
  textTl.fromTo(descRef.current,
   { opacity: 0, y: 20 },
   { opacity: 1, y: 0, duration: 0.6 },
   "<0.1"
  );

 }, [index]);

 return (
  <li
   ref={featureItemRef}
   className={clsx(
    'mt-32 flex items-center text-center gap-10',
    'relative overflow-hidden',
    index === 1 && "flex-row-reverse"
   )}
  >
   <img
    ref={imgRef}
    src={image}
    alt={title + ' 이미지'}
    className='h-32 object-cover md:h-[180px] lg:h-[90%] border-2 border-primary rounded-2xl'
    style={{ width: '40%' }}
   />
   <div
    className={clsx(
     'absolute inset-0 flex flex-col justify-center items-center text-white p-4', // 이미지 전체를 덮고 가운데 정렬
     'text-left z-10', // 텍스트가 이미지 위에 오도록 z-index 설정
     'lg:items-start lg:max-w-2xl',
     index === 1 ? "mr-auto" : "lg:ml-auto"
    )}
   >
    <h3
     ref={titleRef}
     className='text-lg font-semibold md:text-2xl lg:text-5xl text-primary'
    >
     {title}
    </h3>
    <h4
     ref={subTitleRef}
     className='text-2xl mt-3 text-primary'
    >
     {subTitle}
    </h4>
    <p
     ref={descRef}
     className='mt-16 text-sm text-gray-600 md:text-base lg:text-xl leading-8'
    >
     {/* lg:max-w-md lg:ml-auto*/}
     {description}
    </p>
   </div>
  </li>
 );
};

export default HomeFeatureItem;