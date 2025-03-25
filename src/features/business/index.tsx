import {Link} from 'react-router-dom';
import PageLayout from '../../layout/PageLayout.tsx';
import Header from '../../layout/Header/Header.tsx';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import overview from '../../data/business/overview.json';
import clsx from 'clsx';
import {Button} from 'japark-react-components';

gsap.registerPlugin(ScrollTrigger);
const Business = () => {
 const listRef = useRef<(HTMLLIElement | null)[]>([]);

 useGSAP(() => {
  listRef.current.forEach((el) => {
   if (el) {
    ScrollTrigger.create({
     trigger: el,
     start: 'top top',
     pin: true,
     pinSpacing: false,
    });
   }
  });
 }, []);

 return (
  <>
   <Header />
   <PageLayout title='사업개요 페이지 본문'>
    <div className='relative z-1'>
     <div className='relative'>
      <section className='[clip-path:polygon(0,0,0,100%,100% 100%, 100% 0)] relative h-[calc(100vh-67.98px)] w-full'>
       <ul className='h-full w-full'>
        {overview.data.map((item, index) => (
         <li
          key={index}
          className={clsx('relative top-0 h-screen')}
          ref={(el) => {
           if (el) listRef.current[index] = el;
          }}>
          <div>
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
           {item.type === 'image' && (
            <img
             src={item.src}
             alt=''
             className={clsx(
              'h-screen w-full object-cover brightness-70 filter'
             )}
            />
           )}
          </div>
          <div
           className={clsx(
            'absolute top-1/2 left-1/2 -translate-1/2',
            'text-center text-xl text-white'
           )}>
           <h2 className='mb-10 text-5xl leading-14 font-bold'>{item.title}</h2>
           <p className='mb-10 leading-8 whitespace-pre-line'>{item.content}</p>
           <Button
            className='border-3 border-white px-10 py-3 text-white'
            style='outlined'>
            VIEW ALL
           </Button>
          </div>
         </li>
        ))}
       </ul>
      </section>
     </div>
    </div>
    <div className={clsx('hidden')}>
     <ul>
      <li>
       <Link to='/'>
        <span>ECO-FRIENDLY INNOVATION</span>
       </Link>
      </li>
      <li>
       <Link to='/'>
        <span>INK TECHNOLOGY</span>
       </Link>
      </li>
      <li>
       <Link to='/'>
        <span>SUSTAINABLE MANUFACTURING</span>
       </Link>
      </li>
      <li>
       <Link to='/'>
        <span>PARTNERSHIP & GROWTH</span>
       </Link>
      </li>
     </ul>
    </div>
    <div className={clsx('hidden')}>
     {/* ECO-FRIENDLY INNOVATION */}
     <ul>
      <li>
       <span>01</span>
       <h3>지속 가능한 친환경 기술</h3>
       <p>
        비전라이프는 무폐수 디지털 나염을 통해
        <strong>80% 물 절감 & 탄소 배출 50% 감소</strong>를 실현합니다. 친환경
        공정으로 지속 가능한 섬유 산업을 선도합니다.
       </p>
      </li>
      <li>
       <span>02</span>
       <h3>친환경 인증 & 글로벌 기준 준수</h3>
       <p>
        OEKO-TEX®, GOTS 등 <strong>국제 친환경 인증</strong>을 획득하여, 글로벌
        시장에서도 신뢰할 수 있는 품질을 제공합니다.
       </p>
      </li>
      <li>
       <span>03</span>
       <h3>Title</h3>
       <p>Description</p>
      </li>
     </ul>
     {/* INK TECHNOLOGY */}
     <ul>
      <li>
       <span className='text-primary text-3xl font-bold'>01</span>
       <h3 className='mt-2 text-2xl font-bold text-gray-800'>
        고품질 & 내구성 강화된 잉크
       </h3>
       <p className='mt-2 text-lg leading-relaxed text-gray-700'>
        <strong>N-RECT 친환경 수성 잉크</strong>는 기존 잉크보다 더 선명한
        색감과 뛰어난 내구성을 제공합니다.
       </p>
      </li>
      <li>
       <span className='text-primary text-3xl font-bold'>02</span>
       <h3 className='mt-2 text-2xl font-bold text-gray-800'>
        빠른 흡수력 & 최적의 컬러 품질
       </h3>
       <p className='mt-2 text-lg leading-relaxed text-gray-700'>
        최적의 흡수 속도로 번짐 없이 <strong>섬유 표면 깊숙이 스며들어</strong>
        고품질의 프린팅을 구현합니다.
       </p>
      </li>
      <li>
       <span>03</span>
       <h3>Title</h3>
       <p>Description</p>
      </li>
     </ul>
     {/* SUSTAINABLE MANUFACTURING */}
     <ul>
      <li>
       <span className='text-primary text-3xl font-bold'>01</span>
       <h3 className='mt-2 text-2xl font-bold text-gray-800'>
        공정 간소화 & 비용 절감
       </h3>
       <p className='mt-2 text-lg leading-relaxed text-gray-700'>
        전처리 & 후처리 과정이 필요 없는
        <strong>효율적인 디지털 나염 공정</strong>으로 생산 비용과 에너지를
        절감할 수 있습니다.
       </p>
      </li>
      <li>
       <span className='text-primary text-3xl font-bold'>02</span>
       <h3 className='mt-2 text-2xl font-bold text-gray-800'>
        다양한 원단에 적용 가능
       </h3>
       <p className='mt-2 text-lg leading-relaxed text-gray-700'>
        면, 폴리에스터, 나일론 등 다양한 원단에서도 **일관된 품질**을
        유지합니다.
       </p>
      </li>
      <li>
       <span>03</span>
       <h3>Title</h3>
       <p>Description</p>
      </li>
     </ul>
     {/* PARTNERSHIP & GROWTH */}
     <ul>
      <li>
       <span className='text-primary text-3xl font-bold'>01</span>
       <h3 className='mt-2 text-2xl font-bold text-gray-800'>
        글로벌 브랜드와 협력
       </h3>
       <p className='mt-2 text-lg leading-relaxed text-gray-700'>
        비전라이프는 <strong>B2B 파트너십</strong>을 통해 기업의 지속 가능한
        성장과 브랜드 가치를 높이고 있습니다.
       </p>
      </li>
      <li>
       <span className='text-primary text-3xl font-bold'>02</span>
       <h3 className='mt-2 text-2xl font-bold text-gray-800'>
        친환경 시장 진출 지원
       </h3>
       <p className='mt-2 text-lg leading-relaxed text-gray-700'>
        친환경 패션 & 텍스타일 시장 진출을 원하는 기업에 맞춤형 솔루션을
        제공합니다.
       </p>
      </li>
      <li>
       <span>03</span>
       <h3>Title</h3>
       <p>Description</p>
      </li>
     </ul>
    </div>
   </PageLayout>
  </>
 );
};

export default Business;