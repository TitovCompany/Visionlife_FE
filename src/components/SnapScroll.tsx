import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface SnapScrollProps {
 children?: React.ReactNode;
 className?: string;
};

// Registering the ScrollToPlugin for GSAP
gsap.registerPlugin(ScrollToPlugin);
const SnapScroll = ({
 children,
 className
} : SnapScrollProps) => {
 // Ref to track the scrollable container
 const containerRef = useRef<HTMLDivElement>(null!);

 // State to track the active section index
 // const [index, setIndex] = useState<number>(0);
 const currentIndex = useRef<number>(0);

 // Ref to prevent multiple scroll triggers at the same time
 const isScrolling = useRef<boolean>(false);

 useEffect(() => {
  const container = containerRef.current; // Get the container element
  const sections = container.querySelectorAll<HTMLDivElement>('section'); // Get all sections

  // Function to handle scroll events
  const handleScroll = (event: WheelEvent) => {
   event.preventDefault(); // Prevent default scroll behavior

   if (isScrolling.current) return; // Ignore if already scrolling
   isScrolling.current = true; // Set scrolling flag

   /*// Update the active section index
   setIndex((prevIndex) => {
    const newIndex = event.deltaY > 0
     ? Math.min(sections.length - 1, prevIndex + 1) // Scroll Down
     : Math.max(0, prevIndex - 1); // Scroll Up

    // Animate scroll to the targeted section using GSAP
    gsap.to(container, {
     scrollTo: {
      y: sections[newIndex], // Scroll to the selected section
      autoKill: false, // Ensures smooth transition
     },
     duration: 1, // Animation duration
     ease: 'power2.inOut', // Smooth easing effect
     onComplete: () => {
      // Allow scrolling again after a short delay
      setTimeout(() => {
       isScrolling.current = false;
      }, 50);
     },
    });

    return newIndex; // Return the updated index
   });*/
   const newIndex =
    event.deltaY > 0
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

 return (
  <>
   <div
    ref={containerRef} // Attach ref to container
    style={{
     width: '100%',
     height: '100vh',
     color: 'white',
     overflowY: 'auto', // Enable scrolling
     fontSize: '30px',
    }}
    className={className}
   >
    {children}
   </div>
  </>
 );
}

export default SnapScroll