import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import AboutUs from '../components/Profile/AboutUs.tsx';
import VisualIdentity from '../components/Profile/VisualIdentity.tsx';
import EcoLife from '../components/Profile/EcoLife.tsx';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Profile = () => {
 const headerRef = useRef(null);
 const imageRef = useRef<HTMLImageElement>(null);
 const titleRef = useRef(null);
 useGSAP(() => {
  const tl = gsap.timeline();
  tl.fromTo(
   titleRef.current,
   {
    opacity: 0,
    y: 100,
   },
   {
    duration: 1.2,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    stagger: 0.2,
   }
  );
  console.log(imageRef.current);
  tl.fromTo(
   imageRef.current,
   {
    height: 300,
   },
   {
    height: 814,
    duration: 1.2,
    scrollTrigger: {
     trigger: titleRef.current,
     start: 'bottom 50%',
     end: '+=800px',
     scrub: 1,
     markers: true,
    },
   }
  );
 }, []);

 return (
  <>
   {/* Title */}
   <section ref={headerRef} className='min-h-screen grid items-center'>
    <article className='flex items-center justify-center'>
     <div className='space-y-6 text-right'>
      <h1 ref={titleRef} className='text-primary text-7xl font-bold'>Vision Life</h1>
      <h2 className='text-primary text-3xl font-bold'>Since. 2000</h2>
     </div>
     <img src='/img/logo.webp' alt='' />
    </article>
   </section>
   {/* About Us */}
   <AboutUs imageRef={imageRef} />
   {/* Visual Identity */}
   <VisualIdentity />
   {/* Eco Life */}
   <EcoLife />
  </>
 );
};

export default Profile;