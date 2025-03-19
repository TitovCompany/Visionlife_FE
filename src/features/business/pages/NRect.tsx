import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import clsx from 'clsx';
import LinkCard from '../../../components/Card/LinkCard.tsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {useRef, useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import ExpandingCard from '../../../components/Card/Expanding/ExpandingCard.tsx';
import ExpandingCardItem from '../../../components/Card/Expanding/ExpandingCardItem.tsx';
import NrectTable from '../components/NRECT/NrectTable.tsx';

const nrec_use = [
 {id: 1, title: '스포츠웨어 & 기능성 의류', href: '/img/business/nrect/p2.webp'},
 {id: 2, title: '친환경 가방 및 액세서리', href: '/img/business/nrect/p5.webp'},
 {id: 3, title: '고급 맞춤형 텍스타일 인쇄', href: '/img/business/nrect/p4.webp'},
 {id: 4, title: '자동차 시트 및 실내 소재', href: '/img/business/nrect/p3.webp'},
]

gsap.registerPlugin(ScrollTrigger);
const NRect = () => {
 const [material, setMaterial] = useState<string>('적용 가능 소재');

 const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
 const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

 useGSAP(() => {
  const tl = gsap.timeline();
  textRefs.current.forEach((el, index) => {
   if (el) {
    tl.fromTo(
     el,
     { opacity: 0, y: 20 },
     { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
     index * 5 // 5초 간격으로 등장
    );
   }
  });

  gsap.fromTo(heroTitleRef.current, {
   opacity: 0,
   y: 200,
  }, {
   opacity: 1,
   duration: 2,
   y: 0,
  })
 }, [])

 // min-h-[calc(100vh-67.98px)]
 return (
   <GridLayout>
    {/* Hero */}
    <GridArticle className='relative overflow-hidden'>
     <video src='/video/ink.mp4' controls={false} className='min-h-screen object-cover' autoPlay loop muted playsInline />
     <div className='absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center'>
      <h2 ref={heroTitleRef} className='text-primary text-center text-5xl font-bold'>
       Reinventing Ink Innovation
       <br />
       <span className='text-2xl text-gray-600'>
        새롭게 잉크의 혁신을 만들다
       </span>
      </h2>

      <div className='mx-auto mb-4 hidden max-w-xl text-center text-lg leading-relaxed text-gray-700'>
       <p>
        비전라이프는 잉크의 한계를 넘어 최적의 컬러 품질과 섬세한 프린팅 기술을
        결합한 N-RECT를 개발했습니다.
       </p>
       <p>
        최신 수성 기반 기술을 활용하여, 프린트 헤드 패스마다 고른 도포와 빠른
        흡수력을 제공하며, 원단의 깊은 곳까지 스며들어 선명한 색감과 오랜
        지속성을 보장합니다.
       </p>
       <p>
        기존 잉크보다 더 뛰어난 밀착력과 균형 잡힌 건조 속도를 갖춘 N-RECT은
        나일론뿐만 아니라 다양한 섬유 소재에서도 최상의 결과를 제공합니다.
       </p>
      </div>
     </div>
    </GridArticle>
    {/* 기존 잉크와 비교 - 차별점 강조 */}
    <GridArticle colStart={2} colEnd={6} className='pt-32 h-fit'>
     <div className='text-primary mb-12 text-4xl leading-14 font-bold'>
      <h2>기존 잉크의 한계를 넘어!</h2>
      <h2>N-RECT의 새로운 기준</h2>
     </div>
     <div className='text-lg leading-relaxed text-gray-700'>
      <p>
       기존의 잉크 공정은 빠른 건조를 위해 높은 온도를 사용하지만, 두꺼운 표면 코팅으로 인해 원단의 자연스러운 질감을 손상시키는 단점이 있습니다. 또한, 기존 방식은 대량의 물을 소비하고 폐수 배출이 불가피하여 환경적인 부담이 클 뿐만 아니라, 전처리 및 후처리 과정에서 추가적인 에너지와 비용이 발생하는 문제가 있습니다.
      </p>
      <p className='mt-10'>
       이러한 한계를 극복하기 위해 비전라이프홀딩스는 친환경 수성 잉크 기반의 무폐수 공정을 도입하여 N-RECT를 개발했습니다.
       이 공정은 원단에 자연스럽게 스며들어 보다 선명한 색상과 뛰어난 내구성을 제공합니다. 또한, 기존의 복잡한 전처리 및 후처리 과정이 필요하지 않아 운영 비용 절감 및 생산 효율성 증가라는 경제적 장점까지 제공합니다.
      </p>
     </div>
    </GridArticle>
    <img src='/img/business/nrect/p1.webp' alt='비전라이프가 해결하는 문제' className={clsx('mt-52 h-[800px] place-self-center col-start-7 col-end-12')} />
    <GridArticle colStart={2} colEnd={6} className='py-32'>
     <h2 className='text-primary hidden text-4xl font-bold'>사용 사례</h2>
     <ExpandingCard material={material}>
      {nrec_use.map((item) => (
       <ExpandingCardItem key={item.id} title={item.title} href={item.href}/>
      ))}
     </ExpandingCard>
    </GridArticle>
    {/* 환경적 장점 강조 */}
    <GridArticle colStart={7} colEnd={12} className='my-32'>
     <NrectTable className='mt-32 mb-16'/>
     <h2 className='text-primary hidden text-4xl font-bold'>환경적 장점</h2>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      기존의 잉크 공정은 막대한 물 소비와 폐수를 동반하지만, N-RECT는 무폐수
      공정을 실현하여 기존 대비 물 사용량을 80% 절감하고, 탄소 배출량을 50% 이상
      감소시킵니다.
     </p>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      또한, OEKO-TEX® & GOTS 친환경 인증을 획득하여 지속 가능한 섬유 생산을
      지원하고 있습니다.
     </p>
     <p className='mb-4 text-lg leading-relaxed text-gray-700'>
      비전라이프의 N-RECT 잉크는 고급 수성 잉크로, 섬유 친화적인 화학 조성을
      바탕으로 최적의 프린팅 품질을 보장합니다. 여러 번의 프린트 헤드 패스를
      통해 적용될 경우, 섬유 표면에 균일하게 스며들며, 뛰어난 선명도와 내구성을
      제공합니다. 또한, 최적의 흡수 속도를 유지함으로써 색상의 왜곡 없이
      자연스럽고 깊이 있는 표현이 가능합니다.
     </p>
     <p className='mb-4 text-lg leading-relaxed text-gray-700'>
      정밀한 잉크 적용 기술을 통해 최상의 결과를 제공합니다. 한 번에 너무 많은
      잉크가 적용될 경우, 섬유 표면에서 과도한 흘림 (bleeding)이 발생할 수
      있으며, 잉크가 완전히 건조되기 전에 확산될 위험이 있습니다. 이러한 문제를
      방지하기 위해, N-RECT 잉크는 각 프린트 헤드 패스 간의 균형을 유지하도록
      설계되어 있으며, 잉크가 완벽하게 침투하면서도 번짐 없이 유지될 수 있도록
      개발되었습니다.
     </p>
     <p className='text-lg leading-relaxed text-gray-700'>
      N-RECT 잉크는 나일론 섬유에 최적화되어 있으며, 일반적인 면, 폴리에스터
      섬유에도 우수한 성능을 보입니다. 그러나 폴리우레탄 또는 특정 합성 코팅된
      나일론 직물에서는 잉크의 흡수율이 달라질 수 있으므로, 적용 전에 충분한
      테스트를 권장합니다.
     </p>
    </GridArticle>
    {/* Pro Utex - Call to Action */}
    <GridArticle colStart={3} colEnd={7} className='py-32'>
     <Swiper
      pagination={{dynamicBullets: true,}}
      modules={[Pagination]}
      className="mySwiper overflow-hidden">
      <SwiperSlide>
       <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='친환경 공정' description='기존 프린팅 공정에서는 화학 처리와 폐수가 발생하지만, N-RECT는 무폐수 염색을 실현하여 환경 부담을 최소화합니다.'/>
      </SwiperSlide>
      <SwiperSlide>
       <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='뛰어난 색상 유지력' description='원단 표면에 깊숙이 스며들어 색상이 쉽게 변하지 않으며, 기존보다 더 선명한 표현과 긴 지속성을 제공합니다.'/>
      </SwiperSlide>
     </Swiper>
     <div className="text-3xl font-bold text-primary text-left">
      <h2 className="my-4">
       N-RECT × PROUTEX <br /> 완벽한 조합으로 차원이 다른 품질을 제공합니다!</h2>
     </div>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      비전라이프홀딩스의 N-RECT는 PROUTEX 전용으로 개발된 친환경 수성 잉크입니다.
      최적의 흡수력과 균일한 도포력을 제공하여 기존 프린팅 방식보다 더 선명하고, 더 뛰어난 지속성을 보장합니다.

      N-RECT는 기존의 프린팅 공정에서 발생하는 폐수 배출 및 환경 문제를 해결하면서도,
      고품질의 섬유 프린팅 솔루션을 제공하여 섬유 산업의 새로운 기준을 제시합니다.
     </p>
    </GridArticle>
    <GridArticle
     colStart={8}
     colEnd={11}
     className='bg-primary text-color place-self-center min-h-96 flex max-h-120 flex-col items-start justify-center gap-5 p-8 text-left text-lg leading-relaxed'>
     <p className='text-xl font-bold'>N-RECT 잉크는</p>
     <p>
      나일론, 면, 폴리에스터, 인조가죽 등 다양한 섬유 소재에 최적화되어
      있습니다.
     </p>
     <p>
      특정 합성 코팅된 나일론 직물에서는 흡수율이 달라질 수 있어 테스트를
      권장합니다.
     </p>
    </GridArticle>
    {/* 적용 가능 소재 & 사용처 */}
    {/*<GridArticle colStart={3} colEnd={7} className='py-32'>
     <h2 className='text-primary hidden text-4xl font-bold'>사용 사례</h2>
     <ExpandingCard material={material}>
      {nrec_use.map((item) => (
       <ExpandingCardItem key={item.id} title={item.title} href={item.href}/>
      ))}
     </ExpandingCard>
    </GridArticle>
    <GridArticle
     colStart={8}
     colEnd={11}
     className='bg-primary text-color flex max-h-120 flex-col items-start justify-center gap-5 p-8 text-left text-lg leading-relaxed'>
     <p className='text-xl font-bold'>N-RECT 잉크는</p>
     <p>
      나일론, 면, 폴리에스터, 인조가죽 등 다양한 섬유 소재에 최적화되어
      있습니다.
     </p>
     <p>
      특정 합성 코팅된 나일론 직물에서는 흡수율이 달라질 수 있어 테스트를
      권장합니다.
     </p>
    </GridArticle>*/}
    {/* Pro Utex - Call to Action */}
    {/*<GridArticle colStart={2} colEnd={6} className='py-32'>
     <Swiper
      pagination={{dynamicBullets: true,}}
      modules={[Pagination]}
      className="mySwiper overflow-hidden">
      <SwiperSlide>
       <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='친환경 공정' description='기존 프린팅 공정에서는 화학 처리와 폐수가 발생하지만, N-RECT는 무폐수 염색을 실현하여 환경 부담을 최소화합니다.'/>
      </SwiperSlide>
      <SwiperSlide>
       <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='뛰어난 색상 유지력' description='원단 표면에 깊숙이 스며들어 색상이 쉽게 변하지 않으며, 기존보다 더 선명한 표현과 긴 지속성을 제공합니다.'/>
      </SwiperSlide>
     </Swiper>
     <div className="text-3xl font-bold text-primary text-left">
      <h2 className="my-4">N-RECT × PROUTEX <br /> 완벽한 조합으로 차원이 다른 품질</h2>
     </div>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      N-RECT는 PROUTEX 전용으로 개발된 친환경 수성 잉크입니다. 최적의 흡수력과
      균일한 도포를 제공하여 기존 프린팅 방식보다 더 선명하고, 지속성이 뛰어난
      색상을 보장합니다.
     </p>
    </GridArticle>*/}
    {/* 환경적 장점 강조 */}
    {/*<GridArticle colStart={7} colEnd={12}>
     <h2 className='text-primary hidden text-4xl font-bold'>환경적 장점</h2>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      기존의 잉크 공정은 막대한 물 소비와 폐수를 동반하지만, N-RECT는 무폐수
      공정을 실현하여 기존 대비 물 사용량을 80% 절감하고, 탄소 배출량을 50% 이상
      감소시킵니다.
     </p>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      또한, OEKO-TEX® & GOTS 친환경 인증을 획득하여 지속 가능한 섬유 생산을
      지원하고 있습니다.
     </p>
     <p className='mb-4 text-lg leading-relaxed text-gray-700'>
      비전라이프의 N-RECT 잉크는 고급 수성 잉크로, 섬유 친화적인 화학 조성을
      바탕으로 최적의 프린팅 품질을 보장합니다. 여러 번의 프린트 헤드 패스를
      통해 적용될 경우, 섬유 표면에 균일하게 스며들며, 뛰어난 선명도와 내구성을
      제공합니다. 또한, 최적의 흡수 속도를 유지함으로써 색상의 왜곡 없이
      자연스럽고 깊이 있는 표현이 가능합니다.
     </p>
     <p className='mb-4 text-lg leading-relaxed text-gray-700'>
      정밀한 잉크 적용 기술을 통해 최상의 결과를 제공합니다. 한 번에 너무 많은
      잉크가 적용될 경우, 섬유 표면에서 과도한 흘림 (bleeding)이 발생할 수
      있으며, 잉크가 완전히 건조되기 전에 확산될 위험이 있습니다. 이러한 문제를
      방지하기 위해, N-RECT 잉크는 각 프린트 헤드 패스 간의 균형을 유지하도록
      설계되어 있으며, 잉크가 완벽하게 침투하면서도 번짐 없이 유지될 수 있도록
      개발되었습니다.
     </p>
     <p className='text-lg leading-relaxed text-gray-700'>
      N-RECT 잉크는 나일론 섬유에 최적화되어 있으며, 일반적인 면, 폴리에스터
      섬유에도 우수한 성능을 보입니다. 그러나 폴리우레탄 또는 특정 합성 코팅된
      나일론 직물에서는 잉크의 흡수율이 달라질 수 있으므로, 적용 전에 충분한
      테스트를 권장합니다.
     </p>
    </GridArticle>*/}
   </GridLayout>
 );
};

export default NRect;