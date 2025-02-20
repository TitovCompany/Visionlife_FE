import SectionLayout from '../../../layout/SectionLayout.tsx';
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';
import VisionScroll from '../components/VisionScroll.tsx';
import overview from '../../../data/profile/overview.json';
import comment from '../../../data/profile/comment.json';

const Profile = () => {
  const sectionRef = useRef(null);
  useScrollAnimation('.profile_item', 'top 100%');

  return (
    <div ref={sectionRef} className="w-full overflow-hidden">
      {/* About */}
      <SectionLayout
        title="주식회사 비전 라이프 홀딩스 회사 소개"
        className="mx-auto mb-52 flex max-w-4xl flex-col items-center justify-center"
        titleClassName="hidden"
        fullHeight={false}>
        <article className="mx-auto w-full max-w-3xl">
          <div className="pt-16 pb-10 text-left font-semibold sm:pt-32">
            <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl">
              ECO FRIENDLY
            </h3>
            <h4 className="mt-4 text-xl leading-relaxed sm:mt-5 sm:text-2xl md:text-3xl">
              지속 가능한 미래를 위한
              <br />
              차별화된 기술, 비전라이프
            </h4>
          </div>
          {overview.items.map((item, index) => (
            <p
              key={index}
              className="profile_item pt-6 text-base leading-relaxed sm:pt-10 sm:text-xl">
              {item}
            </p>
          ))}
        </article>
      </SectionLayout>

      {/* Vision */}
      <VisionScroll />

      <SectionLayout
        title="주식회사 비젼 라이프 홀딩스 목표 및 방향성"
        className="mx-auto mt-16 mb-32 flex max-w-2xl flex-col items-center justify-center sm:mt-20"
        titleClassName="hidden">
        <h3 className="w-full pt-40 text-left text-2xl font-semibold sm:text-3xl md:text-4xl">
          비즈니스 파트너로서의 <span className="text-primary">약속</span>
        </h3>
        <article className="mr-auto w-full max-w-3xl">
          {comment.data.map((item, index) => (
            <p
              key={index}
              className="profile_item pt-14 text-base leading-relaxed sm:text-lg md:text-xl">
              {item.text}
            </p>
          ))}
          <p className="profile_item pt-14 text-base leading-relaxed font-semibold sm:text-lg md:text-xl">
            <span className="text-primary">비전라이프 홀딩스</span>와<br />
            함께 더 나은 내일을 만듭니다.
          </p>
        </article>
      </SectionLayout>
    </div>
  );
};

export default Profile;
