import { Link } from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';
import Header from '../../layout/Header/Header.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef, useState} from 'react';
import { useGSAP } from '@gsap/react';
import overview from '../../data/business/overview.json';
import clsx from 'clsx';
import { Button } from 'japark-react-components';

gsap.registerPlugin(ScrollTrigger);

const sectionLinks = [
 { to: '/', label: 'ECO-FRIENDLY INNOVATION' },
 { to: '/', label: 'INK TECHNOLOGY' },
 { to: '/', label: 'SUSTAINABLE MANUFACTURING' },
 { to: '/', label: 'PARTNERSHIP & GROWTH' }
];

const contentSections = [
 [
  {
   number: '01',
   title: '지속 가능한 친환경 기술',
   desc:
    '비전라이프는 무폐수 디지털 나염을 통해\n80% 물 절감 & 탄소 배출 50% 감소를 실현합니다. 친환경 공정으로 지속 가능한 섬유 산업을 선도합니다.'
  },
  {
   number: '02',
   title: '친환경 인증 & 글로벌 기준 준수',
   desc:
    'OEKO-TEX®, GOTS 등 국제 친환경 인증을 획득하여, 글로벌 시장에서도 신뢰할 수 있는 품질을 제공합니다.'
  },
  { number: '03', title: 'Title', desc: 'Description' }
 ],
 [
  {
   number: '01',
   title: '고품질 & 내구성 강화된 잉크',
   desc:
    'N-RECT 친환경 수성 잉크는 기존 잉크보다 더 선명한 색감과 뛰어난 내구성을 제공합니다.'
  },
  {
   number: '02',
   title: '빠른 흡수력 & 최적의 컬러 품질',
   desc:
    '최적의 흡수 속도로 번짐 없이 섬유 표면 깊숙이 스며들어 고품질의 프린팅을 구현합니다.'
  },
  { number: '03', title: 'Title', desc: 'Description' }
 ],
 [
  {
   number: '01',
   title: '공정 간소화 & 비용 절감',
   desc:
    '전처리 & 후처리 과정이 필요 없는 효율적인 디지털 나염 공정으로 생산 비용과 에너지를 절감할 수 있습니다.'
  },
  {
   number: '02',
   title: '다양한 원단에 적용 가능',
   desc:
    '면, 폴리에스터, 나일론 등 다양한 원단에서도 일관된 품질을 유지합니다.'
  },
  { number: '03', title: 'Title', desc: 'Description' }
 ],
 [
  {
   number: '01',
   title: '글로벌 브랜드와 협력',
   desc:
    '비전라이프는 B2B 파트너십을 통해 기업의 지속 가능한 성장과 브랜드 가치를 높이고 있습니다.'
  },
  {
   number: '02',
   title: '친환경 시장 진출 지원',
   desc:
    '친환경 패션 & 텍스타일 시장 진출을 원하는 기업에 맞춤형 솔루션을 제공합니다.'
  },
  { number: '03', title: 'Title', desc: 'Description' }
 ]
];

const Business = () => {
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const listRef = useRef<(HTMLLIElement | null)[]>([]);
 const detailRef = useRef<HTMLDivElement | null>(null);

 useGSAP(() => {
  listRef.current.forEach((el) => {
   if (el) {
    ScrollTrigger.create({
     trigger: el,
     start: 'top top',
     pin: true,
     pinSpacing: false
    });
   }
  });
 }, []);

 useGSAP(() => {
  if (activeIndex !== null && detailRef.current) {
   gsap.fromTo(
    detailRef.current,
    { x: '100%', autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out' }
   );
  }
 }, [activeIndex]);


 return (
  <>
   <Header />
   <PageLayout title='사업개요 페이지 본문' className='relative overflow-x-hidden'>
    <section className='z-1 [clip-path:polygon(0,0,0,100%,100% 100%, 100% 0)] relative min-h-[calc(100vh-67.98px)] w-full'>
     <ul className='h-full w-full'>
      {overview.data.map((item, index) => (
       <li
        key={index}
        className={clsx('relative top-0 h-screen')}
        ref={(el) => {
         if (el) listRef.current[index] = el;
        }}>
        {item.type === 'video' && (
         <video
          src={item.src}
          controls={false}
          className='h-screen object-cover brightness-70 filter'
          autoPlay
          loop
          muted
          playsInline
         />
        )}
        <div
         className={clsx(
          'absolute top-1/2 left-1/2 -translate-1/2',
          'text-center text-xl text-white'
         )}>
         <h2 className='mb-10 text-5xl leading-14 font-bold'>{item.title}</h2>
         <p className='mb-10 leading-8 whitespace-pre-line'>{item.content}</p>
         <Button className='border-3 border-white px-10 py-3 text-white' style='outlined' onClick={() => setActiveIndex(index)}>
          VIEW ALL
         </Button>
        </div>
       </li>
      ))}
     </ul>
    </section>
    <div className={clsx('absolute top-0 z-[999999]')}>
     <ul>
      {sectionLinks.map((link, idx) => (
       <li key={idx}>
        <Link to={link.to}>
         <span>{link.label}</span>
        </Link>
       </li>
      ))}
     </ul>
    </div>
    {activeIndex !== null && (
     <div
      ref={detailRef}
      className='absolute top-0 right-0 z-[999999] lg:w-[800px] h-full bg-white p-6 overflow-y-auto shadow-xl opacity-0'
     >
      <ul>
       {contentSections[activeIndex].map((item, j) => (
        <li key={j} className='mb-6'>
         <span className='text-primary text-3xl font-bold'>{item.number}</span>
         <h3 className='mt-2 text-2xl font-bold text-gray-800'>{item.title}</h3>
         <p className='mt-2 text-lg leading-relaxed text-gray-700 whitespace-pre-line'>
          {item.desc}
         </p>
        </li>
       ))}
      </ul>
      <Button onClick={() => {
       gsap.to(detailRef.current, {
        x: '100%',
        autoAlpha: 0,
        duration: 0.4,
        onComplete: () => setActiveIndex(null),
       });
      }} className='mt-6'>
       닫기
      </Button>
     </div>
    )}

   </PageLayout>
  </>
 );
};

export default Business;
