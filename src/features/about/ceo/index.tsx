import Header from '../../../layout/Header/Header.tsx';
import PageLayout from '../../../layout/PageLayout.tsx';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';

gsap.registerPlugin(ScrollTrigger);
const CEO = () => {
 const titleRef = useRef<HTMLDivElement>(null);
 //const cardRef = useRef<HTMLDivElement>(null);
 const imgRef = useRef<HTMLImageElement>(null);
 //const contentRef = useRef<HTMLDivElement>(null);

 useGSAP(() => {
  const tl = gsap.timeline()
  tl.fromTo(titleRef.current, {
   opacity: 0,
   y: 200,
  }, {
   opacity: 1,
   duration: 1.2,
   y: 0,
  });

  tl.fromTo(imgRef.current, {
   opacity: 0,
   x: 200,
  }, {
   opacity: 1,
   duration: 1.2,
   x: 0,
  })
 }, []);

 return (
  <>
   <Header />
   <PageLayout title='회사 소개 페이지 본문'>
    <GridLayout className='py-32 text-primary gap-y-0'>
     {/*<h2 className='col-start-2 col-span-2 text-4xl font-bold'>
    CEO 인사말
   </h2>*/}
     {/* Info */}
     <GridArticle colStart={2} colEnd={7} className='self-center'>
      {/* Intro */}
      <div className='w-fit relative '>
       <h3 ref={titleRef} className='mb-10 text-xl leading-12 font-semibold md:text-4xl whitespace-nowrap'>
        <p>혁신과 지속 가능성을 향한 리더십</p>
        <p>친환경 기술로 새로운 가치를 창출하다</p>
       </h3>

       <p className="mt-4 text-xl leading-relaxed text-gray-600">
        비전라이프를 찾아주신 여러분께 진심으로 감사드립니다.
        우리는 환경을 보호하는 것에서 한 발 더 나아가,
        산업과 기술이 지속 가능성을 중심으로 혁신할 수 있도록 길을 열고 있습니다.
        오늘날의 기업은 단순한 제품 공급자가 아니라,
        더 나은 미래를 설계하는 창조적 리더가 되어야 합니다.
       </p>

       <p className="mt-4 text-xl leading-relaxed text-gray-600">
        우리의 목표는 단순한 친환경 제품을 만드는 것이 아닙니다.
        우리는 기술과 지속 가능성이 공존하는 산업 표준을 만들고,
        기업과 소비자가 함께할 수 있는 새로운 패러다임을 제시합니다.
        보다 지속 가능한 세상을 위한 변화,
        그것이 바로 비전라이프가 추구하는 가치입니다.
       </p>

       <p className="mt-4 text-xl leading-relaxed text-gray-600">
        우리는 고객 여러분과 함께 성장하며,
        환경과 산업이 균형을 이루는 미래를 만들어가겠습니다.
        앞으로도 최고의 품질과 혁신적인 솔루션을 통해
        고객에게 신뢰받는 브랜드가 될 것을 약속드립니다.
       </p>

       <p className="mt-8 font-semibold text-primary">
        감사합니다.
        (주)비전라이프 CEO 최무현
       </p>
      </div>
     </GridArticle>
     {/* CEO Image */}
     <div ref={imgRef} className='col-start-8 col-end-12 flex h-[600px] flex-col items-center justify-center overflow-hidden relative'>
      <img src='/img/profile/ceo.webp' alt='CEO Profile Image' className='h-full w-full object-cover' />
     </div>
     {/* CEO 철학 */}
     <GridArticle colStart={2} colEnd={5}>
      <div className='mt-20 flex flex-col gap-10'>
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
     <GridArticle colStart={6} colEnd={12} className='text-left text-xl text-primary leading-8'>
      <h2 className="mt-20 text-left text-4xl font-bold">
       지속 가능한 미래를 위한 실천
      </h2>
      <p className="mt-12">
       우리는 기술 혁신과 친환경 솔루션이 공존할 수 있다고 믿습니다. 비전라이프는 지속 가능한 기술 개발을 통해, 환경 보호와 경제적 성장이 함께 이루어질 수 있는 길을 개척하고 있습니다.
      </p>

      <p className="mt-12">
       기존의 전통적인 염색 공정과 잉크 산업은 환경에 부담을 주어왔습니다.
       이에 우리는 폐수 없는 염색 기술, 친환경 소재 연구, 저탄소 제조 공정을 도입하여,
       환경에 미치는 영향을 최소화하면서도 산업의 지속 가능한 성장을 도모하고 있습니다.
      </p>

      <p className="mt-12">
       친환경 기술이 단순한 트렌드가 아닌, 새로운 산업 표준이 되도록 우리는 끊임없이 연구하고 발전하겠습니다. 비전라이프는 변화를 주도하며, 지속 가능한 산업의 기준을 만들어가겠습니다.
      </p>
     </GridArticle>
    </GridLayout>
   </PageLayout>
  </>
 );
};

export default CEO;