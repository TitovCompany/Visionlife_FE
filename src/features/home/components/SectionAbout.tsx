import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const serviceItem = [
  {id: 1, src: '/img/service/p1.webp', title: '회사 연혁'},
  {id: 2, src: '/img/service/p2.webp', title: '회사 소개'},
  {id: 3, src: '/img/service/p3.webp', title: '비즈니스'},
  {id: 4, src: '/img/service/p4.webp', title: '오시는 길'},
];

const SectionAbout = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []);

  return (
    <section className="relative flex h-auto flex-col overflow-x-hidden md:h-[560px] md:flex-row">
      {/* 왼쪽 섹션 */}
      <article className="bg-primary w-full px-4 pt-8 pb-8 text-center text-white md:w-1/2 md:px-14 md:pt-16 md:pb-80 lg:w-1/3 lg:px-12">
        <h2 className="mb-4 text-left text-2xl font-semibold md:mb-10 md:text-3xl lg:text-4xl">
          Vision Life
        </h2>
        <p className="text-left text-base leading-6 md:text-lg md:leading-8 lg:text-xl">
          지속 가능한 미래를 그리며,
          <br />
          세상을 연결하는 친환경 기술을
          <br />
          만들어갑니다.
        </p>
      </article>

      {/* 오른쪽 섹션 */}
      <ul className="relative mx-auto flex h-[500px] w-full flex-col overflow-hidden md:h-full md:w-1/2 lg:w-2/3">
        {serviceItem.map((item, index) => {
          const isActive = hoveredId === item.id;
          let liStyle: React.CSSProperties = {};

          if (isDesktop) {
            if (hoveredId === null) {
              liStyle = {top: `${index * (100 / serviceItem.length)}%`};
            } else if (!isActive) {
              liStyle = {top: `${index < hoveredId ? 0 : 100}%`};
            }
          }

          return (
            <li
              key={item.id}
              role="button"
              tabIndex={0}
              style={liStyle}
              className={`relative w-full cursor-pointer transition-[height,top,opacity] duration-400 ease-in-out md:absolute ${isActive ? 'top-0 left-0 z-50 h-full opacity-100' : 'h-1/4 opacity-100'}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}>
              <Link
                to="/"
                className="absolute inset-0 z-30 flex h-full w-full items-center justify-start pl-6 text-xl font-semibold md:text-3xl">
                {item.title}
              </Link>
              <img
                src={item.src}
                alt={`${item.title} 백그라운드 이미지`}
                className="absolute inset-0 h-full w-full scale-100 object-cover blur-md transition-transform duration-300 ease-in-out"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionAbout;
