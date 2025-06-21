import clsx from 'clsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
// 'col-span-12 lg:col-span-10 lg:col-start-2'
const EcoLife = () => {
 return (
  /* Todo 상단으로 끌어 올리기 */
  <GridLayout className={clsx('relative text-center',)}>
   {/* 메인 타이틀 */}
   <GridArticle colStart={2} colEnd={7} className={clsx('text-primary mt-32',)}>
    <div className="w-fit text-primary text-5xl font-bold leading-20 text-left">
     <h2>비전라이프의</h2>
     <h2 className='ml-10'>기술이 만드는</h2>
     <h2 className='ml-32'>ECO Life</h2>
    </div>
    <p className="mt-24 mb-32 text-primary text-left text-xl max-w-2xl leading-relaxed">
     친환경적인 삶을 실천하는 것은 우리의 사명입니다.
     비전라이프는 섬유 산업의 지속 가능성을 위해 <strong>무폐수 염색 기술</strong>을 개발하여, 환경을 보호하면서도 뛰어난 품질을 유지하는 혁신을 이루고 있습니다.
     작은 선택이 큰 변화를 만듭니다. <strong>ECO Life를 함께 실천하세요.</strong>
    </p>
   </GridArticle>

   {/* 환경 보호 효과 */}
   <GridArticle colStart={8} colEnd={13} className={clsx('text-primary mt-10 p-6 text-left content-end')}>
    <h3 className="text-2xl font-bold mb-4">무폐수 염색 기술의 환경적 가치</h3>
    <p className="text-lg leading-relaxed">
     기존의 염색 공정은 <strong>막대한 양의 폐수</strong>를 발생시키며, 이는 환경 오염의 주요 원인이 되어 왔습니다.
     비전라이프는 이러한 문제를 해결하기 위해 <strong>무폐수 염색 기술</strong>을 개발하였으며, 이를 통해 물 소비를 획기적으로 줄이고 오염을 방지하는 데 기여하고 있습니다.
    </p>
   </GridArticle>

   {/* 지속 가능한 섬유 산업 */}
   <GridArticle colStart={6} colEnd={12} className={clsx('text-primary mt-10 mb-16 p-6 text-left')}>
    <h3 className="text-2xl font-bold mb-4">지속 가능한 섬유 산업을 위한 노력</h3>
    <p className="text-lg leading-relaxed">
     우리는 환경을 고려한 생산 방식을 도입하여 <strong>에너지 절감, 탄소 배출 감소</strong>와 같은 지속 가능한 목표를 실현하고 있습니다.
     비전라이프는 친환경 기술을 통해 섬유 산업의 새로운 표준을 제시하며, <strong>지속 가능한 소비와 생산</strong>을 가능하게 합니다.
    </p>
   </GridArticle>
  </GridLayout>
 );
};

export default EcoLife;