import CompanyVisionSection from "../../components/CompanyVisionSection.tsx";

const Profile = () => {
  return (
      <div className="w-full h-full pt-24 mt-24">
        <h1 className="!mt-24">Profile</h1>
        {/* About */}

        {/* Vision */}
        <section>
          <h2>(주)비젼 라이프 홀딩스의 비젼은</h2>
          <CompanyVisionSection/>
        </section>

        {/* History */}
      </div>
  );
};

export default Profile;