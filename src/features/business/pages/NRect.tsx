import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import clsx from 'clsx';
import LinkCard from '../../../Card/LinkCard.tsx';

const nrec_use = [
 {id: 1, title: '스포츠웨어 & 기능성 의류', href: '/img/business/nrect/p2.webp'},
 {id: 2, title: '친환경 가방 및 액세서리', href: '/img/business/nrect/p5.webp'},
 {id: 3, title: '고급 맞춤형 텍스타일 인쇄', href: '/img/business/nrect/p4.webp'},
 {id: 4, title: '자동차 시트 및 실내 소재', href: '/img/business/nrect/p3.webp'},
]

const NRect = () => {
 return (
  <>
   {/* Hero */}
   <GridLayout>
    <GridArticle className='relative'>
     <video
      src='/video/ink.mp4'
      controls={false}
      className='min-h-[calc(100vh-67.98px)] object-cover'
      autoPlay
      loop
      muted
      playsInline
     />
     <div className='absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center'>
      <h2 className='text-primary text-center text-5xl font-bold'>
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
   </GridLayout>
   {/* 기존 잉크와 비교 - 차별점 강조 */}
   <GridLayout className='py-32'>
    <GridArticle colStart={2} colEnd={7}>
     <div className='text-primary mb-12 text-4xl leading-14 font-bold'>
      <h2>기존 잉크의 한계를 넘어!</h2>
      <h2>N-RECT의 새로운 기준</h2>
     </div>
     <div className='text-lg leading-relaxed text-gray-700'>
      <p>
       기존 잉크는 빠른 건조를 위해 높은 온도를 사용하지만, 두꺼운 표면 코팅으로
       인해 원단의 자연스러운 질감을 손상시킬 수 있습니다. 또한, 대량의 물을
       소비하고 폐수 배출이 불가피하여 환경에 부담을 줄 뿐만 아니라, 전처리 및
       후처리 과정에서 추가적인 에너지와 비용이 발생합니다.
      </p>
      <p className='mt-10'>
       면, N-RECT는 친환경 수성 잉크 기반의 무폐수 공정을 통해 원단에 자연스럽게
       스며들며, 보다 선명한 색상과 뛰어난 내구성을 제공합니다. 또한, 별도의
       전처리 및 후처리 공정이 필요하지 않아 운영 비용 절감 및 생산 효율성
       증가라는 경제적 장점까지 제공합니다.
      </p>
     </div>
     {/* 테이블 비교 추가 */}
     <table className='mt-12 w-full border-collapse border border-gray-300 text-left'>
      <thead className='bg-gray-200'>
       <tr>
        <th className='border border-gray-300 p-3'>특징</th>
        <th className='border border-gray-300 p-3'>기존 잉크</th>
        <th className='border border-gray-300 p-3'>N-RECT</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td className='border border-gray-300 p-3'>건조 방식</td>
        <td className='border border-gray-300 p-3'>고온 건조 (잉크 두꺼움)</td>
        <td className='border border-gray-300 p-3'>
         저온 자연 건조 (섬유 친화적)
        </td>
       </tr>
       <tr>
        <td className='border border-gray-300 p-3'>색감 지속력</td>
        <td className='border border-gray-300 p-3'>변색 가능성 있음</td>
        <td className='border border-gray-300 p-3'>고품질 색 유지</td>
       </tr>
       <tr>
        <td className='border border-gray-300 p-3'>환경 영향</td>
        <td className='border border-gray-300 p-3'>폐수 배출 多</td>
        <td className='border border-gray-300 p-3'>무폐수 공정</td>
       </tr>
      </tbody>
     </table>
    </GridArticle>
    <img
     src='/img/business/nrect/p1.webp'
     alt='비전라이프가 해결하는 문제'
     className={clsx('col-start-7 col-end-13 h-[700px] translate-x-12')}
    />
   </GridLayout>
   {/* 적용 가능 소재 & 사용처 */}
   <GridLayout className='max-h-[640px] py-32'>
    <GridArticle colStart={3} colEnd={7}>
     <h2 className='text-primary hidden text-4xl font-bold'>사용 사례</h2>
     <ul
      className={clsx(
       'mt-4 list-disc pl-6 text-lg text-gray-700',
       'flex flex-nowrap',
       '-translate-y-32'
      )}>
      {nrec_use.map((item) => (
       <li key={item.id}>
        <h3 className='hidden'>{item.title}</h3>
        <img
         src={item.href}
         alt={item.title}
         className='h-[600px] object-cover'
        />
       </li>
      ))}
     </ul>
    </GridArticle>
    <GridArticle
     colStart={8}
     colEnd={11}
     className='bg-primary text-color flex min-h-96 flex-col items-center justify-center gap-5 p-8 text-center text-lg leading-relaxed'>
     <h2 className='text-primary hidden text-4xl font-bold'>
      N-RECT 적용 가능 소재
     </h2>
     <p>N-RECT 잉크는</p>
     <p>
      나일론, 면, 폴리에스터, 인조가죽 등 다양한 섬유 소재에 최적화되어
      있습니다.
     </p>
     <p>
      특정 합성 코팅된 나일론 직물에서는 흡수율이 달라질 수 있어 테스트를
      권장합니다.
     </p>
    </GridArticle>
   </GridLayout>
   {/* 환경적 장점 강조 */}
   <GridLayout className='py-32'>
    <img src='/img/business/nrect/p4.webp' alt='환경적 장점' className='col-span-5 object-cover'/>
    <GridArticle colStart={7} colEnd={12}>
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
   </GridLayout>
   {/* Pro Utex - Call to Action */}
   <GridLayout className='py-32'>
    <GridArticle colStart={2} colEnd={7}>
     {/*<div className='text-3xl font-bold text-primary'>
      <h2 className='my-4'>PROUTEX와 함께하는 최적의 프린팅 솔루션</h2>
      <h2 className='my-4'>PROUTEX와 함께 최고의 프린팅을 경험하세요</h2>
      <h2 className='my-4'>N-RECT은 PROUTEX 디지털 프린터와 함께 사용해야 최상의 결과를 제공합니다</h2>
      <h2 className='my-4'>지금 PROUTEX를 확인하고, 친환경 섬유 염색 솔루션을 만나보세요</h2>
     </div>*/}
     <div className="text-3xl font-bold text-primary text-left">
      {/*<h2 className="my-4">PROUTEX와 함께 <br /> 최적의 프린팅 솔루션을 경험하세요</h2>
      <h2 className="my-4">선명한 색상, 친환경 공정 <br /> PROUTEX에서 시작됩니다</h2>
      <h2 className="my-4">더 깨끗하게, 더 선명하게 <br /> PROUTEX가 만들어갑니다</h2>*/}
      <h2 className="my-4">N-RECT × PROUTEX <br /> 완벽한 조합으로 차원이 다른 품질</h2>
     </div>
     <p className='mt-4 text-lg leading-relaxed text-gray-700'>
      N-RECT는 PROUTEX 전용으로 개발된 친환경 수성 잉크입니다. 최적의 흡수력과
      균일한 도포를 제공하여 기존 프린팅 방식보다 더 선명하고, 지속성이 뛰어난
      색상을 보장합니다.
     </p>
    </GridArticle>
    <GridArticle colStart={8} colEnd={12} className='flex flex-nowrap'>
     <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='친환경 공정' description='기존 프린팅 공정에서는 화학 처리와 폐수가 발생하지만, N-RECT는 무폐수 염색을 실현하여 환경 부담을 최소화합니다.'/>
     <LinkCard bgImage='bg-[url("/img/business/nrect/p1.webp")]' title='뛰어난 색상 유지력' description='원단 표면에 깊숙이 스며들어 색상이 쉽게 변하지 않으며, 기존보다 더 선명한 표현과 긴 지속성을 제공합니다.'/>
    </GridArticle>
   </GridLayout>
  </>
 );
};

export default NRect;