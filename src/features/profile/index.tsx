// layout
import PageLayout from "../../layout/PageLayout.tsx";
import SectionLayout from "../../layout/SectionLayout.tsx";

// components
import DummyImgBox from "../../components/DummyImgBox.tsx";
import HeroSection from "../home/components/HeroSection.tsx";
import ListCard from "../../components/ListCard.tsx";

// icon
import {MdEco} from "react-icons/md";
import {FaChartLine, FaHandsHelping} from "react-icons/fa";


const Profile = () => {
  return (
      <PageLayout title="서비스 페이지 본문">
        {/* Hero */}
        <HeroSection/>

        <div className="max-w-4xl mx-auto">
          {/* About */}
          <h3 className="hidden">회사 소개</h3>
          {/*<AboutSection/>*/}

          {/* Vision */}
          <SectionLayout
              title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
              className="flex flex-col items-center justify-center"
              titleClassName="text-2xl hidden"
              fullHeight={true}
          >
            <ul className="flex flex-col gap-3">
              <ListCard
                  title="친환경 기술"
                  bgColor="bg-green-100"
                  description="우리는 더 깨끗한 환경과 더 공정한 경제를 꿈꿉니다."
                  icon={<MdEco className="text-green-500 text-3xl"/>}
              />
              <ListCard
                  title="경제력 상승"
                  bgColor="bg-blue-100"
                  description="비젼라이프홀딩스는 혁신적인 친환경 기술로 지속 가능한 미래를 만들어갑니다."
                  icon={<FaChartLine className="text-blue-500 text-3xl"/>}
              />
              <ListCard
                  title="함께사는 사회"
                  bgColor="bg-orange-100"
                  description="우리 기술이 사람들에게 희망이 되고, 모두가 함께 살아가는 세상을 위한 변화가 되길 바랍니다."
                  icon={<FaHandsHelping className="text-orange-500 text-3xl"/>}
              />
            </ul>
          </SectionLayout>

          {/* Contact Us */}
          <SectionLayout
              title="CONTACT US"
              className="flex flex-col items-center justify-center"
              titleClassName="text-2xl"
              fullHeight={true}
          >
            <p className="text-center">Text</p>
            <div className="w-full h-[500px] grid grid-rows-3 grid-cols-5">
              <div className="grid-cols-1 col-span-2">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
              </div>
              <div className="grid-cols-2 col-span-3 row-span-3">
                <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
              </div>
            </div>
          </SectionLayout>
        </div>
      </PageLayout>
  );
};

export default Profile;