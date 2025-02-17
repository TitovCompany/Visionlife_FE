import imageSrc from '/img/banner/p1.jpg';
import PageLayout from '../../layout/PageLayout.tsx';
import NewsCard from '../news/components/NewsCard.tsx';
import MoreNewsSection from './components/MoreNewsSection.tsx';
import {AiOutlineArrowDown} from 'react-icons/ai';
import HeroSection from '../profile/components/HeroSection.tsx';
import SectionAbout_Design2 from './components/SectionAbout_Design2.tsx';
import useInfiniteCarousel from '../../hooks/useInfiniteCarousel.ts';
import newsData from '../../data/news.json';

const Home = () => {
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
      <SectionAbout_Design2 />

      {/* 뉴스 */}
      <section className="py-20 h-auto overflow-hidden">
        <h2 className="mb-10 ml-3 flex items-center gap-3 text-lg font-semibold">
          <AiOutlineArrowDown className="text-primary font-extrabold" />
          비전라이프 최신 소식
        </h2>
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
    </PageLayout>
  );
};

export default Home;
