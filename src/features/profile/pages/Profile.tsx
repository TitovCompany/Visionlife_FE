import imageSrc from '/img/home/p2.jpg';
import HeroSection from '../components/HeroSection.tsx';
import SectionLayout from '../../../layout/SectionLayout.tsx';
import ListCard from '../../../components/ListCard.tsx';
import {MdEco, MdOutlineMail} from 'react-icons/md';
import {FaChartLine, FaHandsHelping, FaPhoneAlt} from 'react-icons/fa';
import {LiaFaxSolid} from 'react-icons/lia';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import DummyImgBox from '../../../components/DummyImgBox.tsx';
import PageLayout from '../../../layout/PageLayout.tsx';

const Profile = () => {
  return (
    <PageLayout title="서비스 페이지 본문">
      {/* Hero */}
      <HeroSection src={imageSrc} sectionClass="h-screen"/>

      {/* About */}
      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 회사 소개"
        className="mx-auto flex max-w-4xl flex-col items-center justify-center"
        titleClassName="hidden"
        fullHeight={true}>
        <article>
          <h3 className="text-primary p-10 text-center text-3xl font-semibold">
            ECO FRIENDLY
          </h3>
          <h4 className="mt-10 text-center text-2xl font-semibold">
            지속 가능한 미래를 위한 혁신, 비젼라이프 홀딩스
          </h4>
          <p className="hidden text-center text-lg leading-relaxed text-gray-600">
            우리는 세계 최초로 무폐수 나일론 디지털 나염 기술을 상용화하였으며,
            <br />
            전사지를 사용하지 않고도 C, M, Y, K 4색 잉크만으로 정밀한 색상을
            구현합니다.
            <br />
            환경을 생각하는 기술로 지속 가능한 녹색산업 혁명을 선도합니다.
          </p>
        </article>
      </SectionLayout>

      {/* Vision */}
      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mx-auto flex max-w-4xl flex-col items-center justify-center"
        titleClassName="hidden"
        fullHeight={true}>
        <ul className="flex flex-col gap-3">
          <ListCard
            title="친환경 기술"
            type="_highlight"
            bgColor="bg-green-100"
            description="우리는 더 깨끗한 환경과 더 공정한 경제를 꿈꿉니다."
            icon={<MdEco className="text-3xl text-green-500" />}
          />
          <ListCard
            title="경제력 상승"
            type="_highlight"
            bgColor="bg-blue-100"
            description="비젼라이프홀딩스는 혁신적인 친환경 기술로 지속 가능한 미래를 만들어갑니다."
            icon={<FaChartLine className="text-3xl text-blue-500" />}
          />
          <ListCard
            title="함께사는 사회"
            type="_highlight"
            bgColor="bg-orange-100"
            description="우리 기술이 사람들에게 희망이 되고, 모두가 함께 살아가는 세상을 위한 변화가 되길 바랍니다."
            icon={<FaHandsHelping className="text-3xl text-orange-500" />}
          />
        </ul>
      </SectionLayout>

      {/* Contact Us */}
      <SectionLayout
        title="CONTACT US"
        className="mx-auto flex max-w-6xl flex-col items-center justify-center"
        titleClassName="text-6xl font-normal"
        fullHeight={true}>
        <p className="mb-16 max-w-2xl text-center text-lg leading-relaxed text-gray-700">
          궁금한 점이 있으신가요? 언제든지 문의해 주세요.
          <br />
          비젼라이프홀딩스는 고객과의 소통을 중요하게 생각하며,
          <br />
          빠르고 친절한 응대를 약속드립니다.
        </p>

        <div className="grid h-[600px] w-full grid-cols-5 grid-rows-4 gap-x-2">
          <ul className="col-span-2 row-span-4 grid grid-rows-4 gap-y-1">
            <ListCard
              title="전화번호"
              type="_base"
              icon={
                <FaPhoneAlt className="bg-primary h-14 w-14 rounded-full p-3 text-white" />
              }
              description="02-555-1202"
              size="w-full h-full"
            />
            <ListCard
              title="팩스 (FAX)"
              type="_base"
              icon={
                <LiaFaxSolid className="bg-primary h-14 w-14 rounded-full p-3 text-white" />
              }
              description="02-555-5801"
              size="w-full h-full"
            />
            <ListCard
              title="이메일"
              type="_base"
              icon={
                <MdOutlineMail className="bg-primary h-14 w-14 rounded-full p-3 text-white" />
              }
              description="visionlife2018@naver.com"
              size="w-full h-full"
            />
            <ListCard
              title="주소"
              type="_base"
              icon={
                <HiOutlineLocationMarker className="bg-primary h-14 w-16 rounded-full p-3 text-white" />
              }
              description="서울 서초구 반포대로 21길 23 세진빌딩 3층"
              size="w-full h-full"
            />
          </ul>
          <div className="col-span-3 row-span-4 grid-cols-2">
            <DummyImgBox width="w-full" height="h-full" isCircle={false} />
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Profile;