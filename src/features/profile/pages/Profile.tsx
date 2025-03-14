import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
 return (
  <div className='bg-color/20'>
   <h1 className="pt-32 pb-20 text-center text-primary text-[200px] font-bold">Vision Life</h1>
   {/* About Us Section */}
   <section className='px-4 min-h-screen lg:max-w-6xl mx-auto grid items-center'>
    <article className='flex justify-center items-center gap-10'>
     <div className='flex-1 mx-10 mb-32 h-[512px]'>
      <h2 className='w-fit mb-5 pb-2 px-2 border-b border-b-primary text-lg font-bold'>Ink - NRECT</h2>
      <img src="/img/business/p1.jpg" alt="" className='w-full h-full'/>
     </div>
     <img src="/img/product/features/p4.png" alt="" className='flex-1 w-[600px] h-[814px] '/>
    </article>
    <article className='py-20'>
     <h2 className='text-2xl border-b border-b-primary w-fit px-2 font-bold'>About Us</h2>
     <p className="text-primary text-2xl mt-5 leading-relaxed">
      비전라이프는 지속 가능한 미래를 꿈꾸며, 친환경 기술을 통해 산업과 자연이 조화를 이루는 혁신을 실현합니다.
      우리는 단순한 제품을 만드는 것이 아니라, 환경 보호와 산업 발전을 동시에 이끄는 솔루션을 창조합니다.
     </p>
     <p className="text-primary text-2xl mt-10 leading-relaxed">
      우리는 신념을 가지고 연구하고 개발합니다. 비전라이프의 모든 제품은 무폐수 공정, 저탄소 생산, 그리고 친환경 재료 사용을 기반으로 만들어지며, 지속 가능성을 실현하는 것이 우리의 가장 중요한 목표입니다. 친환경 나염 기술과 혁신적인 인쇄 기술을 통해, 우리는 더 나은 세상을 만들어가고 있습니다.
     </p>
     <p className="text-primary text-2xl mt-10 leading-relaxed">
      단순한 잉크를 넘어, 지속 가능한 가치를 창출합니다. Vision Life는 환경을 생각하는 창작자, 브랜드, 그리고 기업과 함께합니다. 우리의 여정에 동참하고, 지속 가능한 미래를 위한 혁신에 함께하세요.
     </p>
    </article>
   </section>

   {/* Visual Identity Section */}
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

   {/* ECO Life Section */}
   <section className="pSection relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/img/profile/p1.jpg')] text-center px-6">
    <h2 className="text-white text-5xl font-bold">
     비전라이프의 기술이 만드는 ECO Life
    </h2>
    <p className="text-white text-lg max-w-2xl mt-4">
     친환경적 삶을 실천하는 것은 우리의 사명입니다.
     비전라이프는 일론 섬유에 직접 인쇄가 가능한 무폐수 염색 기술을 개발하여, 환경을 지키면서도 품질을 유지하는 지속 가능한 미래를 만듭니다. 작은 선택이 큰 변화를 만듭니다. ECO Life를 지금 실천하세요.
    </p>
   </section>
  </div>
 );
};

export default Profile;