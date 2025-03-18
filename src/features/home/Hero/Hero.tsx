import {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import ProgressBar from '../../../components/ProgressBar.tsx';
import HeroNavbar from './HeroNavbar.tsx';
import Slider from '../components/Slider.tsx';

const carouselItems = [
 {title: 'Title 01', src: '/img/home/p1.webp'},
 {title: 'Title 02', src: '/img/home/p2.webp'},
 {title: 'Title 03', src: '/img/home/p1.webp'},
];

const Hero = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const titleRef = useRef(null);
 const contentRef = useRef<(HTMLElement | null)[]>([]);
 const imageRef = useRef(null);
 const sliderRef = useRef<HTMLElement[] | []>([]);
 const slideTimeRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === carouselItems.length ? 0 : prevIndex + 1
   );
  }, 11115000);

  return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
 }, []);

 // 애니메이션 실행 및 적용
 useGSAP(() => {
  if (sliderRef.current.length === 0) return;
  const tl = gsap.timeline();

  // 타이틀 애니메이션
  tl.fromTo(imageRef.current, {
   y: 100,
   opacity: 0,
  }, {
   y: 0,
   opacity: 1,
   duration: 1.2,
  })
  tl.fromTo(titleRef.current, {
   y: 100,
   opacity: 0,
  }, {
   y: 0,
   opacity: 1,
   duration: 1.2,
  })
  tl.fromTo(contentRef.current, {
   y: 100,
   opacity: 0,
  }, {
   y: 0,
   opacity: 1,
   duration: 1.2,
  })

  // 기존 애니메이션 정리
  gsap.killTweensOf(sliderRef.current);
  gsap.killTweensOf(slideTimeRef.current);

  // 슬라이드 이동 애니메이션
  gsap.to(sliderRef.current, {
   xPercent: -100 * currentIndex,
  });

  // 프로그래스 바 애니메이션 (5초 동안 증가)
  gsap.fromTo(
   slideTimeRef.current,
   {
    width: '0%',
   },
   {
    width: '100%',
    duration: 5,
    ease: 'linear',
   }
  );
 }, [currentIndex]);

 return (
  <GridArticle className='bg-primary text-color relative min-w-screen'>
   {/* Slider */}
   <Slider>
    <div ref={(el) => {
      if (el) sliderRef.current[0] = el;}}
      className='flex min-w-full flex-shrink-0 flex-col items-center justify-center pt-20 pb-40'>
     {/* Title */}
     <img ref={imageRef} src='/img/logo.webp' alt='히어로 섹션 이미지' className='h-full w-[400px]' />
     <h2 ref={titleRef} className='mb-10 text-7xl'>PROUTEX</h2>
     <p ref={(el) => {
      if (el) contentRef.current[0] = el;
     }} className='mb-5 text-4xl'>(주)비젼라이프홀딩스의 나일론잉크 “N-RECT 엔렉”은</p>
     <p ref={(el) => {
      if (el) contentRef.current[1] = el;
     }} className='text-3xl'>99% 무폐수로 만들어집니다.</p>
    </div>

    {carouselItems.map((item, index) => (
     <div key={index} ref={(el) => {if (el) sliderRef.current[index + 1] = el;}}
      className='relative min-w-full h-[700px] flex-shrink-0'>
      <img
       src={item.src}
       alt='히어로 섹션 이미지'
       className='absolute z-[999]  w-full h-full bg-black/10'
      />
      <div className='absolute top-[40%] left-1/2 z-[9999] -translate-x-1/2'>
       <h3 className='text-color text-7xl'>Title</h3>
       <p className='mt-5 text-4xl'>Description</p>
       <button className='mt-10 text-2xl'>Move</button>
      </div>
     </div>
    ))}
   </Slider>
   {/* Hero Footer */}
   <div className='relative z-[9999]'>
    {/* Hero 네비게이션 */}
    <HeroNavbar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    {/* 프로그래스 바 */}
    <ProgressBar ref={slideTimeRef}/>
   </div>
  </GridArticle>
 );
};

export default Hero;