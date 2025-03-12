import {AiOutlineArrowDown} from 'react-icons/ai';
import NewsCard from '../../news/components/NewsCard.tsx';
import newsData from '../../../data/news.json';
import useInfiniteCarousel from '../../../hooks/useInfiniteCarousel.ts';
import {LuCircleArrowRight} from 'react-icons/lu';
import TextLink from '../../../components/TextLink.tsx';

const HomeNews = () => {
 const combinedNews = [...(newsData.items || []), ...(newsData.items || [])];
 const filteredNews = combinedNews.filter((news) =>
  ['1', '2', '3', '4', '5'].includes(news.id)
 );
 const sliderRef = useInfiniteCarousel();

 return (
  <section className='sx:py-16 h-auto overflow-hidden py-12 sm:py-20'>
   <div className='xs:ml-5 mb-5 ml-3 flex justify-between text-xl font-semibold sm:mb-10 sm:ml-12 sm:text-2xl'>
    <h3 className='flex items-center gap-3'>MEDIA</h3>
   </div>
   <div className='relative w-full overflow-hidden'>
    <ul ref={sliderRef} className='flex gap-10 whitespace-nowrap'>
     {/* 슬라이드를 자연스럽게 이어붙이기 위해 리스트를 두 번 렌더링 */}
     {[...filteredNews, ...filteredNews].map((news, index) => (
      <NewsCard key={`${news.id}-${index}`} news={news} />
     ))}
    </ul>
    <TextLink
     href='/company/news'
     size='lg'
     className='flex items-center gap-3 font-extrabold'>
     <LuCircleArrowRight className='text-primary font-extrabold' />
     <span>모든 소식 보기</span>
    </TextLink>
   </div>
  </section>
 );
};

export default HomeNews;