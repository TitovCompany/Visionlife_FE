import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from '../components/Profile/AboutUs.tsx';
import VisualIdentity from '../components/Profile/VisualIdentity.tsx';
import EcoLife from '../components/Profile/EcoLife.tsx';
import {useRef} from 'react';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Profile = () => {
 const headerRef = useRef(null);
 const imageRef = useRef<HTMLImageElement>(null);
 const titleRef = useRef(null);

 useGSAP(() => {
  const tl = gsap.timeline();
  tl.fromTo(titleRef.current, {
   opacity: 0,
   y: 100,
  }, {
   duration: 1.2,
   opacity: 1,
   y: 0,
   ease: "power3.out",
   stagger: 0.2
  })
  console.log(imageRef.current);
  tl.fromTo(imageRef.current, {
   height: 300,
  }, {
   height: 814,
   duration: 1.2,
   scrollTrigger: {
    trigger: titleRef.current,
    start: 'bottom 50%',
    end: '+=800px',
    scrub: 1,
    markers: true,
   }
  })
 }, [])

 return (
  <div className='bg-color/20'>
   {/* Title */}
   <div ref={headerRef} className='h-[calc(100vh-68px)] flex flex-col items-center justify-end'>
    <img src="/img/logo.webp" alt="" />
    <h1 ref={titleRef} className="mb-52 text-primary text-[200px] font-bold">Vision Life</h1>
   </div>
   <AboutUs imageRef={imageRef}/>
   <VisualIdentity/>
   <EcoLife/>
  </div>
 );
};

export default Profile;