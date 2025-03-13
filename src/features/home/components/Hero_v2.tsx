import {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const carouselItems = [
 {title: 'Title 01', src: '/img/home/ceo01.webp'},
 {title: 'Title 02', src: '/img/home/p2.webp'},
 {title: 'Title 03', src: '/img/home/p3.webp'},
];

const buttonList = ['PROUTEX', 'Title 01', 'Title 02', 'Title 03'];

const HeroV2 = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const sliderRef = useRef<HTMLElement[] | []>([]);
 const slideTimeRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === carouselItems.length ? 0 : prevIndex + 1
   );
  }, 5000);

  return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
 }, []);

 useGSAP(() => {
  if (sliderRef.current.length === 0) return;

  // 기존 애니메이션 정리
  gsap.killTweensOf(sliderRef.current);
  gsap.killTweensOf(slideTimeRef.current);

    // 슬라이드 이동 애니메이션
    gsap.to(sliderRef.current, {
     xPercent: -100 * currentIndex,
    })
  
    // 프로그래스 바 애니메이션 (5초 동안 증가)
    gsap.fromTo(slideTimeRef.current, {
     width: '0%'
    },{
     width: '100%',
     duration: 5,
     ease: "linear",
    });
 }, [currentIndex]);

 // 버튼 클릭시 슬라이드 변경
 const handleButtonClick = (index: number) => {
  setCurrentIndex(index);
 };

 return (
  <section className='relative bg-primary text-color overflow-x-auto'>
   {/* Slider */}
   <div className='flex h-[768px] w-full whitespace-nowrap'>
    <article
     ref={(el) => {
      if (el) sliderRef.current[0] = el;
     }}
     className='flex w-full flex-shrink-0 flex-col items-center justify-center pt-20 pb-40'>
     <img
      src='/img/logo.webp'
      alt='히어로 섹션 이미지'
      className='h-full w-[400px]'
     />
     <h2 className='mb-10 text-7xl'>PROUTEX</h2>
     <p className='mb-5 text-4xl'>
      (주)비젼라이프홀딩스의 나일론잉크 “N-RECT 엔렉”은
     </p>
     <p className='text-3xl'>99% 무폐수로 만들어집니다.</p>
    </article>

    {carouselItems.map((item, index) => (
     <article
      key={index}
      ref={(el) => {
       if (el) sliderRef.current[index + 1] = el;
      }}
      className='relative w-full flex-shrink-0'>
      <img
       src={item.src}
       alt='히어로 섹션 이미지'
       className='absolute h-[857px] z-[999] w-full bg-black/10'
      />
      <div className='absolute z-[9999] top-[40%] left-1/2 -translate-x-1/2'>
       <h3 className='text-7xl text-color'>Title</h3>
       <p className='mt-5 text-4xl'>Description</p>
       <button className='mt-10 text-2xl'>Move</button>
      </div>
     </article>
    ))}
   </div>

   <div className='relative z-[9999]'>
    <nav className='text-color w-full pt-5'>
     <ul className='mx-auto flex w-full max-w-xl justify-between'>
      {buttonList.map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer px-4 py-2 ${
            currentIndex === index ? 'bg-white font-bold text-black' : ''
          }`}
          onClick={() => handleButtonClick(index)}>
         {item}
        </li>
      ))}
     </ul>
    </nav>

    {/* 프로그래스 바 */}
    <div className='w-full bg-gray-200'>
     <div ref={slideTimeRef} className='bg-primary h-3'></div>
    </div>
   </div>
  </section>
 );
};

export default HeroV2;
