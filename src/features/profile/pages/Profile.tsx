import SectionLayout from '../../../layout/SectionLayout.tsx';
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';
import VisionScroll from '../components/VisionScroll.tsx';
import overview from "../../../data/profile/overview.json"
import comment from "../../../data/profile/comment.json"

const Profile = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(".profile_item", "top 100%");

  return (
    <div ref={sectionRef} className="w-full overflow-hidden">
      {/* About */}
      <SectionLayout
        title="주식회사 비전 라이프 홀딩스 회사 소개"
        className="mb-52 max-w-4xl mx-auto flex flex-col items-center justify-center"
        titleClassName="hidden"
        fullHeight={false}>
        <article className="w-full max-w-3xl mx-auto">
          <div className="pt-16 sm:pt-32 pb-10 text-left font-semibold">
            <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl">
              ECO FRIENDLY
            </h3>
            <h4 className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl leading-relaxed">
              지속 가능한 미래를 위한<br/>차별화된 기술, 비전라이프
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
      <VisionScroll/>

      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mb-32 mt-16 sm:mt-20 max-w-2xl mx-auto flex flex-col items-center justify-center"
        titleClassName="hidden">
        <h3 className="w-full pt-40 text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          비즈니스 파트너로서의 <span className="text-primary">약속</span>
        </h3>
        <article className="w-full max-w-3xl mr-auto">
          {comment.data.map((item, index) => (
            <p key={index} className="pt-14 text-base sm:text-lg md:text-xl leading-relaxed">
              {item.text}
            </p>
          ))}
          <p className="pt-14 font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="text-primary">비전라이프 홀딩스</span>와<br/>
            함께 더 나은 내일을 만듭니다.
          </p>
        </article>
      </SectionLayout>
    </div>
  );
};

export default Profile;
