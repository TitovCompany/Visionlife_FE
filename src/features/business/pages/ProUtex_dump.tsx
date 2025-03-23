import features from '../../../data/business/utex_features.json';
import ImageCard from '../../../components/ImageCard.tsx';
import comparison from '../../../data/business/utex_comparison.json';
import {Link} from 'react-router-dom';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const ProUtex = () => {
 const sectionRef = useRef<HTMLDivElement | null>(null);
 return (
  <div ref={sectionRef}>
   {/* Hero */}
   <section className='relative'>
    <video
     src='/video/print.mp4'
     controls={false}
     className='min-h-[calc(100vh-67.98px)] object-cover'
     autoPlay
     loop
     muted
     playsInline
    />
    <h2 className='absolute top-1/2 left-1/2 w-full max-w-5xl -translate-1/2 pb-4 text-center text-2xl leading-normal font-bold text-white md:pb-8 md:text-5xl'>
     PROUTEX
     <br />
     친환경 섬유 염색의 새로운 기준
    </h2>
   </section>
   <section>
    <img src='/img/product/p3.png' alt='기기명 Coltex' className='h-[300px] w-full object-cover md:h-[530px] lg:rounded-lg' />
    <div>
     <div className='w-full pt-12 pb-10 text-left text-2xl font-semibold'>
      <h3 className='text-3xl leading-10'>
       비전라이프의 <span className='text-primary'>PROUTEX</span>
       <br />
       친환경 섬유 염색 솔루션
      </h3>
     </div>
     <div className='text-lg leading-8'>
      <p className='mb-6'>
       PROUTEX는 N-RECT 친환경 수성 잉크를 사용하는 디지털 프린팅 솔루션입니다.
       무폐수 공정을 통해 환경 부담을 줄이면서도 빠른 출력, 낮은 잉크 소비, 고품질 결과물을 제공합니다.

       일반적인 면, 폴리에스터, 나일론 원단에도 최적화되어 있어 다양한 소재에서 안정적인 출력 품질을 유지할 수 있습니다.
      </p>
     </div>
    </div>
    <Swiper
     pagination={{dynamicBullets: true,}}
     modules={[Pagination]}
     className="mySwiper overflow-hidden">
     {features.items.map((item, index) => (
      <SwiperSlide key={item.id}>
       <ImageCard
        as='div'
        title={item.title}
        animation={true}
        src={`/img/product/features/p${index + 1}.png`}
        alt={item.title}
        description={item.content}
        wrapperClass='biz_item group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500 max-h-96 max-w-96'
        descriptionClass='mt-2 whitespace-pre-line leading-relaxed text-sm sm:text-base' />
      </SwiperSlide>
     ))}
    </Swiper>
    <div className='flex'>

    </div>
   </section>
   {/* PROUTEX Intro */}
   <section>
    <div className='border-primary rounded-lg border p-6 shadow-lg'>
     <h4 className='text-primary text-xl font-bold'># 전처리 無</h4>
     <p className='mt-3 text-gray-700'>
      기존 디지털 프린팅 공정에서는 전처리(코팅)가 필수지만, PROUTEX는 별도의
      전처리 없이 원단에 직접 염색이 가능합니다.
     </p>
    </div>
    <div className='border-primary rounded-lg border p-6 shadow-lg'>
     <h4 className='text-primary text-xl font-bold'># 후처리 無</h4>
     <p className='mt-3 text-gray-700'>
      일반적인 프린팅 방식은 증열, 수세 과정이 필요하여 폐수가 발생하지만,
      PROUTEX는 출력과 동시에 색상이 고정되어, 후처리 공정이 필요 없습니다.
     </p>
    </div>
   </section>
   <section>
    <p>PROUTEX는 원단의 종류에 관계없이 단일 잉크로 나염이 가능하여, 다양한 소재에서도 일관된 품질을 유지할 수 있습니다. 또한, 전사지를 사용하지 않는 공정을 채택함으로써 출력(프린팅) 과정과 후처리 공정을 단축할 수 있어 효율성이 뛰어납니다.

     기존 나염 공법을 적용한 제품과 비교했을 때, PROUTEX는 생산 원가 절감 효과가 우수하며, 나염에 소요되는 시간을 대폭 줄여 더욱 빠른 생산이 가능합니다. 뿐만 아니라, 초고속 염색 속도를 통해 대량 생산을 지원하면서도 디지털 디자인을 직접 출력할 수 있어 맞춤형 소량 생산에도 적합한 솔루션을 제공합니다.</p>
    <Link to='/' className='bg-primary rounded-lg px-6 py-3 text-white'>
     PROUTEX 전용 잉크 N-RECT 보기
    </Link>
   </section>
   {/* 기존 공정 & PROUTEX 공정 */}
   <section>
    <div className='text-primary pb-6 text-right text-3xl font-bold'>
     <h3 className='mb-3'>고속 출력 & 무폐수 공정</h3>
     <h3 className='mb-3'>PROUTEX 디지털 프린팅 공정</h3>
    </div>
    <div className='biz_item bg-primary-50 border-primary flex flex-col items-center gap-6 rounded-lg border p-6 shadow-md'>
     <img
      src='/img/product/compare/p4.png'
      alt='출력과 동시에 염색 완료'
      className='h-full w-full rounded-lg object-cover'
     />
     <div>
      <h4 className='text-primary text-lg font-bold'>
       출력과 동시에 염색 완료
      </h4>
      <p className='text-sm text-gray-700 md:text-lg'>
       별도의 전처리나 후처리 없이 원단에 직접 염색이 이루어지므로 생산 속도가
       빠르고, 환경 오염이 발생하지 않습니다.
      </p>
     </div>
    </div>
   </section>
   <section>
    <div className='pb-6 text-left text-2xl font-semibold'>
     <p className='border-b-primary text-primary mb-3 w-fit border-b px-1 pb-1 text-left text-sm font-bold'>
      #일반 디지털 프린팅의 한계
     </p>
     <h3>기존 디지털 프린팅 공정</h3>
     <p className='text-gray-600'>잉크 소비량 증가 & 색상 선명도 저하</p>
    </div>
    <div className='flex'>
     {comparison.items[0].steps.map((step, idx) => (
      <div
       key={step.id}
       className='flex flex-col items-center gap-6 rounded-lg bg-white shadow-md'>
       <img
        src={`/img/product/compare/p${idx + 1}.png`}
        alt={step.content}
        className='h-full w-full rounded-lg object-cover'
       />
       <div>
        <h4 className='text-lg font-bold'>{step.content}</h4>
        <p className='text-sm text-gray-600 md:text-lg'>{step.description}</p>
       </div>
      </div>
     ))}
    </div>
   </section>
  </div>
 );
};

export default ProUtex;