import NewsCardList from '../components/NewsCardList.tsx';
import MobileVerticalNewsList from '../components/MobileVerticalNewsList.tsx';

const News = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="w-full max-w-4xl mx-auto pt-32 pb-20 font-bold">
        <h2 className="mb-8 text-5xl text-gray-900">언론 보도</h2>
        <h3 className="text-2xl">비전라이프 최신 뉴스</h3>
      </div>

      {/* 데스크탑용 큰 뉴스 3개*/}
      <div className="hidden sm:block">
        <NewsCardList layout="horizontal" />
      </div>

      {/* 데스크탑용 나머지 뉴스 리스트*/}
      <div className="hidden sm:block mt-8">
        <NewsCardList layout="vertical" />
      </div>

      {/* 모바일 전용 세로 레이아웃 */}
      <div className="block sm:hidden">
        <MobileVerticalNewsList />
      </div>
    </section>
  );
};

export default News;
