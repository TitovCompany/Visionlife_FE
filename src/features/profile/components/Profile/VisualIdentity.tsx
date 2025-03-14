import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);
const VisualIdentity = () => {
 const bgRef = useRef(null);
 const identityRef = useRef(null);

 useGSAP(() => {
  const tl = gsap.timeline();
  tl.to(bgRef.current, {
   y: 500,
   ease: 'none',
   scrollTrigger: {
    trigger: identityRef.current,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    markers: true,
   },
  });
 }, []);

 return (
  <section ref={identityRef} className={clsx('relative min-h-[182vh]', 'grid grid-cols-12', 'text-primary')}>
   {/*<img ref={bgRef} src='/img/business/p2.jpg' alt='' className='absolute top-0 right-0 -z-1 h-full w-full' />*/}
   {/* Identity */}
   <article className={clsx('mt-32 mb-20 ml-10 max-w-3xl text-left ', 'col-span-12 lg:col-span-10 lg:col-start-2')}>
    <h2 className='text-7xl font-bold'>Visual Identity</h2>
    <p className='mt-10 text-xl leading-8'>
     우리의 브랜드 아이덴티티는 지속 가능성과 혁신을 반영합니다.
     우리는 친환경 소재와 디자인을 결합하여 더욱 지속 가능한 미래를 만들어갑니다.
     모든 브랜드 요소는 환경과 조화를 이루며, 사용자와 소통하는 경험을 제공합니다.
    </p>
   </article>

   {/* Logo */}
   <article className={clsx('w-full py-10', 'col-span-12 lg:col-span-10 lg:col-start-2', 'flex')}>
    <img src="/img/logo.webp" alt="Vision Life Logo" />
    <div className='w-full h-full p-6'>
     <h2 className="text-2xl font-bold mb-4">Proutex 브랜드 아이덴티티</h2>
     <p className="text-lg leading-relaxed">
      Proutex의 로고는 Vision Life(VL)의 첫 글자를 형상화하여 브랜드의 정체성을 시각적으로 표현합니다.
      ‘V’와 ‘L’의 조합을 통해 기업의 핵심 가치를 담아내며, 두꺼운 서체와 기울어진 디자인으로 혁신성과 역동성을 강조합니다.
     </p>
     <p className="text-lg leading-relaxed mt-4">
      로고의 중심을 가로지르는 곡선 라인은 지속 가능성과 부드러운 흐름을 상징하며, Proutex 제품과 Vision Life 브랜드의 연결성을 시각적으로 표현합니다.
      또한, 배경 패턴은 Proutex 제품의 직물 또는 인쇄 기술을 반영한 텍스처로, 브랜드의 핵심 기술력을 강조하는 중요한 요소입니다.
     </p>
     <p className="text-lg leading-relaxed mt-4">
      컬러 아이덴티티는 브랜드 철학을 반영하여 골드는 프리미엄과 신뢰성을, 레드와 블루 조합은 에너제틱하면서도 전문적인 느낌을 부여합니다.
      이를 통해 Proutex는 차별화된 기술력과 지속 가능한 미래를 위한 혁신을 실현하는 브랜드임을 나타냅니다.
     </p>
    </div>
   </article>

   {/* Brand Meaning */}
   <article className={clsx('mt-32 mb-20 ml-10 max-w-4xl text-left ', 'col-span-12 lg:col-span-10 lg:col-start-2')}>
    <h2 className='text-7xl font-bold'>Brand Meaning</h2>
    <p className='mt-10 text-xl leading-8'>
     Vision Life는 단순한 제품을 넘어, 지속 가능한 기술과 혁신을 바탕으로 환경과 조화를 이루는 제품을 개발하는 브랜드입니다. 우리는 친환경적인 솔루션을 통해 지속 가능한 미래를 창조하는 것을 목표로 합니다.
    </p>
    <p className='mt-6 text-xl leading-8'>
     Vision Life의 모든 제품은 무폐수 공정과 친환경 소재를 기반으로 제작됩니다.
     이는 산업 발전과 환경 보호를 동시에 실현하려는 우리의 철학을 반영합니다.
    </p>
    <p className='mt-6 text-xl leading-8'>
     Proutex와 N-RECT는 이러한 가치 아래 탄생한 제품 라인으로, 각기 다른 방식으로 지속 가능성을 실현합니다. Proutex는 프리미엄 친환경 섬유를, N-RECT는 혁신적인 인쇄 기술을 통해 지속 가능한 패브릭 솔루션을 제공합니다.
    </p>
   </article>

   {/* Color */}
   <article className={clsx('w-full flex items-center justify-center gap-10 py-10', 'col-span-12 lg:col-span-10 lg:col-start-2')}>
    <ul className='flex flex-col gap-10'>
     <li className='flex justify-center items-center gap-6'>
      <div className='bg-primary h-48 w-48'></div>
      <div className='max-w-2xl'>
       <h3 className="text-2xl font-bold">Primary Color - #1a3027</h3>
       <p className="text-lg leading-relaxed mt-2">
        깊고 차분한 그린 계열 색상으로, 지속 가능성과 신뢰성을 표현합니다.
        자연 친화적인 브랜드 아이덴티티를 반영하며, 환경을 고려한 기술력을 강조합니다.
       </p>
      </div>
     </li>
     <li className='flex justify-center items-center gap-6'>
      <div className='bg-secondary h-48 w-48'></div>
      <div className='max-w-2xl'>
       <h3 className="text-2xl font-bold">Accent Color - #dbad7e</h3>
       <p className="text-lg leading-relaxed mt-2">
        따뜻한 골드 브라운 컬러로, 브랜드의 프리미엄 가치를 상징합니다.
        혁신적인 기술력과 고품질 제품을 강조하며, 세련되고 품격 있는 브랜드 이미지를 제공합니다.
       </p>
      </div>
     </li>
    </ul>
   </article>
  </section>
 );
};

export default VisualIdentity;