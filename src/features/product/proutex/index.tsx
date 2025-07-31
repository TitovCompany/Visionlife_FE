import Header from '../../../layout/Header/Header.tsx';
import PageLayout from '../../../layout/PageLayout.tsx';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import LinkCard from '../../../components/Card/LinkCard.tsx';

gsap.registerPlugin(ScrollTrigger);
const ProUtex = () => {
 const sectionRef = useRef<HTMLDivElement | null>(null);
 const heroRef = useRef<HTMLDivElement>(null);
 const headerRef = useRef<(HTMLDivElement | null)[]>([]);
 const revealRefs = useRef<HTMLElement[]>([]);

 const addToRefs = (el: HTMLElement | null) => {
  if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
 };

 useGSAP(() => {
  const tl = gsap.timeline();
  tl
   .fromTo(
    heroRef.current,
    {
     y: window.innerHeight * 0.55,
     maxWidth: '95%',
     scale: 0.8,
    },
    {
     y: 0,
     //maxWidth: '100%',
     scale: 1,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: heroRef.current,
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      markers: true,
     },
    }
   )
   .fromTo(
    headerRef.current[0],
    {
     scale: 7.5, // 300px ≒ 40px * 7.5
    },
    {
     scale: 1,
     duration: 1.2,
     ease: 'none',
     scrollTrigger: {
      trigger: headerRef.current[0],
      start: 'top bottom',
      end: 'top center',
      scrub: true,
      // markers: true,
     },
    }
   )
   .fromTo(
    headerRef.current[1],
    {
     y: 200,
     opacity: 0,
    },
    {
     y: 0,
     opacity: 1,
     duration: 1.2,
     scrollTrigger: {
      trigger: headerRef.current[1],
      start: 'top bottom',
      end: 'top center',
      scrub: true,
     },
    }
   )
   .fromTo(
    headerRef.current[2],
    {
     y: 200,
    },
    {
     y: 0,
     duration: 1.2,
     scrollTrigger: {
      trigger: headerRef.current[2],
      start: 'top bottom',
      end: 'top center',
      scrub: true,
     },
    }
   );

  revealRefs.current.forEach((el) => {
   gsap.fromTo(
    el,
    {opacity: 0, y: 100},
    {
     opacity: 1,
     y: 0,
     duration: 1.2,
     ease: 'power2.out',
     scrollTrigger: {
      trigger: el,
      start: 'top 85%', // 화면 아래쪽에서 시작
      toggleActions: 'play none none reverse',
     },
    }
   );
  });
 }, []);

 return (
  <>
   <Header />
   <PageLayout title='PRO-UTEX 소개 본문'>
    {/* Hero */}
    <section ref={sectionRef} className='relative mx-auto'>
     <div className='mx-auto w-full max-w-10/12 pt-32 pb-16 text-left font-bold'>
      <h2 className='text-primary text-7xl'>비전라이프의 PROUTEX</h2>
      <p className='mt-5 text-4xl text-gray-600'>
       차세대 친환경 디지털 나염 솔루션
      </p>
     </div>
     <div ref={heroRef} className='relative mx-auto'>
      <video
       src='/video/print.mp4'
       controls={false}
       className='min-h-screen object-cover brightness-70 filter'
       autoPlay
       loop
       muted
       playsInline
      />
      <div className='absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center text-white'>
       <h2 className='text-center text-5xl font-bold'>
        Shaping the Future of Textile Printing
        <br />
        <span className='text-2xl'>섬유 프린팅의 미래를 만들어갑니다</span>
       </h2>
      </div>
     </div>
    </section>

    {/* Contents */}
    <div className='relative mx-auto max-w-6xl pt-40'>
     {/* Intro */}
     <section className='flex h-screen w-full flex-col items-center justify-center text-center'>
      <h2
       className='text-primary mb-32 origin-top text-7xl leading-24 font-bold transition-transform [will-change:transform]'
       ref={(el) => {
        if (el) headerRef.current[0] = el;
       }}>
       더 깨끗한 미래,
       <br />
       프린팅 공정으로 완성하다
      </h2>
      <div className='mx-auto max-w-5xl text-2xl leading-10 text-gray-700'>
       <p
        ref={(el) => {
         if (el) headerRef.current[1] = el;
        }}>
        PROUTEX는 N-RECT 친환경 잉크를 사용하는 차세대 디지털 프린팅 기기입니다.
        <br />
        환경에 부담을 주는 폐수 발생과 고온 처리, 복잡한 후처리 단계를 줄여
        <br />
        지속 가능성과 생산성을 동시에 실현합니다.
       </p>
       <p
        ref={(el) => {
         if (el) headerRef.current[2] = el;
        }}
        className='mt-12'>
        PROUTEX는 단순한 프린터가 아니라 섬유 인쇄 공정 전체를 혁신하는
        친환경 솔루션입니다.
        <br />
        다양한 원단에서 뛰어난 발색과 정밀한 품질을 제공하며,
        글로벌 브랜드가 요구하는 고품질 기준을 충족합니다.
       </p>
      </div>
     </section>

     {/* 제품 차별화 */}
     <section className='text-2xl leading-relaxed text-gray-700'>
      <h2
       ref={addToRefs}
       className='text-primary mt-32 mb-20 text-left text-7xl leading-14 font-bold'>
       디지털 프린팅의 새로운 표준
      </h2>
      <p ref={addToRefs}>
       기존 섬유 프린팅 공정은 고온 처리, 복잡한 단계, 과도한 물 사용으로 인해
       환경 부담이 크고 생산 효율이 낮았습니다. 특히 나일론 섬유는 별도의
       염색 공정 없이는 직접 인쇄가 어려웠습니다.
      </p>
      <p ref={addToRefs} className='mt-12'>
       PROUTEX는 <strong>N-RECT 친환경 잉크</strong>를 사용하여
       전처리·후처리 없이 다양한 원단에 직접 인쇄할 수 있는
       <strong>무폐수 디지털 나염 솔루션</strong>입니다.
       공정을 단순화해 인력, 시간, 비용을 절감하면서도
       높은 발색 품질과 내구성을 제공합니다.
      </p>
     </section>

     <section className='pt-52 pb-32 text-2xl leading-relaxed text-gray-700'>
      <h2 ref={addToRefs} className='text-primary mb-10 text-7xl font-bold'>
       PROUTEX가 만드는 새로운 표준
      </h2>

      {/* 공정 혁신 */}
      <p ref={addToRefs} className='mt-10'>
       PROUTEX는 복잡한 전처리와 후처리를 없앤 간소화된 공정으로
       빠른 속도와 안정적인 출력을 제공하는 차세대 디지털 프린팅 기기입니다.
       불필요한 공정을 제거해 생산 비용과 시간을 절감하며,
       ESG 친화적인 생산 환경을 지원합니다.
      </p>

      {/* 다양한 활용성과 확장성 */}
      <p ref={addToRefs} className='mt-10'>
       한 대의 기기로 면, 나일론, 폴리에스터 등 다양한 원단을 처리할 수 있어
       소량 맞춤형 제작부터 대량 생산까지 모두 대응 가능합니다.
       PROUTEX는 유연한 생산 체계를 구축해 글로벌 브랜드의
       다양한 니즈를 충족합니다.
      </p>

      {/* 출력 품질과 기술력 */}
      <p ref={addToRefs} className='mt-10'>
       최적화된 프린트 헤드 제어와 잉크 분사 기술을 통해
       섬유에 정밀하게 잉크를 도포하여
       선명하고 안정적인 색 표현을 구현합니다.
       출력 속도와 품질을 모두 만족시키는 PROUTEX는
       기존 방식 대비 훨씬 효율적인 생산을 가능하게 합니다.
      </p>

      {/* 안정성과 유지보수 */}
      <p ref={addToRefs} className='mt-10'>
       유지보수가 편리하도록 설계된 PROUTEX는
       장시간 출력에도 안정적으로 작동하며,
       생산 라인의 효율성과 일관된 품질을 보장합니다.
      </p>

      {/* 글로벌 경쟁력 */}
      <p ref={addToRefs} className='mt-10'>
       PROUTEX는 친환경 공정을 기반으로 하여
       글로벌 환경 규제와 다양한 시장 요구에 대응할 수 있는
       경쟁력 있는 솔루션을 제공합니다.
      </p>
     </section>

     {/* 친환경을 넘어서는 품질 */}
     <section className='pt-52 pb-32'>
      <div className='text-left text-2xl leading-relaxed text-gray-700'>
       <h2 ref={addToRefs} className='text-primary mb-12 text-7xl font-bold'>
        친환경을 넘어서는 출력 품질
       </h2>

       <p ref={addToRefs}>
        PROUTEX는 무폐수 공정을 지원하여 환경에 부담을 주지 않으면서도,
        기존 공정보다 물 사용량을 80% 이상 절감하고 탄소 배출을 절반 수준으로 줄입니다.
       </p>

       <p ref={addToRefs} className='mt-6'>
        최적화된 프린트 헤드 제어와 정밀한 잉크 분사 기술을 통해
        고속 출력에서도 번짐 없이 선명하고 안정적인 색 표현을 유지합니다.
        글로벌 친환경 인증을 충족하는 잉크와 결합해,
        다양한 원단에서 높은 품질의 결과물을 제공합니다.
       </p>
      </div>
     </section>

     {/* PROUTEX - 삭제예정 */}
     <section id='proutex' className='pt-52 pb-32 text-left'>
      <h2 ref={addToRefs} className='text-primary mb-12 text-7xl font-bold'>
       PROUTEX × N-RECT, 품질과 공정 안정성을 높이는 기술력
      </h2>
      <div className='mb-16 text-2xl leading-relaxed text-gray-700'>
       <p ref={addToRefs} className='mt-4'>
        고급 수성 포뮬러를 기반으로 개발된 N-RECT는 섬유 표면에 균일하게
        도포되며 깊숙이 침투하여, 고채도 컬러에서도 색상 왜곡 없이 정밀한 표현이
        가능합니다. 또한, 흘림(Bleeding) 방지를 위한 정밀 도포 기술이 적용되어
        재작업률을 낮추고 생산 라인의 효율을 극대화합니다.
       </p>
       <p ref={addToRefs} className='mt-6'>
        PROUTEX 시스템을 위한 전용 잉크로 설계된 N-RECT는 출력 속도, 도포
        정밀도, 색상 유지력에서 탁월한 시너지를 발휘합니다. 전용 하드웨어와 함께
        사용할 때, 최상의 품질과 공정 안정성을 동시에 실현할 수 있습니다.
       </p>
       <p ref={addToRefs} className='mt-6'>
        N-RECT는 나일론, 면, 폴리에스터 등 다양한 섬유에 최적화되어 있으며, 특수
        코팅 섬유의 경우 사전 테스트를 권장합니다.
       </p>
      </div>
      <Swiper
       pagination={{dynamicBullets: true}}
       modules={[Pagination]}
       className='mySwiper overflow-hidden'>
       <SwiperSlide>
        <LinkCard
         bgImage='bg-[url("/img/business/nrect/p1.webp")]'
         title='친환경 공정'
         description='기존 프린팅 공정에서는 화학 처리와 폐수가 발생하지만, N-RECT는 무폐수 염색을 실현하여 환경 부담을 최소화합니다.'
        />
       </SwiperSlide>
       <SwiperSlide>
        <LinkCard
         bgImage='bg-[url("/img/business/nrect/p1.webp")]'
         title='뛰어난 색상 유지력'
         description='원단 표면에 깊숙이 스며들어 색상이 쉽게 변하지 않으며, 기존보다 더 선명한 표현과 긴 지속성을 제공합니다.'
        />
       </SwiperSlide>
      </Swiper>
     </section>
    </div>
   </PageLayout>
  </>
 );
};

export default ProUtex;