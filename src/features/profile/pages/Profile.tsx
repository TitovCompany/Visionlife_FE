import SectionLayout from '../../../layout/SectionLayout.tsx';
import ListCard from '../../../components/ListCard.tsx';
import {MdEco} from 'react-icons/md';
import {FaChartLine, FaHandsHelping} from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* About */}
      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 회사 소개"
        className="flex flex-col items-center justify-center"
        titleClassName="hidden"
        fullHeight={false}>
        <article className="w-full max-w-3xl mx-auto">
          <h3 className="text-primary px-10 pt-24 text-center text-3xl font-semibold">
            ECO FRIENDLY
          </h3>
          <h4 className="mt-5 text-center text-2xl font-semibold">
            지속 가능한 미래를 위한 혁신, 비젼라이프 홀딩스
          </h4>
          <p className="pt-10 text-xl leading-relaxed">
            비젼라이프 홀딩스는 환경 보호와 생산 효율성을 동시에 고려한
            친환경 기술을 연구하고 개발하는 기업입니다.
          </p>

          <p className="pt-10 text-xl leading-relaxed">
            우리는 무폐수 나일론 디지털 나염 기술을 세계 최초로 상용화하며,
            환경 보호와 경제적 가치를 동시에 창출하고 있습니다.
          </p>

          <p className="pt-10 text-xl leading-relaxed">
            기존의 섬유 염색 방식은 다량의 물과 화학 처리가 필요하지만,
            비젼라이프의 기술은 전·후처리 과정 없이도 높은 품질의 염색이 가능하여
            제조 과정에서의 자원 낭비를 줄이고 비용 절감을 실현합니다.
          </p>

          <p className="pt-10 text-xl leading-relaxed">
            우리는 앞으로도 지속적인 연구 개발을 통해
            기업이 환경 친화적인 생산 공정을 도입할 수 있도록 지원하고,
            더 나아가 섬유 산업의 환경 부담을 줄이는 실질적인 해결책을 제시하겠습니다.
            비젼라이프 홀딩스는 환경과 기업이 함께 성장할 수 있는 기술을 만들기 위해 최선을 다하겠습니다.
          </p>

        </article>
      </SectionLayout>

      {/* Vision */}
      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mt-20 mx-auto flex flex-col items-center justify-center gap-10"
        titleClassName="hidden"
        fullHeight={false}>
        <h3 className="w-full text-center text-2xl font-semibold">
          비젼라이프 홀딩스가 제공하는 가치
        </h3>
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

      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mt-20 mx-auto flex flex-col items-start justify-center gap-10"
        titleClassName="hidden"
        fullHeight={false}>
        <h3 className="w-full text-center text-2xl font-semibold">
          비즈니스 파트너로서의 약속
        </h3>
        <article>
          <p className="text-base/8">
            비젼라이프 홀딩스는 단순한 기술 제공을 넘어,
            비즈니스 파트너로서 환경을 생각하는 지속 가능한 미래를 함께 만들어가겠습니다.
            우리는 끊임없는 연구 개발과 협력을 통해, 고객사의 가치 창출을 극대화하고 함께 성장하는 기업이 되겠습니다.
          </p>
        </article>
      </SectionLayout>
      <div className="pt-10 pb-20 text-xl font-semibold">
        <p>비젼라이프 홀딩스와 함께, 더 나은 미래를 만들어가세요.</p>
      </div>
    </div>
  );
};

export default Profile;