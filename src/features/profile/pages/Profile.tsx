import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Profile = () => {
 useGSAP(() => {
  const panels = gsap.utils.toArray(".pSection") as HTMLElement[];
  panels.forEach((panel) => {
   ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true,
    pinSpacing: false
   });
  });
 }, []);

 return (
  <>
   <section className="pSection relative h-screen flex items-center justify-center bg-cover bg-center bg-[url('/img/product/features/p4.png')]">
    <h1 className="text-white text-7xl font-bold">About Us</h1>
   </section>

   <section className="pSection relative h-screen flex items-center justify-center bg-cover bg-center bg-[url('/img/business/p1.jpg')]">
    <h1 className="text-white text-7xl font-bold">Vision Life</h1>
   </section>

   <section className="pSection relative h-screen flex items-center justify-center bg-cover bg-center bg-[url('/img/business/p2.jpg')]">
    <h1 className="text-white text-7xl font-bold">Visual Identity</h1>
   </section>

   <section className="pSection relative h-screen flex items-center justify-center bg-cover bg-center bg-[url('/img/business/p3.jpg')]">
    <h1 className="text-white text-7xl font-bold">Product</h1>
   </section>
  </>
 );
};

export default Profile;