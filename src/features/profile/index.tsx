import CompanyVisionSection from "../../components/CompanyVisionSection.tsx";
import PageLayout from "../../layout/PageLayout.tsx";
import SectionLayout from "../../layout/SectionLayout.tsx";
import profile from "../../data/profile.json";
import History from "./components/History.tsx";

const Profile = () => {
  return (
      <PageLayout title="서비스 페이지 본문">
          {/* About */}
        <div className="mt-20 mx-20">
          <h3 className="hidden">회사 소개</h3>
          <section className="w-full h-screen max-w-7xl mx-auto">
            <div className="mt-16 relative">
              <div className="w-1/2 h-full p-10 bg-[#5c504b] text-white absolute right-0">
                <p className="mb-3 text-2xl font-bold text-white">
                  (주)비젼라이프홀딩스는<br/>
                  친환경 녹색 산업혁명의<br/>
                  회사입니다.
                </p>
                <p className="text-md">
                  세계유일의 무폐수 나일론 디지털 나염을 상용화에<br/>
                  성공한 회사로써 전사지를 사용하지 않고 또한<br/>
                  잉크를 4색(C.M.Y.K) 만으로 실사를 구현하는<br/>
                  기술을 보유한 친환경 녹색산업혁명의 회사입니다.
                </p>
              </div>
              <img
                  className="w-full max-h-[350px] pt-12 "
                  src="/img/home/p2.jpg"
                  alt="기업 소개 페이지 히어로 이미지"
              />
            </div>
            <article className="mt-10">
              <h2 className="mb-2 text-xl font-bold">{profile.title}</h2>
              {profile.content.map((item, index) => (
                  <p key={index}>{item}</p>
              ))}
            </article>
          </section>

          {/* Vision */}
          <SectionLayout title="(주)비젼 라이프 홀딩스의 비젼은" titleClassName="text-2xl">
            <CompanyVisionSection/>
          </SectionLayout>

          {/* History */}
          <History/>
        </div>
      </PageLayout>
  );
};

export default Profile;