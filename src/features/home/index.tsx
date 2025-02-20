import imageSrc from '/img/banner/p1.jpg';
import PageLayout from '../../layout/PageLayout.tsx';
import NewsCard from '../news/components/NewsCard.tsx';
import {AiOutlineArrowDown} from 'react-icons/ai';
import HeroSection from '../profile/components/HeroSection.tsx';
import useInfiniteCarousel from '../../hooks/useInfiniteCarousel.ts';
import MoreNewsSection from './components/MoreNewsSection.tsx';
import BusinessSectionLayout from '../../layout/BusinessSectionLayout.tsx';
import newsData from '../../data/news.json';
import intro from '../../data/home/intro.json';
import {useRef} from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation.ts';

const Home = () => {
  // 애니메이션 적용
  const sectionRef = useRef(null);
  useScrollAnimation(".home_item", "top 80%");

  const combinedNews = [...(newsData.items || []), ...(newsData.items || [])];
  const filteredNews = combinedNews.filter((news) =>
    ['1', '2', '3', '4', '5'].includes(news.id),);
  const sliderRef = useInfiniteCarousel();

  return (
    <PageLayout
      title="사업개요 페이지 본문"
      isFullHeight={false}
      isMinHeight={false}>
      <HeroSection
        sectionClass="h-[410px] md:h-[635px] grid grid-cols-1 grid-rows-1"
        src={imageSrc} />
      <div className="w-full h-auto max-w-2xl mx-auto">
        <h2 className="pt-10 md:pt-20 pb-10 text-center text-lg md:text-3xl leading-relaxed font-semibold">
          <span className="text-primary">비전라이프</span>는 지속 가능한 미래를 그리며<br/>세상을 연결하는 친환경 기술을 만들어 갑니다.
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
            href={item.href}/>
        ))}
      </div>

      {/* 뉴스 */}
      <section className="py-20 h-auto overflow-hidden">
        <div className="mb-10 ml-12 text-2xl font-semibold">
          <h3 className="flex items-center gap-3">
            <AiOutlineArrowDown className="text-primary font-extrabold" />
            비전라이프 최근 소식
          </h3>
        </div>
        <div className="relative w-full overflow-hidden">
          <ul ref={sliderRef} className="flex whitespace-nowrap gap-10">
            {/* 슬라이드를 자연스럽게 이어붙이기 위해 리스트를 두 번 렌더링 */}
            {[...filteredNews, ...filteredNews].map((news, index) => (
              <NewsCard key={`${news.id}-${index}`} news={news} />
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto h-auto max-w-3xl pb-20">
        <MoreNewsSection />
      </section>
      {/*<SectionAbout />*/}
    </PageLayout>
  );
};

export default Home;
