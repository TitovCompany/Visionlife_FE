import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import {Link} from 'react-router-dom';
import comparison from '../../../data/business/utex_comparison.json';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import Header from '../../../layout/Header/Header.tsx';
import PageLayout from '../../../layout/PageLayout.tsx';

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
       className='w-full h-64 md:h-150 object-cover'
       autoPlay
       loop
       muted
       playsInline
      />
     </GridArticle>
     <GridArticle colStart={2} colEnd={12} className="pt-24 md:pt-52 flex flex-col items-start justify-center">
      <h2 className="w-full pt-12 pb-4 text-left font-bold text-5xl md:text-7xl leading-tight text-primary">
       PROUTEX
      </h2>
      <p className="text-lg md:text-2xl text-gray-700 font-medium mb-10">
       차세대 친환경 디지털 나염 솔루션
      </p>

      <div className="text-base md:text-xl md:leading-10 text-gray-600 max-w-3xl">
       <p className="mb-6">
        <strong>PROUTEX</strong>는 <strong>N-RECT 친환경 잉크</strong>를 기반으로, 기존 염색 공정의 한계를 넘어서는
        <span className="text-primary font-semibold"> 무폐수 공정</span>과
        <span className="text-primary font-semibold"> 고품질 디지털 나염</span>을 실현합니다.
       </p>
       <p>
        복잡한 전처리·후처리 과정을 제거하여 생산 단계를 단순화하고,
        비용과 시간을 절감하면서도 글로벌 브랜드가 요구하는 친환경 기준을 충족합니다.
       </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
       {[
        {
         title: "# 전처리 無",
         desc: "코팅·전처리 없이 원단에 직접 염색이 가능해 생산 속도가 빨라지고 비용 절감 효과가 큽니다.",
         icon: "⚡"
        },
        {
         title: "# 후처리 無",
         desc: "증열과 수세 과정이 필요 없어 출력과 동시에 색상이 고정되며, 폐수 발생이 전혀 없습니다.",
         icon: "🌱"
        },
        {
         title: "# 무폐수 공정",
         desc: "99% 무폐수 공정을 실현하여 ESG 경영과 글로벌 환경 기준을 만족하는 친환경 솔루션을 제공합니다.",
         icon: "💧"
        }
       ].map((item) => (
        <div key={item.title} className="border-primary rounded-2xl border p-8 shadow-xl hover:shadow-2xl transition">
         <div className="text-4xl">{item.icon}</div>
         <h4 className="text-primary text-2xl font-bold mt-4">{item.title}</h4>
         <p className="mt-3 text-gray-700 text-lg leading-relaxed">{item.desc}</p>
        </div>
       ))}
      </div>
     </GridArticle>

     {/* 일반 프린트의 한계 */}
     <GridArticle colStart={2} colEnd={12} className="mt-32">
      {/* 헤더 영역 */}
      <div className="text-center md:text-left mb-16">
       <h3 className="text-primary text-lg font-semibold mb-3 uppercase tracking-wide">
        Conventional Printing vs PROUTEX
       </h3>
       <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        기존 디지털 프린팅의 한계
       </h2>
       <p className="text-xl md:text-2xl text-gray-600">
        잉크 소비량 증가 · 색상 선명도 저하 · 복잡한 공정
       </p>
      </div>

      {/* 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {comparison.items[0].steps.map((step, idx) => (
        <div
         key={step.id}
         className="relative flex flex-col items-center rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition"
        >
         {/* 이미지 */}
         <div className="relative w-full">
          <img
           src={`/img/product/compare/p${idx + 1}.webp`}
           alt={step.content}
           className="w-full h-60 object-cover"
          />
          {/* 번호 배지 */}
          <span className="absolute top-3 left-3 bg-primary text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            {idx + 1}
          </span>
         </div>

         {/* 텍스트 영역 */}
         <div className="p-6 text-center">
          <h4 className="text-xl font-bold mb-2">{step.content}</h4>
          <p className="text-base text-gray-600">{step.description}</p>
         </div>
        </div>
       ))}
      </div>
     </GridArticle>


     {/* PROUTEX 공정 */}
     <GridArticle colStart={2} colEnd={12} className="my-32 flex flex-col gap-10">
      {/* 헤더 영역 */}
      <div className="text-center md:text-right mb-6">
       <h4 className="text-primary text-lg font-semibold uppercase tracking-wide">
        Digital Printing Process of PROUTEX
       </h4>
       <h2 className="text-3xl md:text-6xl font-bold mt-2 mb-4 leading-tight">
        PROUTEX가 만드는 새로운 표준
       </h2>
       <p className="text-xl md:text-2xl text-gray-600">
        친환경 · 고효율 · 고품질을 모두 만족하는 혁신적인 디지털 나염 공정
       </p>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
       {/* 좌측 이미지 + 간단 설명 */}
       <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        <img
         src="/img/product/compare/p4.webp"
         alt="PROUTEX 디지털 프린팅"
         className="w-full rounded-xl shadow-lg object-cover"
        />
        <h3 className="text-primary text-2xl font-bold mt-6 text-center md:text-left">
         전처리·후처리 없이 즉시 완성되는 친환경 디지털 나염
        </h3>
        <p className="text-gray-700 text-lg mt-3 text-center md:text-left">
         원단에 직접 염색이 이루어져 공정 단계를 줄이고, 생산 속도를 높이면서도 환경 부담을 최소화합니다.
        </p>
       </div>

       {/* 우측 설명 */}
       <div className="max-w-3xl md:w-1/2 md:text-xl leading-8 space-y-5">
        <p>
         PROUTEX는 다양한 원단에 단일 잉크로 나염이 가능하여, 섬유 종류와 관계없이 일관된 고품질 출력을 제공합니다.
        </p>
        <p>
         전사지를 사용하지 않는 혁신적인 공정을 통해 출력 과정과 후처리 단계를 단축하여,
         기존 방식 대비 <strong className="text-primary">생산 원가를 절감</strong>하고
         <strong className="text-primary">소요 시간을 대폭 단축</strong>할 수 있습니다.
        </p>
        <p>
         초고속 염색 속도로 대량 생산은 물론, 디지털 디자인을 직접 출력해
         <strong className="text-primary">소량 맞춤형 제작에도 최적화된 솔루션</strong>을 제공합니다.
        </p>

        <Link
         to="/"
         className="mt-8 inline-block bg-primary hover:bg-primary/80 transition rounded-lg px-6 py-3 text-white text-lg font-semibold shadow-md"
        >
         PROUTEX 전용 잉크 N-RECT 보기 →
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