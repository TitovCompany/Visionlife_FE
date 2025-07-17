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
   <main>
    <GridLayout className='min-h-screen w-full bg-white scrollbar-hide mb-20 md:mb-52 text-center'>
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

     {/* WhyUsSection */}
     <GridArticle
      colStart={2}
      colEnd={12}
      labelledById='why-choose-us'
      className='flex min-h-[60vh] flex-col justify-center text-center md:h-screen h-screen '>
      <SectionHeader
       id='why-choose-us'
       title='Why Choose Us?'
       subTitle='지속 가능성과 품질을 동시에 제공합니다.'
       titleClassName='mt-32'
      />
      {/* Contents */}
      <ul className='mt-10 grid grid-cols-1 gap-8 md:mt-32 md:grid-cols-3'>
       {features.map((feature, index) => (
        <li
         key={index}
         /*ref={(el) => {
           if (el) contentRef.current[index] = el;
          }}*/
         className='flex flex-col items-center text-center'>
         <img
          src={feature.image}
          alt=''
          className='h-32 w-32 object-contain md:h-[180px] md:w-[180px] lg:h-[300px] lg:w-[300px]'
         />
         <h3 className='mt-4 text-lg font-semibold md:text-2xl'>
          {feature.title}
         </h3>
         <p className='mt-2 text-sm text-gray-600 md:text-base'>
          {feature.description}
         </p>
        </li>
       ))}
      </ul>
     </GridArticle>

     {/* GlobalBusiness */}
     <GridArticle
      colStart={2}
      colEnd={12}
      className='flex min-h-[60vh] snap-start flex-col justify-center my-32'>
      <SectionHeader
       title='Global Business'
       subTitle={[
        '비전라이프는 글로벌 시장에서 지속 가능한 기술을 바탕으로',
        '새로운 가치를 창출하고 있습니다.',
       ]}
      />
      <div className='flex h-[300px] w-full min-w-0 items-center justify-center md:h-[800px] md:min-w-[600px]'>
       <ThreeDScene />
      </div>
      <div className='mt-4 px-2 text-left text-base md:mt-0 md:px-0 md:text-center md:text-lg'>
       {[
        '비전라이프는 중국 DTP 기계 제조업체와 협력하여 전시장을 운영 중이며,',
        '다양한 원단에 대한 샘플링을 통해 글로벌 시장 진입을 준비하고 있습니다.',
        'N-RECT 기술은 국제 특허 출원 중이며, 올해 1,000톤 규모(약 600억 원)',
        '수출을 목표로 양산 설비를 구축하고 있습니다.',
       ].map((item, index) => (
        <p key={index} className={clsx(index >= 1 && 'mt-2')}>
         {item}
        </p>
       ))}
      </div>
     </GridArticle>

     {/* Media (News) */}
     <GridArticle
      colStart={2}
      colEnd={12}
      className='flex min-h-[60vh] flex-col items-start justify-center gap-10 md:h-screen md:gap-20'>
      <SectionHeader
       title='NEWS'
       subTitle={[
        '친환경 기술과 지속 가능한 변화를 만드는',
        'PROUTEX의 최신 소식을 만나보세요.',
       ]}
      />
      <div className='flex w-full flex-col gap-4 overflow-x-visible md:flex-row md:gap-5'>
       {/* Media Carousel */}
       {news.items.slice(0, 3).map((item, index) => (
        <Card
         key={index}
         className='border-color relative flex flex-1 flex-row items-center border-2 p-4 md:flex-col md:p-8'>
         <img
          src='/logo.webp'
          alt='test'
          className='h-24 w-24 object-contain md:h-[180px] md:w-[180px] lg:h-[300px] lg:w-[300px]'
         />
         <div className='border-color mt-0 mr-0 ml-4 w-full text-left md:mt-10 md:mr-10 md:ml-0'>
          <h3 className='mb-2 text-base md:mb-5 md:text-xl'>{item.title}</h3>
         </div>
        </Card>
       ))}
      </div>
      <div className='mx-auto flex w-full items-center justify-center text-base md:text-xl'>
       <Link to='/' className='border-2 px-6 py-2 font-bold md:px-10 md:py-4'>
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