import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const NRect = () => {
 return (
  <GridLayout>
   <GridArticle>
    <div>
     <iframe
      width='100%'
      height='688'
      src='https://www.youtube.com/embed/nW0zr5_ty_4?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=nW0zr5_ty_4'
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen />
    </div>
    <h2 className="text-4xl font-bold text-gray-900">
     Reinventing Ink Innovation
     <br />
     <span className="text-xl text-gray-600">새롭게 잉크의 혁신을 만들다</span>
    </h2>

    <div className="text-lg text-gray-700 leading-relaxed mb-4">
     <p>
      비전라이프는 잉크의 한계를 넘어 최적의 컬러 품질과 섬세한 프린팅 기술을 결합한 N-RECT를 개발했습니다.
      최신 수성 기반 기술을 활용하여, 프린트 헤드 패스마다 고른 도포와 빠른 흡수력을 제공하며, 원단의 깊은 곳까지 스며들어 선명한 색감과 오랜 지속성을 보장합니다.
     </p>
     <p>
      기존 잉크보다 더 뛰어난 밀착력과 균형 잡힌 건조 속도를 갖춘 N-RECT는
      나일론뿐만 아니라 다양한 섬유 소재에서도 최상의 결과를 제공합니다.
      혁신적인 솔루션을 통해 새로운 인쇄 표준을 경험하세요.
     </p>
    </div>
   </GridArticle>

   {/* 기존 잉크와 비교 - 차별점 강조 */}
   <GridArticle>
    <h2 className="text-3xl font-bold text-gray-900">N-RECT vs 기존 잉크</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
     기존 잉크는 빠른 건조를 위해 높은 온도를 사용하지만, 두꺼운 표면 코팅으로 인해 원단의 자연스러운 질감을 손상시킬 수 있습니다. 또한, 대량의 물을 소비하고 폐수 배출이 불가피하여 환경에 부담을 줄 뿐만 아니라, 전처리 및 후처리 과정에서 추가적인 에너지와 비용이 발생합니다.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
     면, N-RECT는 친환경 수성 잉크 기반의 무폐수 공정을 통해 원단에 자연스럽게 스며들며, 보다 선명한 색상과 뛰어난 내구성을 제공합니다. 또한, 별도의 전처리 및 후처리 공정이 필요하지 않아 운영 비용 절감 및 생산 효율성 증가라는 경제적 장점까지 제공합니다.
    </p>

    {/* 테이블 비교 추가 */}
    <table className="mt-6 w-full text-left border-collapse border border-gray-300">
     <thead className="bg-gray-200">
     <tr>
      <th className="p-3 border border-gray-300">특징</th>
      <th className="p-3 border border-gray-300">기존 잉크</th>
      <th className="p-3 border border-gray-300">N-RECT</th>
     </tr>
     </thead>
     <tbody>
     <tr>
      <td className="p-3 border border-gray-300">건조 방식</td>
      <td className="p-3 border border-gray-300">고온 건조 (잉크 두꺼움)</td>
      <td className="p-3 border border-gray-300">저온 자연 건조 (섬유 친화적)</td>
     </tr>
     <tr>
      <td className="p-3 border border-gray-300">색감 지속력</td>
      <td className="p-3 border border-gray-300">변색 가능성 있음</td>
      <td className="p-3 border border-gray-300">고품질 색 유지</td>
     </tr>
     <tr>
      <td className="p-3 border border-gray-300">환경 영향</td>
      <td className="p-3 border border-gray-300">폐수 배출 多</td>
      <td className="p-3 border border-gray-300">무폐수 공정</td>
     </tr>
     </tbody>
    </table>
   </GridArticle>

   {/* 적용 가능 소재 & 사용처 */}
   <GridArticle>
    <h2 className="text-3xl font-bold text-gray-900">N-RECT 적용 가능 소재</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
     N-RECT 잉크는 나일론, 면, 폴리에스터, 인조가죽 등 다양한 섬유 소재에 최적화되어 있습니다.
     그러나, 특정 합성 코팅된 나일론 직물에서는 흡수율이 달라질 수 있어 테스트를 권장합니다.
    </p>

    <h3 className="mt-6 text-2xl font-semibold text-gray-900">사용 사례</h3>
    <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
     <li>스포츠웨어 & 기능성 의류</li>
     <li>친환경 가방 및 액세서리</li>
     <li>고급 맞춤형 텍스타일 인쇄</li>
     <li>자동차 시트 및 실내 소재</li>
    </ul>
   </GridArticle>

   <GridArticle>
    <h2 className="text-3xl font-bold text-gray-900 text-center">PROUTEX와 함께하는 최적의 프린팅 솔루션</h2>
    <p className="text-lg text-gray-700 leading-relaxed text-center mt-4">
     **N-RECT는 PROUTEX 전용으로 개발된 친환경 수성 잉크입니다.**
     최적의 흡수력과 균일한 도포를 제공하여 기존 프린팅 방식보다
     **더 선명하고, 지속성이 뛰어난 색상을 보장**합니다.
    </p>

    {/* 특징 2개 강조 */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-10 max-w-5xl mx-auto">
     <div className='p-6 border border-primary rounded-lg shadow-lg'>
      <h4 className='text-xl font-bold text-primary'># 친환경 공정</h4>
      <p className='text-gray-700 mt-3'>
       기존 프린팅 공정에서는 화학 처리와 폐수가 발생하지만,
       N-RECT는 **무폐수 염색**을 실현하여 환경 부담을 최소화합니다.
      </p>
     </div>
     <div className='p-6 border border-primary rounded-lg shadow-lg'>
      <h4 className='text-xl font-bold text-primary'># 뛰어난 색상 유지력</h4>
      <p className='text-gray-700 mt-3'>
       원단 표면에 깊숙이 스며들어 **색상이 쉽게 변하지 않으며**,
       기존보다 **더 선명한 표현과 긴 지속성을 제공합니다.**
      </p>
     </div>
    </div>
   </GridArticle>

   {/* 환경적 장점 강조 */}
   <GridArticle>
    <h2 className="text-3xl font-bold text-gray-900">환경적 장점</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
     기존의 잉크 공정은 막대한 물 소비와 폐수를 동반하지만, N-RECT는 무폐수 공정을 실현하여
     기존 대비 물 사용량을 80% 절감하고, 탄소 배출량을 50% 이상 감소시킵니다.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
     또한, OEKO-TEX® & GOTS 친환경 인증을 획득하여
     지속 가능한 섬유 생산을 지원하고 있습니다.
    </p>
   </GridArticle>

   <GridArticle>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
     비전라이프의 N-RECT 잉크는 고급 수성 잉크로, 섬유 친화적인 화학
     조성을 바탕으로 최적의 프린팅 품질을 보장합니다.
     여러 번의 프린트 헤드 패스를 통해 적용될 경우, 섬유 표면에 균일하게
     스며들며, 뛰어난 선명도와 내구성을 제공합니다.
     또한, 최적의 흡수 속도를 유지함으로써 색상의 왜곡 없이 자연스럽고 깊이
     있는 표현이 가능합니다.
    </p>
   </GridArticle>

   <GridArticle>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
     정밀한 잉크 적용 기술을 통해 최상의 결과를 제공합니다.
     한 번에 너무 많은 잉크가 적용될 경우, 섬유 표면에서 과도한 흘림
     (bleeding)이 발생할 수 있으며, 잉크가 완전히 건조되기 전에 확산될 위험이 있습니다.
     이러한 문제를 방지하기 위해, N-RECT 잉크는 각 프린트 헤드 패스 간의
     균형을 유지하도록 설계되어 있으며, 잉크가 완벽하게 침투하면서도
     번짐 없이 유지될 수 있도록 개발되었습니다.
    </p>
   </GridArticle>
   <GridArticle>
    <p className="text-lg text-gray-700 leading-relaxed">
     N-RECT 잉크는 나일론 섬유에 최적화되어 있으며, 일반적인 면, 폴리에스터 섬유에도 우수한 성능을 보입니다.
     그러나 폴리우레탄 또는 특정 합성 코팅된 나일론 직물에서는 잉크의 흡수율이
     달라질 수 있으므로, 적용 전에 충분한 테스트를 권장합니다.
    </p>
    <p>
     비전라이프는 지속 가능한 소재와 최첨단 프린팅 기술을 결합하여, 더욱
     혁신적인 출력 솔루션을 제공합니다.
    </p>
   </GridArticle>

   {/* Call to Action */}
   <GridArticle>
    <h2 className="text-3xl font-bold text-gray-900">PROUTEX와 함께 최고의 프린팅을 경험하세요</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
     N-RECT는 PROUTEX 디지털 프린터와 함께 사용해야 최상의 결과를 제공합니다.
     지금 PROUTEX를 확인하고, 친환경 섬유 염색 솔루션을 만나보세요.
    </p>
    <div className="flex gap-6 mt-8 justify-center">
     <a href="/proutex" className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg">
      PROUTEX 디지털 프린터 보기
     </a>
    </div>
   </GridArticle>
  </GridLayout>
 );
};

export default NRect;