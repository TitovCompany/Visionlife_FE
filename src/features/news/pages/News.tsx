import NewsCardList from '../components/NewsCardList.tsx';
import Carousel from '../../../components/Carousel.tsx';

const News = () => {
  return (
    /* mx-auto md:max-w-6xl lg:max-w-7xl */
    <section className='overflow-x-hidden'>
      <div className='mx-auto w-full max-w-xs pt-20 font-bold md:max-w-5xl md:px-4 md:pt-32 lg:max-w-6xl xl:max-w-7xl xl:px-0'>
        <p className='text-primary border-b-primary mb-4 w-fit border-b px-1 text-sm font-semibold md:text-base'>
          언론 보도
        </p>
        <h3 className='text-2xl md:text-4xl'>비전라이프 최신 뉴스</h3>
      </div>
      <Carousel />
      <div className='mx-auto w-full max-w-xs md:max-w-3xl md:px-4 lg:max-w-4xl lg:px-0'>
        <h3 className='text-2xl font-bold md:text-4xl'>전체 뉴스</h3>
        <NewsCardList layout='vertical' />
      </div>
    </section>
  );
};

export default News;
