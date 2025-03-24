import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Header from '../../layout/Header/Header.tsx';
import GridLayout from '../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../layout/Grid/GridArticle.tsx';
import {useEffect, useRef, useState} from 'react';
import {useGSAP} from '@gsap/react';
import Slider from './components/Slider.tsx';
import {FaCaretDown} from 'react-icons/fa';
import HeroNavbar from './components/HeroNavbar.tsx';
import ProgressBar from '../../components/ProgressBar.tsx';
import news from '../../data/news.json';
import ThreeDScene from '../../components/ThreeDScene.tsx';
import TextLink from '../../components/TextLink.tsx';
import LinkList from '../../components/LinkList.tsx';
import SectionHeader from '../../components/SectionHeader.tsx';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
  image: '/img/logo.webp',
  title: '간소화한 공정단계',
  description: '잉크부터 디자이너, A/S까지 한 번에 – 올인원 토탈 솔루션',
 },
 {
  image: '/img/logo.webp',
  title: '물 한 방울 없이, 더 깨끗하게',
  description: '폐수 ZERO, 탄소 ZERO – 친환경 그 자체인 수성 잉크',
 },
 {
  image: '/img/logo.webp',
  title: '최상의 견뢰도 컨디션',
  description: '어떤 소재든 선명하게, 견뢰도 최상급 구현',
 },
];

const Home = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const articleRef = useRef<HTMLElement[]>([]);
 const titleRef = useRef(null);
 const contentRef = useRef<(HTMLElement | null)[]>([]);
 const imageRef = useRef(null);
 const sliderRef = useRef<HTMLElement[] | []>([]);
 const slideTimeRef = useRef<HTMLDivElement | null>(null);
 const bounceRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) =>
    prevIndex === carouselItems.length ? 0 : prevIndex + 1
   );
  }, 5000);

  return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
 }, []);

 // 애니메이션 유틸 함수
 const animateFadeUp = (
  target: gsap.TweenTarget,
  delay = 0,
  trigger?: Element
 ) => {
  gsap.fromTo(
   target,
   { y: 100, opacity: 0 },
   {
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay,
    ...(trigger && {
     scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'top 60%',
      toggleActions: 'play none none none',
     },
    }),
   }
  );
 };

 // 슬라이더 애니메이션 실행 및 적용
 useGSAP(() => {
  // 초기 진입 애니메이션
  if (imageRef.current) animateFadeUp(imageRef.current);
  // if (titleRef.current) animateFadeUp(titleRef.current, 0.2);
  /*contentRef.current.forEach((el, i) => {
   if (el) animateFadeUp(el, i * 0.3, el); // ScrollTrigger 포함
  });*/

  // 슬라이드 이동 애니메이션
  gsap.to(sliderRef.current, {
   xPercent: -100 * currentIndex,
  });

  // 프로그래스 바 애니메이션 (5초 동안 증가)
  gsap.fromTo(
   slideTimeRef.current,
   {
    width: '0%',
   },
   {
    width: '100%',
    duration: 5,
    ease: 'linear',
   }
  );

  gsap.fromTo(
   bounceRef.current,
   {
    y: 0,
   },
   {
    y: 20,
    duration: 1.2,
    repeat: -1, // 무한 반복
    yoyo: true, // 왕복
    ease: 'power1.inOut', // 부드러운 움직임
   }
  );

  gsap.fromTo(
   titleRef.current,
   {
    y: 100,
    opacity: 0,
   },
   {
    y: 0,
    opacity: 1,
    scrollTrigger: {
     trigger: titleRef.current,
     start: 'top 80%',
     end: 'top 60%',
    },
   }
  );

  // LI 요소 하나씩 등장하도록 설정
  contentRef.current.forEach((el, index) => {
   if (el) {
    gsap.fromTo(
     el,
     {opacity: 0, y: 50},
     {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.3, // 요소마다 순차적 등장
      scrollTrigger: {
       trigger: el,
       start: 'top 80%', // 요소가 화면에 들어올 때 시작
       end: 'top 60%', // 요소가 지나가면 끝남
       toggleActions: 'play none none none',
      },
     }
    );
   }
  });
 }, [currentIndex, contentRef]);

 return (
  <>
   <Header />
   <main className='min-h-screen w-full bg-white text-center'>
    <GridLayout className='snap-y snap-mandatory gap-y-0 scroll-smooth'>
     {/* Hero */}
     <GridArticle
      ref={(el) => {
       if (el) articleRef.current[0] = el;
      }}
      className='bg-primary relative flex h-screen min-w-screen snap-start flex-col text-white'>
      {/* Slider */}
      <Slider>
       <div
        ref={(el) => {
         if (el) sliderRef.current[0] = el;
        }}
        className='text-color flex min-h-full min-w-full flex-shrink-0 flex-col items-center justify-center pt-40 pb-96'>
        {/* Title */}
        <img
         ref={imageRef}
         src='/img/logo.webp'
         alt='히어로 섹션 이미지'
         className='h-full w-[400px]'
        />
        <div className='-translate-y-32'>
         <p
          ref={(el) => {
           if (el) contentRef.current[0] = el;
          }}
          className='mb-5 text-4xl'>
          (주)비전라이프홀딩스의 나일론잉크 “N-RECT 엔렉”은
         </p>
         <p
          ref={(el) => {
           if (el) contentRef.current[1] = el;
          }}
          className='text-3xl'>
          99% 무폐수로 만들어집니다.
         </p>
        </div>
       </div>
       {carouselItems.map((item, index) => (
        <div
         key={index}
         ref={(el) => {
          if (el) sliderRef.current[index + 1] = el;
         }}
         className='relative min-h-full min-w-full flex-shrink-0'>
         <video
          src={item.src}
          controls={false}
          className='h-[calc(100vh-68px)] w-screen object-cover brightness-70 filter'
          autoPlay
          loop
          muted
          playsInline
         />
         <div className='absolute top-[40%] left-1/2 z-[9999] -translate-x-1/2'>
          <h3 className='mb-10 text-6xl font-bold'>{item.title}</h3>
          <p className='mt-5 max-w-3xl text-xl leading-8 whitespace-pre-line'>
           {item.description}
          </p>
         </div>
        </div>
       ))}
       <div
        ref={bounceRef}
        className='absolute bottom-64 left-1/2 z-[8888] -translate-x-1/2'>
        <FaCaretDown size={30} />
       </div>
      </Slider>
      {/* Hero Footer */}
      <div className='relative z-[9999]'>
       {/* Hero 네비게이션 */}
       <HeroNavbar
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
       />
       {/* 프로그래스 바 */}
       <ProgressBar ref={slideTimeRef} />
      </div>
     </GridArticle>

     {/* Company */}
     <GridArticle
      ref={(el) => {
       if (el) articleRef.current[1] = el;
      }}
      colStart={2}
      colEnd={12}
      className='flex h-screen w-full snap-start flex-col justify-center'>
      <SectionHeader ref={titleRef} title='Company' subTitle='비전라이프홀딩스는 ‘사람과 환경이 공존하는 섬유산업’을 꿈꿉니다.'/>
      <ul className='flex justify-between items-center gap-10 mt-32'>
       <LinkList href='/' imgSrc='/img/home/Cp1.webp' text='About Company'/>
       <LinkList href='/' imgSrc='/img/home/Cp2.webp' text='Business'/>
       <LinkList href='/' imgSrc='/img/home/Cp3.webp' text='Location'/>
      </ul>
     </GridArticle>

     {/* WhyUsSection */}
     <GridArticle
      ref={(el) => {
       if (el) articleRef.current[2] = el;
      }}
      colStart={2}
      colEnd={12}
      className='flex h-screen snap-start flex-col justify-center text-center'>
      {/* Title */}
      <SectionHeader ref={titleRef} title='Why Choose Us?' subTitle='지속 가능성과 품질을 동시에 제공합니다.'/>

      {/* Contents */}
      <ul className='mt-32 grid grid-cols-1 gap-8 md:grid-cols-3'>
       {features.map((feature, index) => (
        <li
         key={index}
         ref={(el) => {
          if (el) contentRef.current[index] = el;
         }}
         className='flex flex-col items-center text-center'>
         <img src={feature.image} alt='' />
         <h3 className='mt-4 text-2xl font-semibold'>{feature.title}</h3>
         <p className='mt-2 text-gray-600'>{feature.description}</p>
        </li>
       ))}
      </ul>
     </GridArticle>

     {/* GlobalBusiness */}
     <GridArticle
      ref={(el) => {
       if (el) articleRef.current[3] = el;
      }}
      colStart={2}
      colEnd={12}
      className='flex h-screen snap-start flex-col justify-center'>
      <SectionHeader
       title="Global Business"
       subTitle={[
        '비전라이프는 글로벌 시장에서 지속 가능한 기술을 바탕으로',
        '새로운 가치를 창출하고 있습니다.',
       ]}/>
      <div className='h-[800px] min-w-[600px]'>
       <ThreeDScene />
      </div>
      <div className='text-lg'>
       {['비전라이프는 중국 DTP 기계 제조업체와 협력하여 전시장을 운영 중이며,', '다양한 원단에 대한 샘플링을 통해 글로벌 시장 진입을 준비하고 있습니다.', 'N-RECT 기술은 국제 특허 출원 중이며, 올해 1,000톤 규모(약 600억 원)', '수출을 목표로 양산 설비를 구축하고 있습니다.'].map((item, index) => (
        <p key={index} className={clsx(index >= 1 && 'mt-2')}>
         {item}
        </p>
       ))}
      </div>
     </GridArticle>

     {/* Media (News) */}
     <GridArticle
      ref={(el) => {
       if (el) articleRef.current[4] = el;
      }}
      colStart={2}
      colEnd={12}
      className='flex h-screen snap-start flex-col items-center justify-center gap-20'>
      <SectionHeader
       title="NEWS"
       subTitle={[
        '친환경 기술과 지속 가능한 변화를 만드는',
        'PROUTEX의 최신 소식을 만나보세요.',
       ]}/>
      <div className='flex gap-5 overflow-x-visible'>
       {/* Media Carousel */}
       <div className='border-color relative flex min-w-[380px] flex-col items-start justify-around border-2 p-8'>
        <img src='/img/logo.webp' alt='test' className='h-full w-full' />
        <div className='border-color mt-10 mr-10 w-full text-left'>
         <h3 className='mb-5 text-xl'>{news.items[0].title}</h3>
        </div>
       </div>
       <div className='border-color relative flex min-w-[380px] flex-col items-start justify-around border-2 p-8'>
        <img src='/img/logo.webp' alt='test' className='h-full w-full' />
        <div className='border-color mt-10 mr-10 w-full text-left'>
         <h3 className='mb-5 text-xl'>{news.items[0].title}</h3>
        </div>
       </div>
       <div className='border-color relative flex min-w-[380px] flex-col items-start justify-around border-2 p-8'>
        <img src='/img/logo.webp' alt='test' className='h-full w-full' />
        <div className='border-color mt-10 mr-10 w-full text-left'>
         <h3 className='mb-5 text-xl'>{news.items[0].title}</h3>
        </div>
       </div>
      </div>
      <div className='mx-auto w-full text-xl'>
       <TextLink href='/' className='w-fit border-2 px-10 py-4 font-bold'>
        VIEW ALL
       </TextLink>
      </div>
     </GridArticle>
    </GridLayout>
   </main>
  </>
 );
};

export default Home;