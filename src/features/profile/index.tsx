import CompanyVisionSection from "../../components/CompanyVisionSection.tsx";
import PageLayout from "../../layout/PageLayout.tsx";
import SectionLayout from "../../layout/SectionLayout.tsx";
import profile from "../../data/profile.json";
import History from "./components/History.tsx";

const Profile = () => {
  return (
      <PageLayout title="서비스 페이지 본문">
          {/* About */}
        <div className="max-w-4xl mx-auto">
          <h3 className="hidden">회사 소개</h3>
          <section className="w-full h-auto max-w-7xl mx-auto mb-32 overflow-hidden">
            <div className="mt-32 relative">
              <article className="w-fit h-full p-10 bg-[#5c504b] text-white absolute right-0">
                <p className="mb-3 text-2xl font-bold text-white">
                  (주)비젼라이프홀딩스는<br/>
                  친환경 녹색 산업혁명의<br/>
                  회사입니다.
                </p>
                <p className="max-w-md text-base leading-relaxed">
                 {/* 당사는 세계 유일의 무폐수 나일론 디지털 나염 기술을<br/>
                  성공적으로 상용화한 기업으로서, 전사지를 사용하지 않고<br/>
                  4색(C.M.Y.K) 잉크만으로 실사를 구현하는<br/>
                  친환경 디지털 프린팅 기술을 보유하고 있습니다. <br/>
                  지속적인 연구 개발과 기술 혁신을 통해<br/>
                  섬유 산업의 새로운 패러다임을 제시하며,<br/>
                  글로벌 시장에서 친환경 녹색 산업을 선도하고 있습니다.*/}
                  당사는 세계 유일의 무폐수 나일론 디지털 나염 기술을 성공적으로 상용화한 기업으로서,
                  전사지를 사용하지 않고 4색(C.M.Y.K) 잉크만으로 실사를 구현하는
                  친환경 디지털 프린팅 기술을 보유하고 있습니다.
                  지속적인 연구 개발과 기술 혁신을 통해 섬유 산업의 새로운 패러다임을 제시하며,
                  글로벌 시장에서 친환경 녹색 산업을 선도하고 있습니다.
                </p>
              </article>
              <img
                  className="w-full max-h-[350px] pt-12 "
                  src="/img/home/p2.jpg"
                  alt="기업 소개 페이지 히어로 이미지"
              />
            </div>
            <article className="mt-10">
              <h2 className="mb-5 text-2xl font-bold">{profile.title}</h2>
              {profile.content.map((item, index) => (
                  <p key={index} className="first:mt-0 last:mb-0 my-7 text-base leading-relaxed">{item}</p>
              ))}
            </article>
          </section>

          {/* Vision */}
          <SectionLayout
              title="(주)비젼 라이프 홀딩스의 비젼은"
              className="flex flex-col items-center justify-center"
              titleClassName="text-2xl"
              fullHeight={true}
          >
            <CompanyVisionSection/>
          </SectionLayout>

          {/* History */}
          <History/>
        </div>
      </PageLayout>
  );
};

export default Profile;