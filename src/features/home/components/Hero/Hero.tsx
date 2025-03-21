import {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import GridArticle from '../../../../layout/Grid/GridArticle.tsx';
import ProgressBar from '../../../../components/ProgressBar.tsx';
import HeroNavbar from './HeroNavbar.tsx';
import Slider from '../Slider.tsx';
import {FaCaretDown} from 'react-icons/fa';

const carouselItems = [
 {
  title: '지속 가능한 패션',
  description: '비전라이프는 친환경 섬유 인쇄 기술을 통해 패션 업계의 지속 가능성을 실현합니다. 기존 염색 방식에서 발생하는 막대한 폐수를 줄이고, 에너지 효율적인 공정을 도입하여 환경을 보호하면서도 고품질의 패션 제품을 생산할 수 있도록 지원합니다. 우리는 지속 가능한 소비 문화를 선도하며, 친환경 섬유 시장의 새로운 기준을 제시합니다.',
  src: '/video/hero/v2.mp4'
 },
 {
  title: '기업과 함께 성장',
  description: '비전라이프는 친환경 솔루션을 원하는 브랜드 및 기업과 협력하여, 지속 가능한 성장을 이루어나갑니다. 혁신적인 나염 기술과 친환경 잉크를 통해, 기업들이 보다 책임감 있는 생산 공정을 구축할 수 있도록 돕습니다. 우리의 기술은 단순한 친환경을 넘어, 브랜드 가치를 높이고 장기적인 지속 가능성을 실현하는 데 기여합니다.',
  src: '/video/hero/v3.mp4'
 },
];


const Hero = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const titleRef = useRef(null);
 const contentRef = useRef<(HTMLElement | null)[]>([]);
 const imageRef = useRef(null);
 const sliderRef = useRef<HTMLElement[] | []>([]);
 const slideTimeRef = useRef<HTMLDivElement | null>(null);
 const bounceRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === carouselItems.length ? 0 : prevIndex + 1
   );
  }, 5000);

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
   });

  gsap.fromTo(bounceRef.current, {
   y: 0
  }, {
   y: 50,
   duration: 1.2,
   repeat: -1,     // 무한 반복
   yoyo: true,     // 왕복
   ease: 'power1.inOut', // 부드러운 움직임
  });
 }, [currentIndex]);

 return (
  <GridArticle className='bg-primary text-white relative min-w-screen h-screen flex flex-col'>
   {/* Slider */}
   <Slider>
    <div ref={(el) => {if (el) sliderRef.current[0] = el;}} className='flex min-w-full flex-shrink-0 flex-col items-center justify-center pt-40 pb-96 text-color min-h-full'>
     {/* Title */}
     <img ref={imageRef} src='/img/logo.webp' alt='히어로 섹션 이미지' className='h-full w-[400px]' />
     <div className='-translate-y-32'>
      <p ref={(el) => {
       if (el) contentRef.current[0] = el;
      }} className='mb-5 text-4xl'>(주)비전라이프홀딩스의 나일론잉크 “N-RECT 엔렉”은</p>
      <p ref={(el) => {
       if (el) contentRef.current[1] = el;
      }} className='text-3xl'>99% 무폐수로 만들어집니다.</p>
     </div>
    </div>
    {carouselItems.map((item, index) => (
     <div key={index} ref={(el) => {if (el) sliderRef.current[index + 1] = el;}}
      className='relative min-w-full min-h-full flex-shrink-0'>
      <video src={item.src} controls={false} className='w-screen h-[calc(100vh-68px)] object-cover filter brightness-70' autoPlay loop muted playsInline/>
      <div className='absolute top-[40%] left-1/2 z-[9999] -translate-x-1/2'>
       <h3 className='text-6xl mb-10 font-bold'>{item.title}</h3>
       <p className='mt-5 text-xl max-w-3xl whitespace-pre-line leading-8'>{item.description}</p>
      </div>
     </div>
    ))}
    <div ref={bounceRef} className='absolute bottom-64 z-[8888] left-1/2 -translate-x-1/2'>
     <FaCaretDown size={30}/>
    </div>
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