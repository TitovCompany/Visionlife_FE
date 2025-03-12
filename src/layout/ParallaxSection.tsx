import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
 const containerRef = useRef(null);
 const imageRef = useRef(null);

 useEffect(() => {
  gsap.to(imageRef.current, {
   yPercent: -20,
   scrollTrigger: {
    trigger: containerRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
   },
  });
 }, []);

 return (
  <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-gray-100">
   <div className="absolute inset-0 overflow-hidden">
    <img
     ref={imageRef}
     src="/img/hero-bg.jpg"
     alt="Parallax Background"
     className="w-full h-full object-cover"
    />
   </div>
   <div className="relative z-10 max-w-4xl text-center bg-white bg-opacity-80 p-10 rounded-lg">
    <h2 className="text-5xl font-bold">지속 가능한 미래를 만듭니다</h2>
    <p className="mt-4 text-xl">비젼라이프홀딩스는 99% 무폐수 나일론 잉크를 개발합니다.</p>
   </div>
  </section>
 );
};

export default ParallaxSection;