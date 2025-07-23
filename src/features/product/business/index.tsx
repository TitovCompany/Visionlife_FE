import PageLayout from '../../../layout/PageLayout.tsx';
import Header from '../../../layout/Header/Header.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useState} from 'react';
import { useGSAP } from '@gsap/react';
import overview from '../../../data/business/overview.json';
import clsx from 'clsx';
import { Button } from 'japark-react-components';
import {contentSections} from '../../../data/business/business.ts';

gsap.registerPlugin(ScrollTrigger);

const Business = () => {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const listRef = useRef<(HTMLLIElement | null)[]>([]);
 // detailRef는 더 이상 전역 div를 참조할 필요가 없으므로 각 아이템별로 관리
 // 또는 애니메이션을 위해 여전히 하나의 detailRef를 사용하되, 특정 li 내에 조건부 렌더링
 const currentDetailRef = useRef<HTMLDivElement | null>(null); // 현재 열린 디테일 탭을 위한 Ref

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

 // activeIndex가 변경될 때 애니메이션 처리
 useGSAP(() => {
  if (activeIndex !== null && currentDetailRef.current) {
   gsap.fromTo(
    currentDetailRef.current, // 현재 열린 detailRef 사용
    { x: '100%', autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }
   );
  }
 }, [activeIndex]);


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
         'relative top-0 h-screen', // li는 여전히 h-screen
         'group' // 상세 정보 탭의 부모가 되기 위해 relative 속성 필요
        )}
        ref={(el) => {
         if (el) listRef.current[index] = el;
        }}>
        {item.type === 'video' && (
         <video
          src={item.src}
          controls={false}
          className='h-screen w-full object-cover brightness-70 filter' // w-full 추가
          autoPlay
          loop
          muted
          playsInline />
        )}
        {/* 텍스트 및 자세히 보기 버튼 */}
        <div
         className={clsx(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', // -translate-1/2를 -translate-x-1/2 -translate-y-1/2로 분리
          'text-center text-xl text-white'
         )}>
         <h2 className='mb-10 text-5xl leading-14 font-bold'>{item.title}</h2>
         <p className='mb-10 leading-8 whitespace-pre-line'>{item.content}</p>
         <Button className='border-3 border-white px-10 py-3 text-white' style='outlined' onClick={() => setActiveIndex(index)}>
          VIEW ALL
         </Button>
        </div>

        {/* View 시 출력하는 상세 정보 탭 - 해당 li 내부에 조건부 렌더링 */}
        {activeIndex === index && ( // 현재 li의 index와 activeIndex가 같을 때만 렌더링
         <div
          ref={currentDetailRef} // 각 렌더링 시 currentDetailRef가 업데이트됨
          className='absolute top-0 right-0 z-[999999] lg:w-[800px] h-full bg-white p-6 overflow-y-auto shadow-xl opacity-0'
         >
          <ul>
           {contentSections[index].map((contentItem, j) => ( // contentSections[index]로 해당 섹션 데이터 사용
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
           gsap.to(currentDetailRef.current, { // 현재 열린 detailRef 사용
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