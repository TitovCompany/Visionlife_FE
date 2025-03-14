import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import news from '../data/news.json';
import {Link} from 'react-router-dom';

const NewsCarousel: React.FC = () => {
  return (
    <Swiper
      className='mySwiper my-14 w-full col-span-12 lg:col-start-2 lg:col-end-12'
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={'auto'}
      navigation
      pagination={{clickable: true}}
      autoplay={{delay: 7000}}
      loop={true} // 무한 루프 활성화
      breakpoints={{
        320: {slidesPerView: 1, spaceBetween: 5}, // 초소형 모바일
        640: {slidesPerView: 1, spaceBetween: 10}, // 모바일
        768: {slidesPerView: 2, spaceBetween: 0}, // 태블릿
        1024: {slidesPerView: 3, spaceBetween: 30}, // 데스크탑
        1280: {slidesPerView: 3, spaceBetween: 40}, // 대형 화면
      }}>
      {news.items.slice(0, 6).map((item) => (
        <SwiperSlide key={item.id} className='mx-auto mb-14'>
          <Link
            to={`/company/news/${item.id}`}
            className='mx-auto block transform overflow-hidden rounded-lg bg-gray-100 transition-transform hover:scale-105'>
            <div className='relative h-48 rounded-lg md:w-full'>
              <img
                src={item.imageUrl || `/img/news/default-image.jpg`}
                alt={item.title}
                className='h-full w-full rounded-t-lg object-cover'
              />
            </div>
            <div className='h-32 p-4 text-center'>
              <h3 className='line-clamp-2 text-lg font-bold text-gray-900'>
                {item.title}
              </h3>
              <p className='pt-3 text-sm text-gray-500'>
                {new Date(item.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsCarousel;