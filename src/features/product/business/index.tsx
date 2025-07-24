import PageLayout from '../../../layout/PageLayout.tsx';
import Header from '../../../layout/Header/Header.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useState, useEffect} from 'react'; // useEffect 추가
import { useGSAP } from '@gsap/react';
import overview from '../../../data/business/overview.json';
import clsx from 'clsx';
import { Button } from 'japark-react-components';
import {contentSections} from '../../../data/business/business.ts';

gsap.registerPlugin(ScrollTrigger);

const Business = () => {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const listRef = useRef<(HTMLLIElement | null)[]>([]);
 const currentDetailRef = useRef<HTMLDivElement | null>(null);

 useGSAP(() => {
  listRef.current.forEach((el) => {
   if (el) {
    ScrollTrigger.create({
     trigger: el,
     start: 'top top',
     pin: true,
     pinSpacing: false
    });
   }
  });
 }, []);

 useGSAP(() => {
  if (activeIndex !== null && currentDetailRef.current) {
   gsap.fromTo(
    currentDetailRef.current,
    { x: '100%', autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }
   );
  }
 }, [activeIndex]);

 // 🎉 추가된 useEffect 훅: body 스크롤 제어
 useEffect(() => {
  if (activeIndex !== null) {
   // 팝업이 열렸을 때
   document.body.classList.add('no-scroll');
  } else {
   // 팝업이 닫혔을 때
   document.body.classList.remove('no-scroll');
  }

  // 컴포넌트 언마운트 시 또는 activeIndex가 null이 될 때 클래스 제거
  return () => {
   document.body.classList.remove('no-scroll');
  };
 }, [activeIndex]); // activeIndex가 변경될 때마다 이 효과 실행


 return (
  <>
   <Header />
   <PageLayout title='사업개요 페이지 본문' className='relative overflow-x-hidden'>
    {/* 비디오 섹션 */}
    <section className='z-1 [clip-path:polygon(0,0,0,100%,100% 100%, 100% 0)] relative min-h-[calc(100vh-67.98px)] w-full'>
     <ul className='h-full w-full'>
      {overview.data.map((item, index) => (
       <li
        key={index}
        className={clsx(
         'relative top-0 h-screen',
         'group'
        )}
        ref={(el) => {
         if (el) listRef.current[index] = el;
        }}>
        {item.type === 'video' && (
         <video
          src={item.src}
          controls={false}
          className='h-screen w-full object-cover brightness-70 filter'
          autoPlay
          loop
          muted
          playsInline />
        )}
        {/* 텍스트 및 자세히 보기 보튼 */}
        <div
         className={clsx(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'text-center text-xl text-white'
         )}>
         <h2 className='mb-10 text-5xl leading-14 font-bold'>{item.title}</h2>
         <p className='mb-10 leading-8 whitespace-pre-line'>{item.content}</p>
         <Button className='border-3 border-white px-10 py-3 text-white' style='outlined' onClick={() => setActiveIndex(index)}>
          VIEW ALL
         </Button>
        </div>

        {/* View 시 출력하는 상세 정보 탭 - 해당 li 내부에 조건부 렌더링 */}
        {activeIndex === index && (
         <div
          ref={currentDetailRef}
          className='absolute top-0 right-0 z-[999999] lg:w-[800px] h-full bg-white py-32 px-6 overflow-y-auto shadow-xl opacity-0'
         >
          <ul>
           {contentSections[index].map((contentItem, j) => (
            <li key={j} className='mb-6'>
             <span className='text-primary text-3xl font-bold'>{contentItem.number}</span>
             <h3 className='mt-2 text-2xl font-bold text-gray-800'>{contentItem.title}</h3>
             <p className='mt-2 text-lg leading-relaxed text-gray-700 whitespace-pre-line'>
              {contentItem.desc}
             </p>
            </li>
           ))}
          </ul>
          <Button onClick={() => {
           gsap.to(currentDetailRef.current, {
            x: '100%',
            autoAlpha: 0,
            duration: 0.4,
            onComplete: () => setActiveIndex(null),
           });
          }} className='mt-6'>
           닫기
          </Button>
         </div>
        )}
       </li>
      ))}
     </ul>
    </section>
   </PageLayout>
  </>
 );
};

export default Business;