import SectionLayout from '../../../layout/SectionLayout.tsx';
import ListCard from '../../../components/ListCard.tsx';
import { MdEco } from 'react-icons/md';
import { FaChartLine, FaHandsHelping } from 'react-icons/fa';
import overview from "../../../data/profile/overview.json"
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const Profile = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(".profile_item", "top 100%");

  return (
    <div ref={sectionRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 overflow-x-hidden">
      {/* About */}
      <SectionLayout
        title="주식회사 비전 라이프 홀딩스 회사 소개"
        className="mb-52 flex flex-col items-center justify-center"
        titleClassName="hidden"
        fullHeight={false}>
        <article className="w-full max-w-3xl mx-auto">
          <div className="pt-16 sm:pt-32 pb-10 text-left font-semibold">
            <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl">
              ECO FRIENDLY
            </h3>
            <h4 className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl">
              지속 가능한 미래를 위한<br/>차별화된 기술, 비젼라이프 홀딩스
            </h4>
          </div>
          {overview.items.map((item, index) => (
            <p key={index} className="profile_item pt-6 sm:pt-10 text-base sm:text-xl leading-relaxed">
              {item}
            </p>
          ))}
        </article>
      </SectionLayout>

      {/* Vision */}
      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mb-52 mt-16 sm:mt-20 mx-auto flex flex-col items-center justify-center gap-6 sm:gap-10"
        titleClassName="hidden"
        fullHeight={false}>
        <h3 className="w-full text-left text-xl sm:text-2xl md:text-3xl font-semibold">
          비젼라이프 홀딩스가 제공하는 가치
        </h3>
        <ul className="flex flex-col gap-3 w-full">
          <ListCard
            title="친환경 기술"
            type="_highlight"
            bgColor="bg-green-100"
            description="우리는 더 깨끗한 환경과 더 공정한 경제를 꿈꿉니다."
            icon={<MdEco className="text-2xl sm:text-3xl text-green-500" />}
          />
          <ListCard
            title="경제력 상승"
            type="_highlight"
            bgColor="bg-blue-100"
            description="비젼라이프홀딩스는 혁신적인 친환경 기술로 지속 가능한 미래를 만들어갑니다."
            icon={<FaChartLine className="text-2xl sm:text-3xl text-blue-500" />}
          />
          <ListCard
            title="함께사는 사회"
            type="_highlight"
            bgColor="bg-orange-100"
            description="우리 기술이 사람들에게 희망이 되고, 모두가 함께 살아가는 세상을 위한 변화가 되길 바랍니다."
            icon={<FaHandsHelping className="text-2xl sm:text-3xl text-orange-500" />}
          />
        </ul>
      </SectionLayout>

      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mb-32 mt-16 sm:mt-20 mx-auto flex flex-col items-center justify-center gap-6 sm:gap-10"
        titleClassName="hidden"
        fullHeight={false}
      >
        <h3 className="w-full text-center text-xl sm:text-2xl md:text-3xl font-semibold">
          비즈니스 파트너로서의 약속
        </h3>
        <article className="w-full">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            비젼라이프 홀딩스는 단순히 기술을 제공하는 것을 넘어,
            비즈니스 파트너로서 지속 가능한 미래를 함께 만들어가겠습니다.
            우리는 연구 개발과 협력을 통해 고객의 가치를 창출하고,
            함께 성장하는 파트너가 될 것입니다.
          </p>
        </article>
        <div className="pt-8 sm:pt-10 pb-10 sm:pb-20 text-center text-sm sm:text-base md:text-xl font-semibold">
          <p>비젼라이프 홀딩스와 함께 더 나은 내일을 만듭니다.</p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Profile;
