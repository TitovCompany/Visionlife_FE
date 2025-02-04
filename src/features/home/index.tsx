import SectionLayout from "../../layout/SectionLayout.tsx";
import PageLayout from "../../layout/PageLayout.tsx";
import HeroSection from "./components/HeroSection.tsx";

const Home = () => {
  return (
      <PageLayout title="서비스 페이지 본문">
        {/*<HeroSection/>*/}

        {/* About */}
        <SectionLayout title="ABOUT COMPANY" fullHeight={true}>
          <article className="mt-40">
            <h3 className="p-10 text-center text-3xl font-semibold">ECO FRIENDLY</h3>
            <h4 className="mt-10 text-center text-2xl font-semibold">
              미래와 더불어 글로벌 시대를 선도하고 주도하는 비젼라이프 홀딩스
            </h4>
            <p className="mt-5 text-center text-gray-600 text-lg leading-relaxed">
              세계 유일의 무폐수 나일론 디지털 나염을 상용화에 성공한 회사로써<br/>
              전사지를 사용하지 않고 잉크를 4색(C, M, Y, K)만으로 실사를 구현하는<br/>
              기술을 보유한 친환경 녹색산업혁명의 회사입니다.
            </p>
          </article>
        </SectionLayout>
     </PageLayout>
  );
};

export default Home;