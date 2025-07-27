import newsData from '../../../data/news.json';
import useInfiniteCarousel from '../../../hooks/useInfiniteCarousel.ts';
import NewsCard from '../../media/components/NewsCard.tsx';

const HomeNews = () => {
  const combinedNews = [...(newsData.items || []), ...(newsData.items || [])];
  const filteredNews = combinedNews.filter((news) =>
    ['1', '2', '3', '4', '5'].includes(news.id)
  );
  const sliderRef = useInfiniteCarousel();

  return (
    <section className="h-auto overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <ul ref={sliderRef} className="flex gap-10 whitespace-nowrap">
          {/* 슬라이드를 자연스럽게 이어붙이기 위해 리스트를 두 번 렌더링 */}
          {[...filteredNews, ...filteredNews].map((news, index) => (
            <NewsCard key={`${news.id}-${index}`} news={news} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeNews;