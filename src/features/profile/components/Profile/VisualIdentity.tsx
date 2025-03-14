const VisualIdentity = () => {
 return (
  <section className="pSection relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/img/business/p2.jpg')] text-center px-6">
   <article>
    <h2 className="text-white text-7xl font-bold">Visual Identity</h2>
    <p className="text-white text-lg max-w-2xl mt-4">
     우리의 브랜드 아이덴티티는 지속 가능성과 혁신을 상징합니다.
     친환경 소재와 디자인을 결합하여 더욱 지속 가능한 미래를 만들어갑니다.
    </p>
   </article>
   <article>
    <div className='w-96 h-96 bg-primary'></div>
    <div>브랜드 컬러 설명</div>
   </article>
  </section>
 );
};

export default VisualIdentity;