import PageLayout from '../../layout/PageLayout.tsx';
import catalogData from '../../data/catalogData.json';
import {CatalogItem} from '../../types/catalog';
import DownloadItem from './components/DownloadItem.tsx';
import Header from '../../layout/Header/Header.tsx';
import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {useLocation} from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
const Catalog = () => {
 const location = useLocation();
 const sectionRef = useRef(null);
 const videoRef = useRef<HTMLVideoElement>(null);

 useGSAP(() => {
  gsap.fromTo(
   videoRef.current,
   { width: '400px', height: '400px' },
   {
    width: '100%',
    height: '100%',
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
     trigger: sectionRef.current,
     start: '+=10 top', // 현재 위치에서 (n)px 아래에서 시작
     // end: '+=18',       // (n)px 구간 동안 애니메이션 진행
     scrub: true, // 부드러운 애니메이션 적용
     // 되돌아가는 애니메이션 설정
     pin: true,
     toggleActions: 'play reverse play reverse',
     markers: true,
    },
   }
  );
  ScrollTrigger.refresh();
 }, [location.pathname]);
 // min-h-[calc(100vh-67.98px)]
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