import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {useEffect, useRef} from 'react';
//{containerRef} : {
//  containerRef?: RefObject<HTMLDivElement>
// }

// Registering the ScrollToPlugin for GSAP
gsap.registerPlugin(ScrollToPlugin);
const useSnapScroll = () => {
 // Ref to track the scrollable container
 const containerRef = useRef<HTMLDivElement>(null!);

 // State to track the active section index
 // const [index, setIndex] = useState<number>(0);
 const currentIndex = useRef<number>(0);

 // Ref to prevent multiple scroll triggers at the same time
 const isScrolling = useRef<boolean>(false);

 useEffect(() => {
  const container = containerRef.current; // Get the container element
  if (!container) {
   console.warn('❌ containerRef.current is null. SnapScroll 초기화 중단.');
   return;
  }

  const sections = container.querySelectorAll<HTMLDivElement>('section'); // Get all sections

  // Function to handle scroll events
  const handleScroll = (event: WheelEvent) => {
   event.preventDefault(); // Prevent default scroll behavior

   if (isScrolling.current) return; // Ignore if already scrolling
   isScrolling.current = true; // Set scrolling flag

   const newIndex = event.deltaY > 0
     ? Math.min(sections.length - 1, currentIndex.current + 1)
     : Math.max(0, currentIndex.current - 1);

   gsap.to(container, {
    scrollTo: {
     y: sections[newIndex],
     autoKill: false,
    },
    duration: 1,
    ease: 'power2.inOut',
    onComplete: () => {
     isScrolling.current = false;
    },
   });

   currentIndex.current = newIndex; // 값 갱신만
  };

  // Attach scroll event listener
  container.addEventListener('wheel', handleScroll, { passive: false });

  // Cleanup: Remove event listener when component unmounts
  return () => {
   container.removeEventListener('wheel', handleScroll);
  };
 }, []);

 return {containerRef};
}

export default useSnapScroll;