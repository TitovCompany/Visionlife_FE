import GridArticle from '../../layout/Grid/GridArticle.tsx';
import {Link} from 'react-router-dom';
import comparison from '../../data/business/utex_comparison.json';
import GridLayout from '../../layout/Grid/GridLayout.tsx';
import Header from '../../layout/Header/Header.tsx';
import PageLayout from '../../layout/PageLayout.tsx';

const ProUtex = () => {
 return (
  <>
   <Header />
   <PageLayout title='Pro-UTEX 소개 본문'>
    <GridLayout>
     {/* Hero */}
     <GridArticle className='pt-52 relative'>
      <h2 className='w-full mx-auto max-w-11/12 pb-4 text-left text-2xl leading-normal font-bold text-primary md:pb-8 md:text-7xl mb-10'>
       <p>비전라이프의 PROUTEX</p>
       <p>친환경 섬유 염색 솔루션</p>
      </h2>
      <video
       src='/video/print.mp4'
       controls={false}
       className='w-full h-150 object-cover'
       autoPlay
       loop
       muted
       playsInline
      />
     </GridArticle>

     {/* PRO UTEX*/}
     <GridArticle colStart={2} colEnd={12} className='pt-52 flex flex-col items-start justify-center'>
      <h2 className='w-full pt-12 pb-10 text-left font-semibold md:text-7xl leading-10'>
       PROUTEX
      </h2>
      <div className='text-2xl leading-12'>
       <p className='mb-6'>
        PROUTEX는 <strong>N-RECT 친환경 잉크</strong>를 사용하여, 무폐수 공정과
        뛰어난 품질의 디지털 나염을 구현하는 프린팅 기기입니다.<br/>기존 대비 더 빠른
        속도, 낮은 잉크 소비량, 높은 품질을 제공합니다.
       </p>
       <p className='mb-6'>
        PROUTEX는 무폐수 공정을 지원하여 환경 부담을 줄이며, 일반적인 면, 폴리에스터, 나일론 원단에 최적화된 고품질 출력이 가능합니다.
       </p>
      </div>

      <div className='mt-16 flex gap-10'>
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
      </div>
     </GridArticle>

     {/* 일반 프린트의 한계 */}
     <GridArticle colStart={2} colEnd={12}>
      <div className='text-left text-7xl font-bold mt-32 mb-16'>
       <h3 className='mb-5'>기존 디지털 프린팅의 한계</h3>
       <p className='text-4xl text-gray-600'>잉크 소비량 증가 & 색상 선명도 저하</p>
      </div>
      <div className='flex'>
       {comparison.items[0].steps.map((step, idx) => (
        <div
         key={step.id}
         className='flex flex-col items-center gap-6 rounded-lg bg-white shadow-md'>
         <img
          src={`/img/product/compare/p${idx + 1}.webp`}
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
     </GridArticle>

     {/* PROUTEX 공정 */}
     <GridArticle colStart={2} colEnd={12} className='my-32 flex flex-col gap-10'>
      {/* Header */}
      <h2 className='text-primary pb-6 text-right md:text-7xl font-bold'>PROUTEX 디지털 프린팅 공정</h2>
      <div className='flex gap-10'>
       <div className='flex flex-col'>
        <img src='/img/product/compare/p4.webp' alt='출력과 동시에 염색 완료' className='h-full w-full rounded-lg object-cover' />
        <h3 className='text-primary text-2xl font-bold'>
         출력과 동시에 염색 완료
        </h3>
        <p className='text-lg text-gray-700'>
         별도의 전처리나 후처리 없이 원단에 직접 염색이 이루어지므로 생산 속도가
         빠르고, 환경 오염이 발생하지 않습니다.
        </p>
       </div>

       <div className='max-w-3xl text-2xl leading-8'>
        <p>PROUTEX는 원단의 종류에 관계없이 단일 잉크로 나염이 가능하여, 다양한 소재에서도 일관된 품질을 유지할 수 있습니다. 또한, 전사지를 사용하지 않는 공정을 채택함으로써 출력(프린팅) 과정과 후처리 공정을 단축할 수 있어 효율성이 뛰어납니다.

         기존 나염 공법을 적용한 제품과 비교했을 때, PROUTEX는 생산 원가 절감 효과가 우수하며, 나염에 소요되는 시간을 대폭 줄여 더욱 빠른 생산이 가능합니다. 뿐만 아니라, 초고속 염색 속도를 통해 대량 생산을 지원하면서도 디지털 디자인을 직접 출력할 수 있어 맞춤형 소량 생산에도 적합한 솔루션을 제공합니다.</p>
        <Link to='/' className='mt-10 block bg-primary rounded-lg px-6 py-3 text-white'>
         PROUTEX 전용 잉크 N-RECT 보기
        </Link>
       </div>
      </div>
     </GridArticle>
    </GridLayout>
   </PageLayout>
  </>
 );
};

export default ProUtex;