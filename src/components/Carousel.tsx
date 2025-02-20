import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import news from "../data/news.json";
import { Link } from "react-router-dom";

const NewsCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-full max-w-xs md:max-w-6xl mx-auto py-10 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 117000 }}
        loop={true} // 무한 루프 활성화
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // 초소형 모바일
          640: { slidesPerView: 1, spaceBetween: 15 }, // 모바일
          768: { slidesPerView: 2, spaceBetween: 20 }, // 태블릿
          1024: { slidesPerView: 3, spaceBetween: 30 }, // 데스크탑
          1280: { slidesPerView: 3, spaceBetween: 40 }, // 대형 화면
        }}>
        {news.items.map((item) => (
          <SwiperSlide key={item.id} className="mb-10">
            <Link to={`/company/news/${item.id}`} className="mb-5 max-w-sm mx-auto block bg-gray-100 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="relative md:w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <img
                  src={item.imageUrl || `/img/news/default-image.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{item.title}</h3>
                <p className="pt-3 text-sm text-gray-500">
                  {new Date(item.publishedDate).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
