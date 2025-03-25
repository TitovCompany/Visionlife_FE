import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {useGSAP} from '@gsap/react';
import lenis from '../libs/lenis.ts';

gsap.registerPlugin(ScrollToPlugin);
export const useSnapScroll = (
 containerRef: React.RefObject<HTMLDivElement | null>
) => {
 const indexRef = useRef(0);
 const isScrolling = useRef(false);

 useGSAP(() => {
  const container = containerRef.current;
  if (!container) return;
  const sections = container.querySelectorAll('section');

  const handleScroll = (event: WheelEvent) => {
   event.preventDefault();
   if (isScrolling.current) return;
   isScrolling.current = true;

   const currentIndex = indexRef.current;
   const nextIndex =
    event.deltaY > 0
     ? Math.min(sections.length - 1, currentIndex + 1)
     : Math.max(0, currentIndex - 1);

   indexRef.current = nextIndex; // ✅ 바로 반영

   /*gsap.to(window, {
    scrollTo: {
     y: (sections[nextIndex] as HTMLElement).offsetTop,
     autoKill: false,
    },
    duration: 1,
    ease: 'power2.inOut',
    onComplete: () => {
     setTimeout(() => {
      isScrolling.current = false;
     }, 500);
    },
   });
  };*/
   // Lenis로 스크롤 이동
   lenis.scrollTo(sections[nextIndex], {
    offset: 0,
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
   });

   setTimeout(() => {
    isScrolling.current = false;
   }, 1400); // duration + margin
  };

  window.addEventListener('wheel', handleScroll, { passive: false });
  return () => window.removeEventListener('wheel', handleScroll);
 }, [containerRef]);
};