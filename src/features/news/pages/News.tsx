import NewsCardList from '../components/NewsCardList.tsx';

const News = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="w-full max-w-4xl mx-auto pt-32 pb-20 font-bold">
        <h2 className="mb-8 text-5xl text-gray-900">언론 보도</h2>
        <h3 className="text-2xl">비전라이프 최신 뉴스</h3>
      </div>
      <NewsCardList layout="horizontal"/>
      <NewsCardList layout="vertical"/>
    </section>
  );
};

export default News;