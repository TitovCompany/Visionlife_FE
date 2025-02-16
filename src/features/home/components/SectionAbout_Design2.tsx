import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// 미디어 쿼리를 위한 커스텀 훅
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const serviceItem = [
  { id: 1, src: "/img/service/p1.webp", title: "회사 연혁" },
  { id: 2, src: "/img/service/p2.webp", title: "회사 소개" },
  { id: 3, src: "/img/service/p3.webp", title: "비즈니스" },
  { id: 4, src: "/img/service/p4.webp", title: "오시는 길" },
];

const SectionAbout_Design2 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[560px] relative overflow-x-hidden">
      {/* 왼쪽 섹션 */}
      <article className="w-full md:w-1/2 lg:w-1/3 md:px-14 lg:px-12 pt-8 px-4 md:pt-16 pb-8 md:pb-80 text-center bg-primary text-white">
        <h2 className="mb-4 md:mb-10 text-2xl md:text-3xl lg:text-4xl text-left font-semibold">
          Vision Life
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-left leading-6 md:leading-8">
          지속 가능한 미래를 그리며,<br />
          세상을 연결하는 친환경 기술을<br />
          만들어갑니다.
        </p>
      </article>

      {/* 오른쪽 섹션 */}
      <ul className="w-full md:w-1/2 lg:w-2/3 h-[300px] md:h-full mx-auto flex flex-col relative overflow-hidden">
        {serviceItem.map((item, index) => {
          const isActive = hoveredId === item.id;
          let liStyle: React.CSSProperties = {};

          if (isDesktop) {
            if (hoveredId === null) {
              liStyle = { top: `${index * (100 / serviceItem.length)}%` };
            } else if (!isActive) {
              liStyle = { top: `${index < hoveredId ? 0 : 100}%` };
            }
          } else {
            // 모바일에서는 기본 흐름에 맡기므로 inline style 비우기
            liStyle = {};
          }

          return (
            <li
              key={item.id}
              role="button"
              tabIndex={0}
              style={liStyle}
              className={`relative md:absolute w-full transition-[height,top,opacity] duration-500 ease-in-out cursor-pointer 
                ${isActive ? "h-full top-0 left-0 z-50 opacity-100" : "h-1/4 opacity-100"}
              `}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                to="/"
                className="absolute inset-0 z-30 w-full h-full flex items-center justify-start text-xl md:text-3xl font-semibold pl-6"
              >
                {item.title}
              </Link>
              <img
                src={item.src}
                alt={`${item.title} 백그라운드 이미지`}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out blur-md
                  ${isActive ? "scale-105" : "scale-100"}
                `}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionAbout_Design2;
