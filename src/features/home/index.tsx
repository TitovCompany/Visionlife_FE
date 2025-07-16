import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Header from '../../layout/Header/Header.tsx';
import GridArticle from '../../layout/Grid/GridArticle.tsx';
import {useEffect, useState} from 'react';
import news from '../../data/news.json';
import ThreeDScene from '../../components/ThreeDScene.tsx';
import LinkList from '../../components/LinkList.tsx';
import SectionHeader from '../../components/SectionHeader.tsx';
import clsx from 'clsx';
import Card from '../../components/Card/Card.tsx';
import HeroSlider from './components/HeroSlider.tsx';
import {Link} from 'react-router-dom';
import GridLayout from '../../layout/Grid/GridLayout.tsx';
import {carouselItems, companyLink, features} from './data.ts';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Home = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === carouselItems.length ? 0 : prevIndex + 1
   );
  }, 5000);
  // 컴포넌트 언마운트 시 정리
  return () => clearInterval(interval);
 }, []);

 return (
  <>
   <Header />
   <main className='min-h-screen w-full bg-white text-center'>
    <GridLayout className='scrollbar-hide mb-20 md:mb-52'>
     {/* Hero */}
     <GridArticle className='bg-primary relative flex min-h-[60vh] flex-col text-white md:h-screen mb-32'>
      <HeroSlider
       data={carouselItems}
       currentIndex={currentIndex}
       setCurrentIndex={setCurrentIndex}
      />
     </GridArticle>

     {/* Company */}
     <GridArticle className='flex min-h-[60vh] h-screen w-full flex-col justify-center lg:col-start-2 lg:col-end-12 col-start-2 col-end-12'>
      <div className='px-4 md:px-0'>
       <SectionHeader
        id='company'
        title='Company'
        subTitle="비전라이프홀딩스는 '사람과 환경이 공존하는 섬유산업'을 꿈꿉니다."
        titleClassName='text-md leading-relaxed'
       />
      </div>
      <ul className='mt-10 flex w-full flex-col items-center justify-between md:mt-32 md:flex-row md:gap-10 gap-y-16'>
       {companyLink.map((item) => (
        <LinkList href={item.href} imgSrc={item.imgSrc} text={item.title} />
       ))}
      </ul>
     </GridArticle>
    </GridLayout>
   </main>
  </>
 );
};

export default Home;