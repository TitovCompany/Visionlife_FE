import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const visionData = [
  {
    title: "친환경 잉크",
    description: "우리는 친환경 잉크와 지속 가능한 소재 기술을 통해 환경을 보호하며, 탄소 배출을 줄여 녹색 미래를 만듭니다.",
    img: "/img/profile/p1.jpg",
  },
  {
    title: "경제력 상승",
    description: "개발도상국 및 신흥 시장에서 경제적 기회를 창출하며, 균형 잡힌 성장을 도모합니다.",
    img: "/img/profile/p4.jpg",
  },
  {
    title: "함께 사는 사회",
    description: "우리는 기술을 통해 환경과 사람이 조화를 이루는 지속 가능한 사회를 만들어갑니다.",
    img: "/img/profile/p3.jpg",
  },
];

const VisionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? visionData.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === visionData.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {visionData.map((item, index) => (
          <div key={index} className="w-full flex flex-col items-center p-6">
            <img src={item.img} alt={item.title} className="w-96 h-96 object-cover rounded-xl" />
            <h4 className="text-3xl font-extrabold mt-6">{item.title}</h4>
            <p className="text-2xl font-semibold leading-relaxed text-center">{item.description}</p>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
        <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default VisionCarousel;
