import CompanyVisionSection from "../../components/CompanyVisionSection.tsx";
import PageLayout from "../../layout/PageLayout.tsx";
import SectionLayout from "../../layout/SectionLayout.tsx";
import profile from "../../data/profile.json";

const Profile = () => {
  return (
      <PageLayout title="서비스 페이지 본문">
          {/* About */}
        <div className="mt-20 mx-20">
          <section>
            <h2>{profile.title}</h2>
            {profile.content.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
          </section>

          {/* Vision */}
          <SectionLayout title="(주)비젼 라이프 홀딩스의 비젼은" titleClassName="text-2xl">
            <CompanyVisionSection/>
          </SectionLayout>

          {/* History */}
          <section>
            <h3 className="hidden">기업 히스토리</h3>
          </section>
        </div>
      </PageLayout>
  );
};

export default Profile;