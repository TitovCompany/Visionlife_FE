import clsx from 'clsx';
import LinkCard from '../../../components/Card/LinkCard.tsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import ExpandingCard from '../../../components/Card/Expanding/ExpandingCard.tsx';
import ExpandingCardItem from '../../../components/Card/Expanding/ExpandingCardItem.tsx';

const nrec_use = [
 {id: 1, title: '스포츠웨어 & 기능성 의류', href: '/img/business/nrect/p2.webp'},
 {id: 2, title: '친환경 가방 및 액세서리', href: '/img/business/nrect/p5.webp'},
 {id: 3, title: '고급 맞춤형 텍스타일 인쇄', href: '/img/business/nrect/p4.webp'},
 {id: 4, title: '자동차 시트 및 실내 소재', href: '/img/business/nrect/p3.webp'},
]

gsap.registerPlugin(ScrollTrigger);
const NRect = () => {
 const sectionRef = useRef<HTMLDivElement | null>(null);
 const heroRef = useRef<HTMLDivElement>(null);
 const headerRef = useRef<(HTMLDivElement | null)[]>([]);
 const revealRefs = useRef<HTMLElement[]>([]);

 const addToRefs = (el: HTMLElement | null) => {
  if (el && !revealRefs.current.includes(el)) {
   revealRefs.current.push(el);
  }
 };


 useGSAP(() => {
  const tl = gsap.timeline();
  tl.fromTo(heroRef.current, {
   y: window.innerHeight * 0.55,
   maxWidth: '95%',
   scale: 0.8
  }, {
   y: 0,
   //maxWidth: '100%',
   scale: 1,
   ease: "power2.out",
   scrollTrigger: {
    trigger: heroRef.current,
    start: "top bottom",
    end: "top center",
    scrub: true,
    markers: true,
   }
  })
   .fromTo(headerRef.current[0], {
    scale: 7.5, // 300px ≒ 40px * 7.5
   }, {
    scale: 1,
    duration: 1.2,
    ease: "none",
    scrollTrigger: {
     trigger: headerRef.current[0],
     start: "top bottom",
     end: "top center",
     scrub: true,
     // markers: true,
    }
   })
   .fromTo(headerRef.current[1], {
    y: 200,
    opacity: 0
   }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
     trigger: headerRef.current[1],
     start: "top bottom",
     end: "top center",
     scrub: true,
    }
   })
   .fromTo(headerRef.current[2], {
    y: 200
   }, {
    y: 0,
    duration: 1.2,
    scrollTrigger: {
     trigger: headerRef.current[2],
     start: "top bottom",
     end: "top center",
     scrub: true,
    }
   })

  revealRefs.current.forEach((el) => {
   gsap.fromTo(el,
    { opacity: 0, y: 100 },
    {
     opacity: 1,
     y: 0,
     duration: 1.2,
     ease: "power2.out",
     scrollTrigger: {
      trigger: el,
      start: "top 85%", // 화면 아래쪽에서 시작
      toggleActions: "play none none reverse",
     },
    }
   );
  });
 }, [])

 /* Todo - 엔렉, 프로유텍스 레이아웃 통일 */
 /* Todo - 프로유텍스 워딩 개선 */
 return (
  <div ref={sectionRef}>
   {/* Hero */}
   <section className={clsx('w-full pt-32 font-bold text-left max-w-6xl mx-auto')}>
    <h2 className='text-primary text-5xl'>
     Reinventing Ink Innovation
    </h2>
    <p className='mt-5 text-2xl text-gray-600'>
     새롭게 잉크의 혁신을 만들다
    </p>
   </section>
   <section ref={heroRef} className='relative mx-auto'>
    <video src='/video/ink.mp4' controls={false} className=' min-h-screen object-cover filter brightness-70' autoPlay loop muted playsInline />
    <div className='absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center text-white'>
     <h2 className='text-center text-5xl font-bold'>
      Reinventing Ink Innovation
      <br />
      <span className='text-2xl'>
        새롭게 잉크의 혁신을 만들다
       </span>
     </h2>
   </div>
   </section>
   {/* Contents */}
   <div className='relative mx-auto max-w-6xl pt-40'>
    {/* Intro */}
    <div className='w-full text-center h-screen flex flex-col items-center justify-center'>
     <h2 ref={(el) => {
      if (el) headerRef.current[0] = el;
     }} className='text-[40px] origin-top text-primary font-bold transition-transform [will-change:transform] mb-32'
     >환경을 위한 기술,<br />제품으로 실현하다</h2>
     <p ref={(el) => {
      if (el) headerRef.current[1] = el;
     }} className='text-lg leading-relaxed text-gray-700 max-w-xl mx-auto'>
      비전라이프는 N-RECT를 통해 환경과 생산성을 동시에 고려한 혁신 솔루션을 제공합니다.
      기존 공정에서 발생하는 폐수, 고온처리, 복잡한 후처리 문제를 줄이고, 지속 가능성을 실현합니다.
     </p>
     <p ref={(el) => {
      if (el) headerRef.current[2] = el;
     }} className='w-full mt-12 text-lg leading-relaxed text-gray-700 max-w-xl mx-auto'>
      N-RECT는 단순한 잉크가 아닌, 공정 전체를 혁신하는 친환경 기술입니다.
      수질 오염을 줄이고, 섬유 본연의 품질을 유지하면서도 뛰어난 출력 결과를 제공합니다.
     </p>
    </div>

    {/* 제품 차별화 */}
    <section className='text-lg text-primary'>
     <div ref={addToRefs} className=' mt-32 mb-8 text-4xl leading-14 font-bold text-left'>
      <h2>기존 잉크의 한계를 넘어!</h2>
     </div>
     <div className='mb-32 flex gap-5'>
      <div className='flex flex-col justify-between gap-10 leading-relaxed text-gray-700 text-lg'>
       <p ref={addToRefs}>
        전통적인 텍스타일 프린팅은 고온 처리, 복잡한 공정, 과도한 물 소비 등으로 인해 환경과 생산성 모두에 부담을 줍니다.
        특히 나일론 섬유는 직접 인쇄가 어려워 별도의 염색 공정이 필수였습니다.
       </p>
       <p ref={addToRefs}>
        N-RECT는 나일론 섬유에도 직접 인쇄가 가능한 수성 에코잉크로, 전처리·후처리 없는 무폐수 공정을 실현합니다.
        공정 단순화를 통해 인력, 시간, 비용을 절감하고, 높은 색상 정밀도와 내구성을 제공합니다.
       </p>
       <img src='/img/business/nrect/p1.webp' alt='비전라이프가 해결하는 문제'
            className={clsx('h-96 w-full place-self-center rounded-xl')} />
      </div>
      <img src='/img/business/p1.jpg' alt='비전라이프가 해결하는 문제'
           className={clsx('h-[700px] w-1/2 place-self-center rounded-xl')} />
     </div>
    </section>

    {/* 환경 + 품질 중심 정리 */}
    <section className='py-32'>
     <h2 ref={addToRefs} className='text-4xl font-bold text-primary mb-10'>환경적 책임을 실현하는 기술</h2>
     {/* 환경적 효과 강조 */}
     <p ref={addToRefs} className='mt-4 text-lg leading-relaxed text-gray-700'>
      N-RECT는 폐수를 발생시키지 않는 무폐수 공정 기반의 수성 잉크입니다.
      기존 공정 대비 물 사용량 80% 절감, 탄소 배출 50% 이상 감소 효과를 실현하며,
      환경 규제 대응과 지속 가능성을 동시에 만족시킵니다.
     </p>

     {/* 인증 및 신뢰 요소 */}
     <p ref={addToRefs} className='mt-4 text-lg leading-relaxed text-gray-700'>
      또한, OEKO-TEX® 및 GOTS 친환경 인증을 획득해, 지속 가능한 섬유 생산을 위한 기준을 충족했습니다.
      글로벌 브랜드의 환경 기준에 대응할 수 있는 수준의 품질과 안정성을 보장합니다.
     </p>

     {/* 품질 설명 + 기술 근거 */}
     <p ref={addToRefs} className='mt-10 text-lg leading-relaxed text-gray-700'>
      고급 수성 포뮬러를 바탕으로 제작된 N-RECT는 섬유 표면에 균일하게 도포되며, 반복 프린팅에도 색상이 선명하고 내구성이 뛰어납니다.
      최적의 흡수 속도를 유지해 색 왜곡 없이 자연스러운 컬러 표현이 가능하고, 번짐 현상 없이 정밀한 프린팅 결과를 제공합니다.
     </p>

     {/* 기술 설계 설명 */}
     <p ref={addToRefs} className='mt-4 text-lg leading-relaxed text-gray-700'>
      과도한 잉크 사용 시 발생하는 흘림(Bleeding) 현상을 방지하기 위해,
      프린트 헤드 간의 도포 균형이 정밀하게 제어되도록 설계되었습니다.
      이는 생산 공정의 안정성과 재작업률 감소에 기여합니다.
     </p>

     {/* 소재별 적용 안내 */}
     <p ref={addToRefs} className='mt-4 text-lg leading-relaxed text-gray-700'>
      N-RECT는 나일론 섬유에 최적화되어 있으며, 면 및 폴리에스터와 같은 일반 섬유에서도 탁월한 성능을 발휘합니다.
      단, 폴리우레탄 또는 특수 코팅 섬유의 경우 사전 테스트를 권장합니다.
     </p>
    </section>

    {/* 친환경을 넘어서는 품질 */}
    <section className='py-32'>
     <div className='text-left'>
      <h2 ref={addToRefs} className='text-4xl font-bold text-primary mb-10'>
       친환경을 넘어서는 품질
      </h2>
      <p ref={addToRefs} className='text-lg leading-relaxed text-gray-700'>
       N-RECT는 수질 오염의 주범인 폐수 발생을 원천 차단합니다.
       물 사용량을 기존 대비 80% 이상 절감하고, 탄소 배출량도 절반 수준으로 줄였습니다.
      </p>
      <p ref={addToRefs} className='mt-6 text-lg leading-relaxed text-gray-700'>
       OEKO-TEX® 및 GOTS 인증을 통해 친환경 기준을 충족했으며,
       고속 출력에서도 잉크 번짐 없이 선명한 색상을 유지합니다.
      </p>
     </div>

     <ExpandingCard>
      {nrec_use.map((item) => (
       <ExpandingCardItem key={item.id} title={item.title} href={item.href} />
      ))}
     </ExpandingCard>
    </section>

    {/* PROUTEX */}
    <section id='proutex'>
     <div className='pt-32 pb-12'>
      <div className="text-3xl font-bold text-primary text-left">
       <h2 ref={addToRefs} className="my-4">
        PROUTEX × N-RECT, 품질과 공정 안정성을 높이는 기술력
       </h2>
      </div>
      <p ref={addToRefs} className='mt-4 text-lg leading-relaxed text-gray-700'>
       고급 수성 포뮬러를 기반으로 개발된 N-RECT는 섬유 표면에 균일하게 도포되며 깊숙이 침투하여,
       고채도 컬러에서도 색상 왜곡 없이 정밀한 표현이 가능합니다.
       또한, 흘림(Bleeding) 방지를 위한 정밀 도포 기술이 적용되어
       재작업률을 낮추고 생산 라인의 효율을 극대화합니다.
      </p>
      <p ref={addToRefs} className='mt-6 text-lg leading-relaxed text-gray-700'>
       PROUTEX 시스템을 위한 전용 잉크로 설계된 N-RECT는
       출력 속도, 도포 정밀도, 색상 유지력에서 탁월한 시너지를 발휘합니다.
       전용 하드웨어와 함께 사용할 때, 최상의 품질과 공정 안정성을 동시에 실현할 수 있습니다.
      </p>
      <p ref={addToRefs} className='mt-6 text-lg leading-relaxed text-gray-700'>
       N-RECT는 나일론, 면, 폴리에스터 등 다양한 섬유에 최적화되어 있으며,
       특수 코팅 섬유의 경우 사전 테스트를 권장합니다.
      </p>
     </div>
     <Swiper
      pagination={{dynamicBullets: true,}}
      modules={[Pagination]}
      className="mySwiper overflow-hidden">
      <SwiperSlide>
       <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='친환경 공정'
                 description='기존 프린팅 공정에서는 화학 처리와 폐수가 발생하지만, N-RECT는 무폐수 염색을 실현하여 환경 부담을 최소화합니다.' />
      </SwiperSlide>
      <SwiperSlide>
       <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='뛰어난 색상 유지력'
                 description='원단 표면에 깊숙이 스며들어 색상이 쉽게 변하지 않으며, 기존보다 더 선명한 표현과 긴 지속성을 제공합니다.' />
      </SwiperSlide>
     </Swiper>
    </section>
   </div>
  </div>
 );
};

export default NRect;