import news from '../../../data/news.json';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const Media = () => {
 return (
  <GridArticle colStart={3} colEnd={11} className='py-20'>
   <h2 className='text-5xl font-bold'>News</h2>
   <div className='py-10'>
    {/* Media Carousel */}
    <div className='relative border-color flex items-start justify-around border-2'>
     <img src='/img/logo.webp' alt='test' className='h-72 w-72' />
     <div className='border-color mt-10 mr-10 w-full text-left'>
      <h3 className='mb-5 text-xl'>
        {news.items[0].title}
      </h3>
      <p className='line-clamp-6'>
        {news.items[0].content}
      </p>
     </div>
      {/* 이전 다음 버튼 */}
      <div className='absolute top-1/2 left-1/2 -translate-1/2 w-[105%] flex justify-between'>
        <button>이전</button>
        <button>다음</button>
      </div>
    </div>
   </div>
  </GridArticle>
 );
};

export default Media;