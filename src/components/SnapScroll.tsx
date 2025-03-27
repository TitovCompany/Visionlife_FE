import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import clsx from 'clsx';
import useSnapScroll from '../hooks/useSnapScroll.ts';

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
 const { containerRef } = useSnapScroll();

 return (
  <>
   <div ref={containerRef} // Attach ref to container
    className={clsx('w-full h-screen overflow-y-auto', className)}>
    {children}
   </div>
  </>
 );
}

export default SnapScroll