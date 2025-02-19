import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useScrollSlide} from '../../../hooks/useScrollSlide.ts';
import vision from "../../../data/profile/vision.json";

gsap.registerPlugin(ScrollTrigger);

const VisionScroll = () => {
  const { sectionRef, sectionsRef, height } = useScrollSlide({
    direction: "vertical", // 가로 스크롤
    height: "h-screen", // 섹션 높이
    opacity: false, // 요소 페이드 아웃 효과 추가
  });

  return (
    <section ref={sectionRef} className={`relative pt-20 pb-32 flex ${height} w-full max-w-full flex-col bg-gray-100`}>
      <div className="w-full max-w-sm lg:max-w-5xl mx-auto pb-12 text-left font-bold">
        <p className="w-fit text-md lg:text-lg text-primary border-b border-b-primary">목표 및 방향성</p>
        <h2 className="text-3xl lg:text-5xl leading-relaxed">
          <span className="text-primary">비전라이프</span>가 창조하는<br/>
          지속 가능한 미래
        </h2>
      </div>

      {/* 내부 스크롤이 가능한 컨테이너 */}
      <div className="border-b-primary relative w-full max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col h-screen w-full overflow-hidden">
          {vision.data.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                // null이 아닐 때만 추가
                if (el) sectionsRef.current[index] = el;
              }}
              className="flex flex-col gap-10 h-full w-full flex-none">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] lg:h-[600px] object-cover"
              />
              <div className="w-full max-w-sm lg:max-w-4xl mx-auto z-10">
                <h4 className="pb-3 text-2xl lg:text-4xl font-extrabold">{item.title}</h4>
                <p className="text-lg lg:text-2xl leading-relaxed font-semibold lg:whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionScroll;
