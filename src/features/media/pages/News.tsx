import NewsCardList from '../components/NewsCardList.tsx';
import Carousel from '../../../components/Carousel.tsx';

const News = () => {
 return (
  <section className='grid grid-cols-12 overflow-x-hidden'>
   {/* News Header */}
   <article className='mx-auto w-full font-bold md:pt-16 md:pb-5 col-span-12 lg:col-start-2'>
    <p className='text-primary border-b-primary mb-2 w-fit border-b px-1 text-sm font-semibold md:text-base'>
     Media
    </p>
    <h3 className='text-2xl md:text-4xl'>비전라이프 최신 뉴스</h3>
   </article>

   {/* Video */}
   <article className='w-full col-span-12 lg:col-start-2 lg:col-end-12'>
    <iframe
     className='w-full rounded-xl'
     height='515'
     src='https://www.youtube.com/embed/6K8vBBA626g?si=X4BEkn_WFieo9L0S'
     title='YouTube video player'
     frameBorder='0'
     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
     referrerPolicy='strict-origin-when-cross-origin'
     allowFullScreen></iframe>
   </article>

   {/* Carousel */}
   <Carousel />
   <article className='w-full col-span-12 lg:col-start-2 lg:col-end-12'>
    <h3 className='text-2xl font-bold md:text-4xl'>전체 뉴스</h3>
    <NewsCardList layout='vertical' />
   </article>
  </section>
 );
};

export default News;