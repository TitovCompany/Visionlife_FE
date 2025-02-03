import utex from "../../../data/businessUtex.json";
import SectionLayout from "../../../layout/SectionLayout.tsx";
import DummyImgBox from "../../../components/DummyImgBox.tsx";

const Utex = () => {
  return (
      <>
        <SectionLayout
            title={utex.title}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] pt-16 text-4xl leading-tight"
            titlePadding="p-0"
        >
          {utex.sections.slice(0, 2).map(section => (
              <div key={section.id} className="max-w-4xl w-full px-6 space-y-12">
                <article className="space-y-6">
                  {/* Section Title */}
                  <h3 className="text-2xl font-semibold border-b pb-2">{section.title}</h3>

                  {/* Content List */}
                  {section.items.map(item => (
                      <div key={item.id} className="pl-4 border-l-4 border-gray-300">
                        {"title" in item && <h4 className="font-medium text-lg">{item.title}</h4>}
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                  ))}
                </article>
              </div>
          ))}
        </SectionLayout>

        <SectionLayout
            title={"잉크"}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] pt-16 text-4xl leading-tight"
            titlePadding="p-0"
        >
          <ul className="max-w-4xl w-full px-6 flex justify-between items-center">
            <li>
              <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
              <h2>단일 잉크 시스템</h2>
              <p>하나의 잉크로 다양한 원단의 염색이 가능하며, 실사 품질을 유지합니다.</p>
            </li>
            <li>
              <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
              <h2>친환경 기술</h2>
              <p>공정 과정에서 오폐수가 발생하지 않으며, 친환경 기준을 충족하는 잉크를 사용합니다.</p>
            </li>
            <li>
              <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
              <h2>4색 잉크 시스템</h2>
              <p>C, M, Y, K 4색 잉크를 통해 모든 색상을 구현할 수 있으며, 자연스러운 그라데이션 표현이 가능합니다.</p>
            </li>
          </ul>
        </SectionLayout>
        <SectionLayout
            title={"섬유 염색 공정 비교"}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] pt-16 text-4xl leading-tight"
            titlePadding="p-0"
        >
          <div className="max-w-4xl w-full px-6 space-y-12">
            <h4>전·후처리 공정이 필요하며 염색 과정에서 폐수가 발생합니다.</h4>
            <ul className="flex justify-between items-center">
              <li>
                <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
                <p>전처리(원단코팅)</p>
              </li>
              <li>
                <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
                <p>프린팅</p>
              </li>
              <li>
                <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
                <p>후처리(증열 · 수세)</p>
              </li>
            </ul>

            <h4>전 · 후처리 공정이 필요 없으며, 폐수가 전혀 발생하지 않습니다.</h4>
            <ul className="flex justify-center items-center">
              <li>
                <DummyImgBox width="w-[140px]" height="h-[140px]" isCircle={true}/>
                <p>출력과 동시에 염색 완료</p>
              </li>
            </ul>
          </div>
        </SectionLayout>
        <SectionLayout
            title={"속도 및 경제성"}
            className="flex flex-col justify-center items-center"
            titleClassName="max-w-[330px] pt-16 text-4xl leading-tight"
            titlePadding="p-0"
        >
          <div className="max-w-4xl w-full px-6 space-y-12">
            <h2>염색 속도 기준: 220 yd²/h</h2>
            <p>핵심 부품(출력 헤드)을 제외한 나머지 부품을 조립하여 기계를 제작하며, 필요 시 튜닝 작업을 별도로 진행합니다.</p>
            <p>세계적으로 가장 큰 시장 점유율을 차지하는 중국의 나염 생산 공장을 현지화하여 설립할 계획입니다.</p>
            <p>1대당 기계 제작 및 튜닝 비용은 약 8억 5천만 원 (VAT 별도)이며, 다수의 중국 수출 계약(MOU)을 체결한 상태입니다.</p>
            <p>유텍스는 친환경 섬유 염색 시장에서 선·후처리 공정 없이 단일 공정으로 염색을 완료하는 혁신적인 솔루션으로 자리 잡을 것입니다.</p>
          </div>
        </SectionLayout>
      </>
  );
};

export default Utex;
