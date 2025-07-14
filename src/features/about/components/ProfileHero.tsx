import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const ProfileHero = () => {
 const logoRef = useRef<HTMLImageElement>(null);
 const sinceRef = useRef<HTMLImageElement>(null);
 const titleRef = useRef(null);
 useGSAP(() => {
  const tl = gsap.timeline();
  tl.fromTo(
   titleRef.current, {
    opacity: 0,
    y: 100,
   }, {
    duration: 1.2,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    stagger: 0.2,
   });

  tl.fromTo(sinceRef.current, {
   opacity: 0,
   y: 100,
  }, {
   duration: 1.2,
   opacity: 1,
   y: 0,
   ease: 'power3.out',
   stagger: 0.2,
  });

  tl.fromTo(logoRef.current, {
   opacity: 0,
   x: 200,
  }, {
   duration: 1.2,
   x: 0,
   opacity: 1,
   ease: 'power3.out',
   stagger: 0.2,
  })
 }, []);

 return (
  <section className='min-h-screen grid items-center px-4 md:px-0'>
   <article className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full'>
    <div className='space-y-6 text-right'>
    <h1 ref={titleRef} className='text-primary text-5xl md:text-7xl font-bold'>Vision Life</h1>
    <h2 ref={sinceRef} className='text-primary text-2xl md:text-3xl font-bold'>Since. 2000</h2>
    </div>
    <img ref={logoRef} src='/logo.webp' alt='(주)비전 라이프 로고' className="max-md:w-[300px] max-md:h-[300px] object-contain"/>
   </article>
  </section>
 );
};

export default ProfileHero;