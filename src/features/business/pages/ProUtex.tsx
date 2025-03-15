import UtexOverview from '../components/UtexOverview.tsx';
import UtexFeatures from '../components/UtexFeatures.tsx';
import UtexComparison from '../components/UtexComparison.tsx';
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const ProUtex = () => {
 const sectionRef = useRef(null);
 useScrollAnimation('.biz_item', 'top 90%');
 return (
  <div className='overflow-x-hidden'>
   <video
    src='/video/print.mp4'
    controls={false}
    autoPlay
    loop
    muted
    playsInline
   />
   <UtexOverview ref={sectionRef} />
   <div className='w-full px-4 pt-12 pb-10 text-left text-2xl font-semibold'>
    <p className='border-b-primary text-primary mx-1 mb-3 w-fit border-b pb-1 text-left text-sm font-bold'>
     #친환경 디지털 프린팅 기기
    </p>
    <h3 className='text-3xl leading-10'>
     비전라이프의 <span className='text-primary'>PROUTEX</span>
     <br />
     친환경 섬유 염색 솔루션
    </h3>
   </div>

   {/* PROUTEX 개요 */}
   <div className='w-full max-w-4xl text-lg text-gray-700 leading-relaxed'>
    <p className='mb-6'>
     PROUTEX는 <strong>N-RECT 친환경 잉크</strong>를 사용하여,
     무폐수 공정과 뛰어난 품질의 디지털 나염을 구현하는 프린팅 기기입니다.
     기존 대비 더 빠른 속도, 낮은 잉크 소비량, 높은 품질을 제공합니다.
    </p>
    <p className='mb-6'>
     기존 디지털 프린팅 공정이 <strong>전처리/후처리 과정</strong>이 필요한 반면,
     PROUTEX는 출력과 동시에 염색이 완료되므로,
     <strong>생산 속도가 빠르고 환경 오염이 발생하지 않습니다.</strong>
    </p>
   </div>

   {/* 핵심 기술 소개 */}
   <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-10">
    <div className='p-6 border border-primary rounded-lg shadow-lg'>
     <h4 className='text-xl font-bold text-primary'># 전처리 無</h4>
     <p className='text-gray-700 mt-3'>
      기존 디지털 프린팅 공정에서는 전처리(코팅)가 필수지만,
      PROUTEX는 별도의 전처리 없이 원단에 직접 염색이 가능합니다.
     </p>
    </div>
    <div className='p-6 border border-primary rounded-lg shadow-lg'>
     <h4 className='text-xl font-bold text-primary'># 후처리 無</h4>
     <p className='text-gray-700 mt-3'>
      일반적인 프린팅 방식은 증열, 수세 과정이 필요하여 폐수가 발생하지만,
      PROUTEX는 출력과 동시에 색상이 고정되어, 후처리 공정이 필요 없습니다.
     </p>
    </div>
   </div>

   {/* 콜 투 액션 */}
   <div className="flex gap-6 mt-8">
    <a href="/n-rect" className="px-6 py-3 bg-primary text-white rounded-lg">
     PROUTEX 전용 잉크 N-RECT 보기
    </a>
   </div>
   {/* 4가지 장점 */}
   {/*{bizPoint.data.map((item, index) => (
      <BusinessPoint
       key={index}
       point={item.point}
       title={item.title}
       src={item.src}
       isReversed={item.isReversed}
      />
     ))}*/}
   <UtexFeatures ref={sectionRef} />
   <UtexComparison ref={sectionRef} />
  </div>
 );
};

export default ProUtex;