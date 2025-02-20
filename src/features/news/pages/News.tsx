import NewsCardList from '../components/NewsCardList.tsx';
import Carousel from '../../../components/Carousel.tsx';

const News = () => {
  return (
    <section className="mx-auto md:max-w-7xl">
      <div className="mx-auto w-full max-w-xs md:max-w-full pt-20 md:pt-32 font-bold">
        <p className="w-fit mb-4 px-1 text-sm md:text-base text-primary border-b border-b-primary font-semibold">언론 보도</p>
        <h3 className="text-2xl md:text-4xl">비전라이프 최신 뉴스</h3>
      </div>
      <Carousel/>
      <div className="w-full max-w-xs lg:max-w-4xl mx-auto pt-14">
        <h3 className="text-2xl md:text-4xl font-bold">전체 뉴스</h3>
        <NewsCardList layout="vertical" />
      </div>
    </section>
  );
};

export default News;
