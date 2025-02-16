import imageSrc from '/img/banner/p1.jpg';
import PageLayout from '../../layout/PageLayout.tsx';
// import ProductList from './components/ProductList.tsx';
import NewsCard from './components/NewsCard.tsx';
import MoreNewsSection from './components/MoreNewsSection.tsx';
import {AiOutlineArrowDown} from 'react-icons/ai';
import HeroSection from '../profile/components/HeroSection.tsx';
import SectionAbout_Design2 from './components/SectionAbout_Design2.tsx';
import newsData from '../../data/newsData.json';

const Home = () => {
  const combinedNews = [...(newsData.news || []), ...(newsData.newsList || [])];
  const filteredNews = combinedNews.filter((news) =>
    ['1', '2', '3', '4'].includes(news.id),
  );
  return (
    <PageLayout title="서비스 페이지 본문">
      <HeroSection
        sectionClass="h-[410px] md:h-[635px] grid grid-cols-1 grid-rows-1"
        src={imageSrc} />
      {/*<SectionAbout_Design1/>*/}
      <SectionAbout_Design2 />
      {/* 제품 */}
      {/*<section className="mx-auto max-w-4xl">
          <ProductList
            title="고객과 함께 하는 친환경 녹색 미래"
            description="비젼라이프는 지속 가능한 미래를 위해 친환경 기술을 연구하며, 혁신적인 솔루션으로 녹색 산업을 선도합니다."
            type="_left"
          />
          <ProductList
            title="섬유 염색의 미래, UTEX에서 시작됩니다."
            description="UTEX는 전·후처리 공정 없이 깨끗한 염색을 실현하는 혁신적인 기술로, 친환경 섬유 산업의 새로운 기준을 만들어갑니다."
            type="_right"
          />
        </section>*/}

      {/* 뉴스 */}
      <section className="pt-20 mx-32 h-auto py-20">
        <h2 className="mb-3 ml-3 flex items-center gap-3 text-lg font-semibold">
          <AiOutlineArrowDown className="text-primary font-extrabold" />
          비전라이프 최신 소식
        </h2>
        <ul className="flex h-full justify-between gap-5">
          {filteredNews.map((news) => (
            <li key={news.id}>
              <NewsCard news={news} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto h-auto max-w-3xl py-20">
        <MoreNewsSection />
      </section>
    </PageLayout>
  );
};

export default Home;
