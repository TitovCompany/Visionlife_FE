import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import SplitType from 'split-type';
import clsx from 'clsx';
import GridLayout from '../../../../layout/Grid/GridLayout.tsx';

const paragraphs = [
 '비전라이프는 지속 가능한 미래를 꿈꾸며, 친환경 기술을 통해 산업과 자연이 조화를 이루는 혁신을 실현합니다. 우리는 단순한 제품을 만드는 것이 아니라, 환경 보호와 산업 발전을 동시에 이끄는 솔루션을 창조합니다.',
 '우리는 신념을 가지고 연구하고 개발합니다. 비전라이프의 모든 제품은 무폐수 공정, 저탄소 생산, 그리고 친환경 재료 사용을 기반으로 만들어지며, 지속 가능성을 실현하는 것이 우리의 가장 중요한 목표입니다. 친환경 나염 기술과 혁신적인 인쇄 기술을 통해, 우리는 더 나은 세상을 만들어가고 있습니다.',
 '단순한 잉크를 넘어, 지속 가능한 가치를 창출합니다. Vision Life는 환경을 생각하는 창작자, 브랜드, 그리고 기업과 함께합니다. 우리의 여정에 동참하고, 지속 가능한 미래를 위한 혁신에 함께하세요.',
];

gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
 const aboutImageRef = useRef<HTMLElement | null>(null);
 const inkRef = useRef(null);
 const imageRef = useRef<HTMLImageElement | null>(null);
 const textRefs = useRef<(HTMLElement | null)[]>([]);

 useGSAP(() => {
  const tl = gsap.timeline();
  tl.to(inkRef.current, {
   y: 350,
   duration: 1.5,
   scrollTrigger: {
    trigger: aboutImageRef.current,
    start: '-=200px',
    end: '+=500px',
    scrub: 1,
    pin: false,
   },
  });

  tl.fromTo(imageRef.current, {
   y: '100%',
  }, {
   duration: 1.5,
   y: 0,
   scrollTrigger: {
    trigger: aboutImageRef.current,
    start: '-=100px',
    end: '+=500px',
    scrub: 1,
    pin: false,
   }
  })
  
  // 텍스트 이벤트
  textRefs.current.forEach((el, index) => {
   if (!el) return;
   // 텍스트를 문자 단위로 분리
   const splitText = new SplitType(el, {types: 'chars'});
   gsap.fromTo(
    splitText.chars, {color: '#bbb',}, {
     color: '#000',
     duration: 1.5,
     stagger: 0.05,
     scrollTrigger: {
      trigger: el,
      start: `top ${90 - index * 10}%`,
      end: `top ${40 - index * 5}%`,
      scrub: 1,
     },});
  });
 }, []);

 return (
  <GridLayout rows={3} className={clsx('min-h-screen')}>
   {/* About Ink Image */}
   <article ref={aboutImageRef} className='col-start-3'>
    <div ref={inkRef} className='mb-32 h-[512px] w-[401px]'>
     <h2 className='border-b-primary mb-5 w-fit border-b px-2 pb-2 text-lg font-bold'>
      Ink - NRECT
     </h2>
     <img src='/img/business/p3.webp' alt='' className='h-full w-full' />
    </div>
   </article>
   {/* 섬유 이미지 */}
   <img ref={imageRef} src='/img/product/features/p4.webp' alt='섬유 이미지' className={clsx('max-h-[814px] max-w-[550px]', 'col-start-7 col-end-12 row-start-2 content-end')}/>
   {/* About Description */}
   <article className='col-span-12 py-20 lg:col-span-10 lg:col-start-2'>
    <h2 className='border-b-primary w-fit border-b-2 px-2 pb-2 text-2xl font-bold'>
     About Us
    </h2>
    {paragraphs.map((text, index) => (
     <p
      key={index}
      ref={(el) => {
       if (el) textRefs.current[index] = el;
      }} // 개별 참조 저장
      className='mt-10 text-2xl leading-relaxed text-gray-400'>
      {text}
     </p>
    ))}
   </article>
  </GridLayout>
 );
};

export default AboutUs;

/*
<section className={clsx('min-h-screen', 'grid grid-cols-12')}>
 {/!* About Ink Image *!/}
 <article ref={aboutImageRef} className='col-span-12 lg:col-span-10 lg:col-start-3'>
  <div ref={inkRef} className='mb-32 h-[512px] w-[401px]'>
   <h2 className='border-b-primary mb-5 w-fit border-b px-2 pb-2 text-lg font-bold'>
    Ink - NRECT
   </h2>
   <img src='/img/business/p1.webp' alt='' className='h-full w-full' />
  </div>
 </article>
 {/!* 섬유 이미지 *!/}
 <img ref={imageRef} src='/img/product/features/p4.png' alt='섬유 이미지' className={clsx('max-h-[814px] max-w-[550px]', 'col-span-12 lg:col-span-10 lg:col-start-7')} />
 {/!* About Description *!/}
 <article className='col-span-12 py-20 lg:col-span-10 lg:col-start-2'>
  <h2 className='border-b-primary w-fit border-b px-2 text-2xl font-bold'>
   About Us
  </h2>
  {paragraphs.map((text, index) => (
   <p
    key={index}
    ref={(el) => {
     if (el) textRefs.current[index] = el;
    }} // 개별 참조 저장
    className='mt-10 text-2xl leading-relaxed text-gray-400'>
    {text}
   </p>
  ))}
 </article>
</section>*/