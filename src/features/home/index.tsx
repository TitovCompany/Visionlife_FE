import SectionLayout from "../../layout/SectionLayout.tsx";
import PageLayout from "../../layout/PageLayout.tsx";
import HeroSection from "./components/HeroSection.tsx";
import {Link} from "react-router-dom";
import NewsCarousel from "./components/NewsCarousel.tsx";

const Home = () => {
  return (
      <PageLayout title="서비스 페이지 본문" className="h-[510vh]">
        <HeroSection/>

        {/* About */}
        <SectionLayout title="ABOUT COMPANY">
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

        {/* Vision */}
        <SectionLayout title="Vision Life We Do" className="flex flex-col justify-center items-center">
          <p className="text-center text-lg">
            열악한 환경에 처한 나라나 개발이 필요한 도상국들의 경제활동에 도움을 주는<br/>
            친환경 기술의 보급을 통하여 균형적인 경제력으로
          </p>
          <p className="my-10 text-center text-lg">
            더불어 함께 행복한 인간 삶을 누릴수 있도록<br/>
            공헌하는데 그 사명이 있는 회사입니다.
          </p>
          <ul className="flex justify-between">
            <li>친환경 기술</li>
            <li>경제력 상승</li>
            <li>함께사는 사회</li>
          </ul>
        </SectionLayout>

        {/* News */}
        <section className="h-screen flex flex-col justify-center items-center">
          <header className="w-full">
            <div className="mx-32 flex justify-between items-center">
              <h3 className="text-xl">Vision Life News</h3>
              <Link to={"/"}>더보기</Link>
            </div>
          </header>
          <NewsCarousel/>
        </section>

        {/* Contact Us */}
        <SectionLayout title="Contact Us">
          <p className="text-center">Text</p>
          <div className="h-[600px] m-20 border-2"></div>
        </SectionLayout>
      </PageLayout>
  );
};

export default Home;