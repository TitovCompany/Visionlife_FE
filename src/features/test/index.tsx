import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);

const Test = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(0);

  useGSAP(() => {
    if (sectionsRef.current[currentSection]) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: sectionsRef.current[currentSection], autoKill: false },
        ease: "power3.out",
      });
    }
  }, [currentSection]); // currentSection 변경 시 애니메이션 실행

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      setCurrentSection((prev) => {
        const newIndex = prev + direction;
        return newIndex < 0 || newIndex >= sectionsRef.current.length
          ? prev
          : newIndex;
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full">
      <div
        className="h-screen flex items-center justify-center bg-primary text-white text-4xl"
        ref={(el) => el && (sectionsRef.current[0] = el)}
      >
        섹션 1
      </div>
      <div
        className="h-screen flex items-center justify-center bg-amber-300 text-black text-4xl"
        ref={(el) => el && (sectionsRef.current[1] = el)}
      >
        섹션 2
      </div>
      <div
        className="h-screen flex items-center justify-center bg-black text-white text-4xl"
        ref={(el) => el && (sectionsRef.current[2] = el)}
      >
        섹션 3
      </div>
      <div
        className="h-screen flex items-center justify-center bg-green-600 text-white text-4xl"
        ref={(el) => el && (sectionsRef.current[3] = el)}
      >
        섹션 4
      </div>
    </div>
  );
};

export default Test;
