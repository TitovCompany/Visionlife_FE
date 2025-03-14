import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import SplitType from 'split-type';
import clsx from 'clsx';

const paragraphs = [
 '비전라이프는 지속 가능한 미래를 꿈꾸며, 친환경 기술을 통해 산업과 자연이 조화를 이루는 혁신을 실현합니다. 우리는 단순한 제품을 만드는 것이 아니라, 환경 보호와 산업 발전을 동시에 이끄는 솔루션을 창조합니다.',
 '우리는 신념을 가지고 연구하고 개발합니다. 비전라이프의 모든 제품은 무폐수 공정, 저탄소 생산, 그리고 친환경 재료 사용을 기반으로 만들어지며, 지속 가능성을 실현하는 것이 우리의 가장 중요한 목표입니다. 친환경 나염 기술과 혁신적인 인쇄 기술을 통해, 우리는 더 나은 세상을 만들어가고 있습니다.',
 '단순한 잉크를 넘어, 지속 가능한 가치를 창출합니다. Vision Life는 환경을 생각하는 창작자, 브랜드, 그리고 기업과 함께합니다. 우리의 여정에 동참하고, 지속 가능한 미래를 위한 혁신에 함께하세요.',
];

gsap.registerPlugin(ScrollTrigger);
const AboutUs = ({
 imageRef,
}: {
 imageRef: React.RefObject<HTMLImageElement | null>;
}) => {
 const aboutImageRef = useRef<HTMLElement | null>(null);
 const inkRef = useRef(null);
 const textRefs = useRef<(HTMLElement | null)[]>([]);

 useGSAP(() => {
  const tl = gsap.timeline();
  tl.to(inkRef.current, {
   y: 100,
   duration: 1.2,
   scrollTrigger: {
    trigger: aboutImageRef.current,
    start: 'top top',
    end: '+=200px',
    scrub: 1,
    pin: false,
    markers: true,
   },
  });
  textRefs.current.forEach((el, index) => {
   if (!el) return;
   const splitText = new SplitType(el, {types: 'chars'}); // 텍스트를 문자 단위로 분리

   gsap.fromTo(
    splitText.chars,
    {color: '#bbb'}, // 시작 색상 (연한 회색)
    {
     color: '#000', // 끝 색상 (검정)
     duration: 1.5,
     stagger: 0.05,
     scrollTrigger: {
      trigger: el,
      start: `top ${90 - index * 10}%`,
      end: `top ${40 - index * 5}%`,
      scrub: 1,
      markers: true,
     },
    }
   );
  });
 }, []);

 return (
  <section className={clsx('min-h-screen', 'grid grid-cols-12')}>
   {/* About Ink Image */}
   <article ref={aboutImageRef} className='col-span-12 lg:col-span-10 lg:col-start-3'>
    <div ref={inkRef} className='mb-32 h-[512px] w-[401px]'>
     <h2 className='border-b-primary mb-5 w-fit border-b px-2 pb-2 text-lg font-bold'>
      Ink - NRECT
     </h2>
     <img src='/img/business/p1.jpg' alt='' className='h-full w-full' />
    </div>
   </article>
   {/* 섬유 이미지 */}
   <article className='col-span-12 lg:col-span-10 lg:col-start-7'>
    <img
     ref={imageRef}
     src='/img/product/features/p4.png'
     alt=''
     className='max-h-[814px] max-w-[550px]'
    />
   </article>
   {/* About Description */}
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
  </section>
 );
};

export default AboutUs;