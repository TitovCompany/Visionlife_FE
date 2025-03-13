import news from '../../../data/news.json';

const Media = () => {
 return (
  <section className='bg-primary text-color py-20'>
   <h2 className='text-5xl font-bold'>MEDIA</h2>
   <article className='mx-auto max-w-2xl py-10'>
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
   </article>
  </section>
 );
};

export default Media;
