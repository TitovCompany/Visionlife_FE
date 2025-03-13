const CEO = () => {
 return (
  <>
   <section></section>
   <section className="mx-auto h-full min-h-screen max-w-7xl px-6 py-20 lg:px-12">
    <article className="w-full h-full flex flex-col justify-center items-center gap-10 md:flex-row">
     {/* CEO 이미지 */}
     <div className="overflow-hidden rounded-xl shadow-lg">
      <img src="/img/profile/ceo.webp" alt="CEO" className="h-full w-full object-cover" />
     </div>

     {/* CEO 소개 텍스트 */}
     <div className="max-w-md">
      <h2 className="text-3xl font-bold text-gray-900">
       대표이사 <span className="text-primary">차무현</span>
      </h2>

      <h3 className="mt-2 text-xl font-semibold text-gray-700 md:text-2xl">
       폐수 없는 잉크, 지속 가능한 선택
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
       우리는 잉크를 단순한 ‘색’이 아닌, 환경을 책임지는 기술로 생각합니다.
       잉크 한 방울에도 우리의 미래가 담겨 있어야 합니다.
      </p>
      <p className="mt-3 text-gray-600 leading-relaxed">
       <span className="font-semibold text-primary">비전라이프</span>는
       폐수 없이 생산되는 친환경 잉크 기술을 통해 인쇄 산업의 패러다임을 바꾸고 있습니다.
       나일론을 사용하지 않으며, 환경에 부담을 주지 않는 지속 가능한 솔루션을 개발하고 있습니다.
      </p>
      <p className="mt-3 text-gray-600 leading-relaxed">
       환경 보호와 산업 발전이 함께할 수 있도록, 우리는 기술 혁신을 통해 현실적인 대안을 만들어 갑니다.
      </p>
      <p className="mt-5 text-lg font-semibold text-gray-800">
       더 나은 미래를 위한 선택, 비전라이프와 함께하세요.
      </p>
     </div>
    </article>
    {/* SEO */}
    <ul className="hidden">
     <li>Eco-Friendly Ink</li>  {/* 친환경 잉크 */}
     <li>Wastewater-Free Printing</li>  {/* 무폐수 인쇄 */}
     <li>Sustainable Technology</li>  {/* 지속 가능한 기술 */}
     <li>Digital Textile Printing</li>  {/* 디지털 텍스타일 프린팅 */}
     <li>Environmentally Safe</li>  {/* 환경 친화적 */}
     <li>Waterless Ink</li>  {/* 무폐수 잉크 */}
     <li>Zero Discharge Printing</li>  {/* 폐수 배출 없는 인쇄 */}
     <li>Green Manufacturing</li>  {/* 친환경 제조 */}
     <li>Biodegradable Ink</li>  {/* 생분해성 잉크 */}
     <li>Non-Toxic Ink</li>  {/* 무독성 잉크 */}
     <li>Eco-Conscious Business</li>  {/* 친환경 기업 */}
     <li>Low Carbon Footprint</li>  {/* 저탄소 배출 */}
     <li>Innovation in Printing</li>  {/* 인쇄 기술 혁신 */}
     <li>Textile Industry Revolution</li>  {/* 섬유 산업 혁신 */}
     <li>Global Export</li>  {/* 글로벌 수출 */}
     <li>Sustainable Printing Solutions</li>  {/* 지속 가능한 인쇄 솔루션 */}
    </ul>

   </section>
  </>
 );
};

export default CEO;