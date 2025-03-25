import clsx from 'clsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import ColorList from './ColorList.tsx';

const BrandMeaning = () => {
 return (
  <GridLayout>
   {/* Brand Meaning */}
   <GridArticle colStart={2} colEnd={7} className={clsx('mt-32 mb-20 text-left ',)}>
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
   </GridArticle>

   {/* Color */}
   <GridArticle colStart={2} colEnd={7} className={clsx('mb-32 w-full mt-10',
    'content-center')}>
    <ul className='flex flex-col gap-10'>
     <ColorList color='primary' title='Primary Color - #1a3027'>
      깊고 차분한 그린 계열 색상으로, 지속 가능성과 신뢰성을 표현합니다.
      자연 친화적인 브랜드 아이덴티티를 반영하며, 환경을 고려한 기술력을 강조합니다.
     </ColorList>
     <ColorList color='accent' title='Accent Color - #dbad7e'>
      따뜻한 골드 브라운 컬러로, 브랜드의 프리미엄 가치를 상징합니다.
      혁신적인 기술력과 고품질 제품을 강조하며, 세련되고 품격 있는 브랜드 이미지를 제공합니다.
     </ColorList>
    </ul>
   </GridArticle>
  </GridLayout>
 );
};

export default BrandMeaning;