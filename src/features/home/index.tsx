import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Header from '../../layout/Header/Header.tsx';
import GridArticle from '../../layout/Grid/GridArticle.tsx';
import {useEffect, useState} from 'react';
import ThreeDScene from '../../components/ThreeDScene.tsx';
import LinkList from '../../components/LinkList.tsx';
import SectionHeader from '../../components/SectionHeader.tsx';
import HeroSlider from './components/HeroSlider.tsx';
import {Link} from 'react-router-dom';
import GridLayout from '../../layout/Grid/GridLayout.tsx';
import HomeNews from './components/HomeNews.tsx';

const carouselItems = [
 {
  title: '지속 가능한 패션',
  description:
   '비전라이프는 친환경 섬유 인쇄 기술을 통해 패션 업계의 지속 가능성을 실현합니다. 기존 염색 방식에서 발생하는 막대한 폐수를 줄이고, 에너지 효율적인 공정을 도입하여 환경을 보호하면서도 고품질의 패션 제품을 생산할 수 있도록 지원합니다. 우리는 지속 가능한 소비 문화를 선도하며, 친환경 섬유 시장의 새로운 기준을 제시합니다.',
  src: '/video/hero/v2.mp4',
 },
 {
  title: '기업과 함께 성장',
  description:
   '비전라이프는 친환경 솔루션을 원하는 브랜드 및 기업과 협력하여, 지속 가능한 성장을 이루어나갑니다. 혁신적인 나염 기술과 친환경 잉크를 통해, 기업들이 보다 책임감 있는 생산 공정을 구축할 수 있도록 돕습니다. 우리의 기술은 단순한 친환경을 넘어, 브랜드 가치를 높이고 장기적인 지속 가능성을 실현하는 데 기여합니다.',
  src: '/video/hero/v3.mp4',
 },
];

const features = [
 {
  image: '/logo.webp',
  title: '간소화한 공정단계',
  description: '잉크부터 디자이너, A/S까지 한 번에 – 올인원 토탈 솔루션',
 },
 {
  image: '/logo.webp',
  title: '물 한 방울 없이, 더 깨끗하게',
  description: '폐수 ZERO, 탄소 ZERO – 친환경 그 자체인 수성 잉크',
 },
 {
  image: '/logo.webp',
  title: '최상의 견뢰도 컨디션',
  description: '어떤 소재든 선명하게, 견뢰도 최상급 구현',
 },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Home = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === carouselItems.length ? 0 : prevIndex + 1
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
       data={carouselItems}
       currentIndex={currentIndex}
       setCurrentIndex={setCurrentIndex}
      />
     </GridArticle>

     {/* Company */}
     <GridArticle className='container mx-auto min-h-[60vh] w-full px-6 py-36 md:col-start-2 md:col-end-12 md:min-h-full md:px-0'>
      <SectionHeader
       id='company'
       title='Company'
       subTitle="비전라이프홀딩스는 '사람과 환경이 공존하는 섬유산업'을 꿈꿉니다."
      />
      <ul className='mt-12 flex w-full flex-col items-center justify-between gap-4 md:mt-32 md:flex-row md:gap-10'>
       <LinkList
        href='/company/profile'
        imgSrc='/img/home/Cp1.webp'
        text='ABOUT COMPANY'
       />
       <LinkList
        href='/company/profile/history'
        imgSrc='/img/home/Cp1.webp'
        text='HISTORY'
       />
       <LinkList
        href='/business/overview/introduction'
        imgSrc='/img/home/Cp2.webp'
        text='BUSINESS'
       />
       <LinkList
        href='/company/profile/contact'
        imgSrc='/img/home/Cp3.webp'
        text='LOCATION'
       />
      </ul>
     </GridArticle>

     {/* WhyUsSection */}
     <GridArticle
      labelledById='why-choose-us'
      className='container mx-auto w-full flex flex-col justify-center px-6 py-36 text-center md:col-start-2 md:col-end-12 md:min-h-full md:px-0'>
      <SectionHeader
       id='why-choose-us'
       title='Why Choose Us?'
       subTitle='지속 가능성과 품질을 동시에 제공합니다.'
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