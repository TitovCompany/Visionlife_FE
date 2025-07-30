import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../layout/Header/Header.tsx';
import GridArticle from '../../layout/Grid/GridArticle.tsx';
import ThreeDScene from '../../components/ThreeDScene.tsx';
import HeroSlider from './components/HeroSlider.tsx';
import GridLayout from '../../layout/Grid/GridLayout.tsx';
import HomeNews from './components/HomeNews.tsx';

import SectionHeader from '../../components/SectionHeader.tsx';
import homeData from '../../data/home/home.json';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Home = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === homeData.carouselItems.length ? 0 : prevIndex + 1
   );
  }, 50000000);
  // 컴포넌트 언마운트 시 정리
  return () => clearInterval(interval);
 }, []);

 return (
  <>
   <Header />
   <main className='min-h-screen w-full bg-white text-center'>
    <GridLayout className='scrollbar-hide mb-20 md:mb-52'>
     {/* Hero */}
     <GridArticle className='bg-primary relative flex h-screen min-w-screen flex-col text-white md:min-h-[60vh]'>
      <HeroSlider
       data={homeData.carouselItems}
       currentIndex={currentIndex}
       setCurrentIndex={setCurrentIndex}/>
     </GridArticle>

     {/* Company */}
     <GridArticle
      labelledById='why-choose-us'
      className='container mx-auto w-full flex flex-col justify-center px-6 py-36 text-center md:col-start-2 md:col-end-12 md:min-h-full md:px-0'>
      <SectionHeader
       id='company'
       title='Company'
       subTitle="비전라이프홀딩스는 '사람과 환경이 공존하는 섬유산업'을 꿈꿉니다."/>
      {/* Contents */}
      <ul className='mt-10'>
       {homeData.features.map((feature, index) => (
        <li
         key={index}
         /*ref={(el) => {
           if (el) contentRef.current[index] = el;
          }}*/
         className={`flex items-center text-center gap-10 ${index === 1 && "flex-row-reverse"}`}>
         <img
          src={feature.image}
          alt=''
          className='h-32 w-32 object-contain md:h-[180px] md:w-[180px] lg:h-[300px] lg:w-[300px]'
         />
         <div className='text-left'>
          <h3 className='text-lg font-semibold md:text-2xl'>
           {feature.title}
          </h3>
          <p className='mt-2 text-sm text-gray-600 md:text-base'>
           {feature.description}
          </p>
         </div>
        </li>
       ))}
      </ul>
     </GridArticle>

     {/* GlobalBusiness */}
     <GridArticle className='container mx-auto flex min-h-[60vh] snap-start flex-col justify-center px-6 pt-36 md:col-start-2 md:col-end-12 md:h-full md:px-0'>
      {/*<SectionHeader
       title='Global Business'
       subTitle={[
        '비전라이프는 글로벌 시장에서 지속 가능한 기술을 바탕으로',
        '새로운 가치를 창출하고 있습니다.',
       ]}/>*/}
      <SectionHeader
       title='Global Business'
       subTitle={
        '비전라이프는 글로벌 시장에서 지속 가능한 기술을 바탕으로 새로운 가치를 창출하고 있습니다.'
       }/>
      <div className='mt-4 px-2 text-left text-base md:mt-6 md:mr-5 md:px-0 md:text-lg'>
       <p>
        비전라이프는 중국 DTP 기계 제조업체와 협력하여 전시장을 운영 중이며,
        다양한 원단에 대한 샘플링을 통해 글로벌 시장 진입을 준비하고 있습니다.
        N-RECT 기술은 국제 특허 출원 중이며, 2025년 1,000톤 규모(약 600억
        원)수출을 목표로 양산 설비를 구축하고 있습니다.
       </p>
      </div>
      <div className='flex h-[300px] w-full min-w-0 items-center justify-center md:h-[800px] md:min-w-[600px]'>
       <ThreeDScene />
      </div>
     </GridArticle>

     {/* Media (News) */}
     <GridArticle className='container mx-auto flex flex-col items-start justify-center gap-10 px-6 md:col-start-2 md:col-end-12 md:gap-20 md:px-0'>
      <SectionHeader
       title='NEWS'
       subTitle={[
        '친환경 기술과 지속 가능한 변화를 만드는',
        'PROUTEX의 최신 소식을 만나보세요.',
       ]}/>

      {/* Media Carousel */}
      <div className='flex gap-5 overflow-x-visible'>
       <HomeNews />
      </div>
      <div className='mx-auto flex w-full items-center justify-center text-base md:text-xl'>
       <Link
        to='/company/catalogs'
        className='border-2 px-6 py-2 font-bold md:px-10 md:py-4'>
        VIEW ALL
       </Link>
      </div>
     </GridArticle>
    </GridLayout>
   </main>
  </>
 );
};

export default Home;