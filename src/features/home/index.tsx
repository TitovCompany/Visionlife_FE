import imageSrc from '/img/banner/p1.jpg';
import PageLayout from '../../layout/PageLayout.tsx';
import HeroSection from '../profile/components/HeroSection.tsx';
import MoreNewsSection from './components/MoreNewsSection.tsx';
import BusinessSectionLayout from '../../layout/BusinessSectionLayout.tsx';
import intro from '../../data/home/intro.json';
import {useRef} from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation.ts';
import HomeNews from './components/HomeNews.tsx';

const Home = () => {
  // 애니메이션 적용
  const sectionRef = useRef(null);
  useScrollAnimation('.home_item', 'top 80%');

  return (
    <PageLayout
      title="사업개요 페이지 본문"
      isFullHeight={false}
      isMinHeight={false}>
      <HeroSection
        sectionClass="h-[410px] md:h-[635px] grid grid-cols-1 grid-rows-1"
        src={imageSrc} />
      <div className="mx-auto h-auto w-full max-w-2xl">
        <h2 className="pt-10 pb-10 text-center text-lg leading-relaxed font-semibold md:pt-20 md:text-3xl">
          <span className="text-primary">비전라이프</span>는 지속 가능한 미래를
          그리며<br />세상을 연결하는 친환경 기술을 만들어 갑니다.
        </h2>
      </div>
      <div ref={sectionRef} className="overflow-x-hidden">
        {intro.data.map((item, index) => (
          <BusinessSectionLayout
            key={index}
            title={item.title}
            description={item.description}
            src={item.src}
            art={item.art}
            href={item.href} />
        ))}
      </div>
      <HomeNews/>
      <section className="mx-auto h-auto max-w-3xl pb-20">
        <MoreNewsSection />
      </section>
    </PageLayout>
  );
};

export default Home;
