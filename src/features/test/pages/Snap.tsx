import { useRef } from 'react';
import {useSnapScroll} from '../../../hooks/useSnapScroll.ts';

const Snap = () => {
 const containerRef = useRef<HTMLDivElement>(null);
 useSnapScroll(containerRef);

 return (
  <div ref={containerRef} className='w-full'>
   <section className="h-screen bg-red-500 w-screen flex items-center justify-center text-white text-6xl">
    1
   </section>
   <section className="h-screen bg-blue-500 w-screen flex items-center justify-center text-white text-6xl">
    2
   </section>
   <section className="h-screen bg-green-500 w-screen flex items-center justify-center text-white text-6xl">
    3
   </section>
  </div>
 );
};

export default Snap;