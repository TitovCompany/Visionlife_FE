import PageLayout from '../../layout/PageLayout.tsx';
import ProductList from './components/ProductList.tsx';
import NewsCard from './components/NewsCard.tsx';
import HeroSection from './components/HeroSection.tsx';
import MoreNewsSection from './components/MoreNewsSection.tsx';

const Home = () => {
  return (
    <PageLayout title="서비스 페이지 본문">
      <div className="w-full h-full">
        <section className="pt-20">
          <HeroSection />
          <article className="mx-32 py-20 text-center">
            <h2 className="mb-5 text-4xl font-semibold">Vision Life</h2>
            <p className="text-2xl leading-8">
              지속 가능한 미래를 그리며, 세상을 연결하는
              <br /> 친환경 기술을 만들어갑니다.
            </p>
          </article>
        </section>

        {/* 제품 */}
        <section className="max-w-4xl mx-auto">
          <ProductList
            title="고객과 함께 하는 친환경 녹색 미래"
            description="비젼라이프는 지속 가능한 미래를 위해 친환경 기술을 연구하며, 혁신적인 솔루션으로 녹색 산업을 선도합니다."
          />
          <ProductList
            title="섬유 염색의 미래, UTEX에서 시작됩니다."
            description="UTEX는 전·후처리 공정 없이 깨끗한 염색을 실현하는 혁신적인 기술로, 친환경 섬유 산업의 새로운 기준을 만들어갑니다."
          />
        </section>

        {/* 뉴스 */}
        <section className="mx-32 h-96 py-20">
          <h2 className="mb-2">비전라이프 최신 소식</h2>
          <ul className="h-full flex justify-between gap-5">
            <NewsCard title="title" description="article" />
            <NewsCard title="title" description="article" />
            <NewsCard title="title" description="article" />
            <NewsCard title="title" description="article" />
          </ul>
        </section>

        <section className="max-w-3xl h-96 mx-auto py-20">
          <MoreNewsSection />
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
