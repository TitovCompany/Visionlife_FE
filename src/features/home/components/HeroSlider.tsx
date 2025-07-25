import {memo, useRef} from 'react';
import Slider from '../../../components/Slider/Slider.tsx';
import SliderIndicator from '../../../components/Slider/SliderIndicator.tsx';
import {FaCaretDown} from 'react-icons/fa';
import HeroNavbar from './HeroNavbar.tsx';
import ProgressBar from '../../../components/ProgressBar.tsx';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

interface CarouselItems {
 title: string;
 description: string;
 src: string;
}

interface HeroSliderProps {
 currentIndex: number;
 setCurrentIndex: (index: number) => void;
 data: CarouselItems[];
}

const HeroSlider = memo(({
 currentIndex,
 setCurrentIndex,
 data
}: HeroSliderProps) => {
 const sliderRef = useRef<HTMLElement[]>([]);
 const slideTimeRef = useRef<HTMLDivElement | null>(null);

 const imageRef = useRef(null);
 const contentRef = useRef<(HTMLElement | null)[]>([]);

 // 슬라이드 이동처리
 useGSAP(() => {
  gsap.to(sliderRef.current, {
   xPercent: -100 * currentIndex,
  });

  gsap.fromTo(
   slideTimeRef.current,
   { width: '0%' },
   { width: '100%', duration: 5, ease: 'linear' }
  );
 }, [currentIndex]);

 return (
  <>
   <Slider>
    <div
     className='text-color flex min-h-full min-w-full flex-shrink-0 flex-col items-center justify-center pt-40 pb-96'
     ref={(el) => {
      if (el) sliderRef.current[0] = el;
     }}>
     {/* Image */}
     <img ref={imageRef} src='/logo.webp' alt='히어로 섹션 이미지' className='h-full w-full max-w-2/3 md:w-[600px]' />
     <div className='md:-translate-y-16 mb-5 text-xl md:text-4xl leading-8 md:leading-12'>
      {['(주)비전라이프홀딩스의 나일론잉크', '“N-RECT 엔렉”은 99% 무폐수로 만들어집니다.'].map((item, index) => (
       <p key={index} ref={(el) => { if (el) contentRef.current[index] = el;}}>{item}</p>
      ))}
     </div>
    </div>
    {/* Video */}
    {data.map((item, index) => (
     <div key={index} className='relative min-h-full min-w-full flex-shrink-0' ref={(el) => { if (el) sliderRef.current[index + 1] = el;}}>
      <video src={item.src} controls={false} className='h-[calc(100vh-68px)] w-screen object-cover brightness-70 filter' autoPlay={index === currentIndex} loop muted playsInline />
      <div className='w-screen max-w-10/12 absolute top-[35%] md:top-[40%] left-1/2 z-[9999] -translate-x-1/2'>
       <h3 className='mb-4 md:mb-10 text-4xl md:text-6xl font-bold'>{item.title}</h3>
       <p className='mt-5 max-w-full md:max-w-3xl md:mx-auto md:text-xl leading-8 whitespace-pre-line'>
        {item.description}
       </p>
      </div>
     </div>
    ))}
    <SliderIndicator>
     <FaCaretDown size={30} />
    </SliderIndicator>
   </Slider>
   {/* Hero Footer */}
   <div className='relative z-[9999]'>
    {/* Hero 네비게이션 */}
    <HeroNavbar
     currentIndex={currentIndex}
     setCurrentIndex={setCurrentIndex} />
    {/* 프로그래스 바 */}
    <ProgressBar ref={slideTimeRef} />
   </div>
  </>
 );
});

HeroSlider.displayName = 'HeroSlider';
export default HeroSlider;