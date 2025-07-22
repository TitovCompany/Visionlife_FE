import { Link } from 'react-router-dom';
import PageLayout from '../../../layout/PageLayout.tsx';
import Header from '../../../layout/Header/Header.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useState} from 'react';
import { useGSAP } from '@gsap/react';
import overview from '../../../data/business/overview.json';
import clsx from 'clsx';
import { Button } from 'japark-react-components';
import {contentSections, sectionLinks} from '../../../data/business/business.ts';

gsap.registerPlugin(ScrollTrigger);

const Business = () => {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const listRef = useRef<(HTMLLIElement | null)[]>([]);
 const detailRef = useRef<HTMLDivElement | null>(null);

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
  if (activeIndex !== null && detailRef.current) {
   gsap.fromTo(
    detailRef.current,
    { x: '100%', autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }
   );
  }
 }, [activeIndex]);


 return (
  <>
   <Header />
   <PageLayout title='사업개요 페이지 본문' className='relative overflow-x-hidden'>
    <section className='z-1 [clip-path:polygon(0,0,0,100%,100% 100%, 100% 0)] relative min-h-[calc(100vh-67.98px)] w-full'>
     <ul className='h-full w-full'>
      {overview.data.map((item, index) => (
       <li
        key={index}
        className={clsx('relative top-0 h-screen')}
        ref={(el) => {
         if (el) listRef.current[index] = el;
        }}>
        {item.type === 'video' && (
         <video
          src={item.src}
          controls={false}
          className='h-screen object-cover brightness-70 filter'
          autoPlay
          loop
          muted
          playsInline
         />
        )}
        <div
         className={clsx(
          'absolute top-1/2 left-1/2 -translate-1/2',
          'text-center text-xl text-white'
         )}>
         <h2 className='mb-10 text-5xl leading-14 font-bold'>{item.title}</h2>
         <p className='mb-10 leading-8 whitespace-pre-line'>{item.content}</p>
         <Button className='border-3 border-white px-10 py-3 text-white' style='outlined' onClick={() => setActiveIndex(index)}>
          VIEW ALL
         </Button>
        </div>
       </li>
      ))}
     </ul>
    </section>
    {/* ??? */}
    {/*<div className={clsx('absolute top-0 z-[999999]')}>
     <ul>
      {sectionLinks.map((link, idx) => (
       <li key={idx}>
        <Link to={link.to}>
         <span>{link.label}</span>
        </Link>
       </li>
      ))}
     </ul>
    </div>*/}
    {activeIndex !== null && (
     <div
      ref={detailRef}
      className='absolute top-0 right-0 z-[999999] lg:w-[800px] h-full bg-white p-6 overflow-y-auto shadow-xl opacity-0'
     >
      <ul>
       {contentSections[activeIndex].map((item, j) => (
        <li key={j} className='mb-6'>
         <span className='text-primary text-3xl font-bold'>{item.number}</span>
         <h3 className='mt-2 text-2xl font-bold text-gray-800'>{item.title}</h3>
         <p className='mt-2 text-lg leading-relaxed text-gray-700 whitespace-pre-line'>
          {item.desc}
         </p>
        </li>
       ))}
      </ul>
      <Button onClick={() => {
       gsap.to(detailRef.current, {
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

   </PageLayout>
  </>
 );
};

export default Business;