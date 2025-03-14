import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const CEO = () => {
 return (
  <GridLayout>
   <h2 className='col-span-12 col-start-2 text-3xl font-bold text-gray-900 mt-20 mb-5'>
    대표이사 <span className='text-primary'>차무현</span>
   </h2>
   {/* CEO 이미지 */}
   <GridArticle colStart={2} colEnd={6}>
    <div className='overflow-hidden rounded-xl shadow-lg'>
     <img
      src='/img/profile/ceo.webp'
      alt='CEO'
      className='h-full w-full object-cover'
     />
    </div>
   </GridArticle>
   {/* CEO 소개 */}
   <GridArticle colStart={7} colEnd={12}>
    <div className='max-w-md'>
     <h3 className='mt-2 text-xl font-semibold text-gray-700 md:text-2xl'>
      폐수 없는 잉크, 지속 가능한 선택
     </h3>

     <p className='mt-4 leading-relaxed text-gray-600'>
      우리는 잉크를 단순한 ‘색’이 아닌, 환경을 책임지는 기술로 생각합니다. 잉크
      한 방울에도 우리의 미래가 담겨 있어야 합니다.
     </p>
     <p className='mt-3 leading-relaxed text-gray-600'>
      <span className='text-primary font-semibold'>비전라이프</span>는 폐수
      없이 생산되는 친환경 잉크 기술을 통해 인쇄 산업의 패러다임을 바꾸고
      있습니다. 나일론을 사용하지 않으며, 환경에 부담을 주지 않는 지속 가능한
      솔루션을 개발하고 있습니다.
     </p>
     <p className='mt-3 leading-relaxed text-gray-600'>
      환경 보호와 산업 발전이 함께할 수 있도록, 우리는 기술 혁신을 통해
      현실적인 대안을 만들어 갑니다.
     </p>
     <p className='mt-5 text-lg font-semibold text-gray-800'>
      더 나은 미래를 위한 선택, 비전라이프와 함께하세요.
     </p>
    </div>
   </GridArticle>
   {/* CEO 철학 */}
   <GridArticle colStart={2} colEnd={12}>
    <h2 className='mt-20 text-left text-4xl font-bold text-gray-900'>
     CEO의 철학
    </h2>
    <p className='mt-6 text-left text-gray-700'>
     비전라이프는 친환경 기술과 산업 발전이 공존할 수 있다고 믿습니다. 우리는
     환경을 보호하는 것이 경제적 성장을 저해하는 요소가 아니라, 미래 산업을
     선도하는 혁신적인 기회가 될 수 있다고 확신합니다. 지속 가능한 선택이
     단순한 트렌드가 아닌, 우리 모두의 필수적인 책임이 되어야 합니다. 이에
     비전라이프는 무폐수 염색 기술, 친환경 소재 연구, 저탄소 제조 공정을 통해
     환경에 미치는 영향을 최소화하면서도 산업이 지속 성장할 수 있는 현실적인
     대안을 제시합니다. 우리는 기술 혁신을 통해 보다 깨끗한 지구, 보다 지속
     가능한 사회를 만들어 나가고자 합니다. 미래를 위한 변화, 비전라이프와
     함께하세요.
    </p>
   </GridArticle>
   <GridArticle colStart={2} colEnd={12}>
    <div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-3'>
     {/* 지속 가능성 (Sustainability) */}
     <div className='bg-primary rounded-lg p-6 text-white shadow-md'>
      <h3 className='text-xl font-bold'>Sustainability</h3>
      <p className='mt-2'>
       지속 가능성은 선택이 아닌 필수입니다. 비전라이프는 무폐수 염색 기술과
       친환경 소재 연구를 통해 환경 오염을 줄이고, 산업이 지속 성장할 수 있는
       기반을 마련합니다. 우리는 보다 지속 가능한 생산 방식을 실현하기 위해
       노력하고 있습니다.
      </p>
     </div>

     {/* 혁신 (Innovation) */}
     <div className='bg-primary rounded-lg p-6 text-white shadow-md'>
      <h3 className='text-xl font-bold'>Innovation</h3>
      <p className='mt-2'>
       혁신은 우리가 나아가는 길을 밝히는 원동력입니다. 비전라이프는 전통적인
       염색 방식의 한계를 극복하고, 무독성 잉크, 친환경 나염기술, 저탄소
       제조공정을 통해 지속 가능성을 극대화하는 새로운 패러다임을 만들어가고
       있습니다.
      </p>
     </div>

     {/* 책임 (Responsibility) */}
     <div className='bg-primary rounded-lg p-6 text-white shadow-md'>
      <h3 className='text-xl font-bold'>Responsibility</h3>
      <p className='mt-2'>
       우리는 기업으로서 환경과 사회에 대한 책임을 다해야 합니다. 비전라이프는
       친환경 정책을 준수하고, 탄소 배출을 줄이며, 지속 가능한 솔루션을
       개발하는 데 앞장서고 있습니다. 환경 보호는 우리의 책임이며, 함께 실천할
       때 더 큰 변화를 만들 수 있습니다.
      </p>
     </div>
    </div>
   </GridArticle>
  </GridLayout>
 );
};

export default CEO;