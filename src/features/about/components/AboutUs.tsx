import gsap from 'gsap';
import {useEffect, useRef} from 'react';
// import {useGSAP} from '@gsap/react';
import SplitType from 'split-type';
import clsx from 'clsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const paragraphs = [
 '비전라이프는 지속 가능한 미래를 꿈꾸며, 친환경 기술을 통해 산업과 자연이 조화를 이루는 혁신을 실현합니다. 우리는 단순한 제품을 만드는 것이 아니라, 환경 보호와 산업 발전을 동시에 이끄는 솔루션을 창조합니다.',
 '우리는 신념을 가지고 연구하고 개발합니다. 비전라이프의 모든 제품은 무폐수 공정, 저탄소 생산, 그리고 친환경 재료 사용을 기반으로 만들어지며, 지속 가능성을 실현하는 것이 우리의 가장 중요한 목표입니다. 친환경 나염 기술과 혁신적인 인쇄 기술을 통해, 우리는 더 나은 세상을 만들어가고 있습니다.',
 '단순한 잉크를 넘어, 지속 가능한 가치를 창출합니다. Vision Life는 환경을 생각하는 창작자, 브랜드, 그리고 기업과 함께합니다. 우리의 여정에 동참하고, 지속 가능한 미래를 위한 혁신에 함께하세요.',
];

const AboutUs = () => {
 const aboutImageRef = useRef<HTMLDivElement | null>(null);
 const inkRef = useRef(null);
 const imageRef = useRef<HTMLDivElement | null>(null);
 const textRefs = useRef<(HTMLElement | null)[]>([]);
 
 useEffect(() => {
  import('gsap/ScrollTrigger').then(({ScrollTrigger}) => {
   gsap.registerPlugin(ScrollTrigger);
   const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
   // 모바일 조건문 추가 모바일이 아닐때만 실행
   if (!isMobile) {
    const tl = gsap.timeline();
    tl.to(inkRef.current, {
     y: 500,
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
     y: -150,
     scrollTrigger: {
      trigger: aboutImageRef.current,
      start: '-=100px',
      end: '+=500px',
      scrub: 1,
      pin: false,
     }
    });
   }
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
      },
     }
    );
   });
  });
 }, []);
 
 /*useGSAP(() => {
  import('gsap/ScrollTrigger').then(({ScrollTrigger}) => {
   gsap.registerPlugin(ScrollTrigger);
   const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
   // 모바일 조건문 추가 모바일이 아닐때만 실행
   if (!isMobile) {
    const tl = gsap.timeline();
    tl.to(inkRef.current, {
     y: 500,
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
     y: -150,
     scrollTrigger: {
      trigger: aboutImageRef.current,
      start: '-=100px',
      end: '+=500px',
      scrub: 1,
      pin: false,
     }
    });
   }
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
      },
     }
    );
   });
  });
  }, []);*/

 return (
   <GridLayout rows={3} className={clsx('min-h-screen')}>
   {/* About Ink Image */}
   <div ref={aboutImageRef}className="col-start-1 col-end-13 md:col-start-2 md:col-end-6 mb-100 px-4 md:px-0">
     <div ref={inkRef} className="mb-32 h-[512px] w-full md:w-[401px]">
      <h2 className='border-b-primary mb-5 w-fit border-b px-2 pb-2 text-lg font-bold'>Ink - NRECT</h2>
       <img src='/img/business/p1.webp' alt='비전 라이프의 무폐수 잉크 NRECT' className='h-full w-full mb-10'/>
     <h3 className="text-left text-2xl font-bold mb-4">
      비전라이프, 지속 가능한<br/> 미래를 디자인하다
       </h3>
     <p className="text-left text-lg leading-relaxed">
         비전라이프는 <strong>환경을 위한 기술 혁신</strong>을 통해 지속 가능한 산업 생태계를 조성하고 있습니다.
         단순한 제품을 만드는 것을 넘어, <strong>친환경 솔루션</strong>을 통해 산업과 자연이 공존하는 미래를 만들어갑니다.
         우리는 <strong>무폐수 염색 기술</strong>과 <strong>친환경 나염 시스템</strong>을 통해 환경 보호와 산업 혁신을 동시에 실현하며,
         전 세계 기업과 협력하여 <strong>친환경 섬유 산업의 표준을 새롭게 정의</strong>하고 있습니다.
       </p>
     </div>
   </div>
   <GridArticle colStart={1} colEnd={13} className={clsx('text-primary mt-32 md:col-start-7 md:col-end-12 px-4 md:px-0')}>
     <div className='w-fit text-primary text-5xl font-bold leading-20 text-left '>
      <h2 className='text-4xl font-bold text-primary mb-6'>환경을 위한 기술, 기술을 위한 책임</h2>
     </div>
     <p className='text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto'>
     비전라이프는 잉크를 넘어 지속 가능한 미래를 만듭니다.<br />
       우리는 기술로 환경을 지키고, 브랜드의 가치를 높입니다.
     </p>
    <p className="mt-12 mb-32 text-primary text-left text-xl max-w-2xl leading-relaxed">
       친환경적인 삶을 실천하는 것은 우리의 사명입니다.
     비전라이프는 섬유 산업의 지속 가능성을 위해 <strong>무폐수 염색 기술</strong>을 개발하여, 환경을 보호하면서도 뛰어난 품질을 유지하는 혁신을 이루고 있습니다.
       작은 선택이 큰 변화를 만듭니다. <strong>ECO Life를 함께 실천하세요.</strong>
     </p>
   </GridArticle>
   <GridArticle ref={imageRef} colStart={1} colEnd={13} rowStart={2} rowEnd={3} className={clsx('md:col-start-7 md:col-end-12 px-4 md:px-0')}>
     <div className='mb-10'>
     <h3 className="text-2xl font-bold mb-4">
      환경을 생각하는 섬유 산업,<br/>비전라이프가 앞장섭니다
       </h3>
     <p className="text-lg leading-relaxed">
         비전라이프는 <strong>지속 가능한 패션과 섬유 산업</strong>을 위해 혁신적인 친환경 기술을 연구하고 개발합니다.
         우리는 <strong>무폐수 염색 공정</strong>을 통해 <strong>에너지 절감과 탄소 배출 감소</strong>를 실현하며,
         자연과 조화를 이루는 생산 방식을 도입하여 <strong>환경과 경제적 지속 가능성</strong>을 모두 고려합니다.
         비전라이프는 단순한 친환경 솔루션을 넘어, <strong>산업의 새로운 표준을 제시하며</strong>,
         기업과 소비자가 함께하는 <strong>지속 가능한 미래</strong>를 만들어가고 있습니다.
       </p>
     </div>
    {/* 섬유 이미지 */}
    <img src='/img/product/features/p4.webp' alt='섬유 이미지' className={clsx('h-full w-full max-h-[500px] md:max-h-[814px] max-w-[550px]')}/>
   </GridArticle>
   {/* About Description */}
   <article className='col-span-12 py-40 lg:col-span-10 lg:col-start-2 px-4 md:px-0'>
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
   <img src='/img/business/p1.jpg' alt='' className='h-full w-full' />
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