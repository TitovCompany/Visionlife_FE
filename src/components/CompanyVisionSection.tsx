import VisionItem from "../features/home/components/VisionItem.tsx";

const CompanyVisionSection = () => {
  return (
      <>
        <p className="text-center text-lg">
          열악한 환경에 처한 나라나 개발이 필요한 도상국들의 경제활동에 도움을 주는<br/>
          친환경 기술의 보급을 통하여 균형적인 경제력으로
        </p>
        <p className="my-10 text-center text-lg">
          더불어 함께 행복한 인간 삶을 누릴수 있도록<br/>
          공헌하는데 그 사명이 있는 회사입니다.
        </p>
        <ul className="mx-20 flex justify-between gap-5">
          <VisionItem title="친환경 기술"/>
          <VisionItem title="경제력 상승"/>
          <VisionItem title="함께사는 사회"/>
        </ul>
      </>
  );
};

export default CompanyVisionSection;