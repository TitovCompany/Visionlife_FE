import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const contents = [
 { title: "Danielle Vail", image: "https://picsum.photos/seed/photo1/1000" },
 { title: "Agatha Holborn", image: "https://picsum.photos/seed/photo2/1000" },
 { title: "Leonora-Lettie Tomson", image: "https://picsum.photos/seed/photo3/1000" },
 { title: "Taryn Rihanna Leary", image: "https://picsum.photos/seed/photo4/1000" },
 { title: "Krystin Elphinstone", image: "https://picsum.photos/seed/photo5/1000" },
 { title: "Jazlyn Hilton", image: "https://picsum.photos/seed/photo6/1000" },
 { title: "Alisa-Jewell Woods", image: "https://picsum.photos/seed/photo7/1000" },
 { title: "Ariel-Rayna Steel", image: "https://picsum.photos/seed/photo8/1000" },
 { title: "Sidney-Patricia Carwardine", image: "https://picsum.photos/seed/photo9/1000" },
 { title: "Dee Pickles", image: "https://picsum.photos/seed/photo10/1000" },
];

const ScrollImage: React.FC = () => {
 const sectionsRef = useRef<HTMLDivElement[]>([]);

 useEffect(() => {
  const polygonFrom = "polygon(0% 100%, 100% 100%, 100% 200%, 0% 200%)";
  const polygonTo = "polygon(0% -100%, 100% -100%, 100% 0%, 0% 0%)";

  sectionsRef.current.forEach((section, i) => {
   if (!section) return;
   const title = section.querySelector(".title") as HTMLElement;
   const graphic = section.querySelector(".graphic") as HTMLElement;

   gsap.fromTo(
    title,
    { clipPath: polygonFrom },
    {
     clipPath: polygonTo,
     ease: "none",
     scrollTrigger: {
      trigger: section,
      start: "top center+=300px",
      end: "bottom-=300px top",
      scrub: true,
     },
    }
   );

   gsap.fromTo(
    graphic,
    { clipPath: polygonFrom, backgroundPositionY: "60px" },
    {
     clipPath: polygonTo,
     backgroundPositionY: "-60px",
     ease: "linear",
     scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
     },
    }
   );
  });
 }, []);

 return (
  <div className="relative w-screen h-[120vh] bg-black overflow-hidden">
   <div className="pt-[100vh]">
    {contents.map((content, index) => (
     <div
      key={index}
      className="relative w-full h-screen bg-cover bg-center"
      ref={(el) => (sectionsRef.current[index] = el!)}
     >
      <h1 className="title fixed bottom-24 left-12 z-10 text-white font-semibold text-5xl">
       {content.title}
      </h1>
      <div
       className="graphic fixed inset-0 z-0 w-full h-full bg-cover"
       style={{ backgroundImage: `url(${content.image})` }}
      ></div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ScrollImage;