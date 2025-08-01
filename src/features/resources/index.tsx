import PageLayout from '../../layout/PageLayout.tsx';
import catalogData from '../../data/catalogData.json';
import {CatalogItem} from '../../types/catalog';
import DownloadItem from './components/DownloadItem.tsx';
import Header from '../../layout/Header/Header.tsx';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Catalog = () => {
 const sectionRef = useRef(null);
 const videoRef = useRef<HTMLVideoElement>(null);
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.fromTo(
   videoRef.current,
   { width: '400px', height: '400px' },
   {
    width: '100%',
    height: '100%',
    ease: 'none', // scrub 사용 시 ease는 'none'이 일반적입니다.
    scrollTrigger: {
     trigger: sectionRef.current,
     
     // 트리거의 상단이 뷰포트 상단에 닿을 때 시작
     start: 'top top',
     end: '+=100%',
     
     scrub: true,
     pin: true,
     markers: true, // 디버깅 시 유용
    },
   }
  );
 }, []);
 /*useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.fromTo(
   videoRef.current,
   { width: '400px', height: '400px' },
   {
    width: '100%',
    height: '100%',
    ease: 'none', // scrub 사용 시 ease는 'none'이 일반적입니다.
    scrollTrigger: {
     trigger: sectionRef.current,
     
     // 트리거의 상단이 뷰포트 상단에 닿을 때 시작
     start: 'top top',
     end: '+=100%',
     
     scrub: true,
     pin: true,
     markers: true, // 디버깅 시 유용
    },
   }
  );
 }, []);*/
 
 return (
  <>
   <Header />
   <PageLayout title='리소스(자료실) 페이지 본문'>
    <div ref={sectionRef} className='grid grid-cols-12'>
     <section className='min-h-[calc(100vh-67.98px)] col-span-12 grid grid-cols-1 items-center justify-items-center'>
      <video
       ref={videoRef}
       src='/video/data.mp4'
       className='object-cover'
       // className='w-full h-full object-cover'
       controls={false}
       autoPlay
       loop
       muted
       playsInline/>
     </section>
     <section className='col-span-12 lg:col-start-2 lg:col-end-12'>
      <div className='py-12 md:py-16 lg:py-20'>
       <h1 className='border-b-primary border-b pb-8 text-left text-4xl font-bold text-gray-900'>
        Download
       </h1>

       {/* 모든 해상도에서 1열 유지 */}
       <ul className='mt-6 grid grid-cols-1 gap-5'>
        {catalogData.map((item: CatalogItem) => (
         <DownloadItem key={item.id} data={item} />
        ))}
       </ul>
      </div>
     </section>
    </div>
   </PageLayout>
  </>
 );
};

export default Catalog;