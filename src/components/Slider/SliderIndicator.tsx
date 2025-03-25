import {ReactNode, useRef} from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

interface SliderIndicatorProps {
 className?: string;
 children?: ReactNode;
 text?: string;
}

const SliderIndicator = ({
 className,
 children,
 text = 'Scroll Down',
} : SliderIndicatorProps) => {
 const bounceRef = useRef<HTMLDivElement | null>(null);

 useGSAP(() => {
  gsap.fromTo(bounceRef.current, {
    y: 0,
   }, {
    y: 20,
    duration: 1.2,
    repeat: -1, // 무한 반복
    yoyo: true, // 왕복
    ease: 'power1.inOut', // 부드러운 움직임
   }
  );
 }, []);

 return (
  <>
   <div
    ref={bounceRef}
    className={clsx('absolute bottom-64 left-1/2 z-[8888] -translate-x-1/2', className)}>
    {children}
   </div>
   <p className='absolute bottom-52 left-1/2 z-[8888] -translate-x-1/2 text-xl'>{text}</p>
  </>
 );
};

export default SliderIndicator;