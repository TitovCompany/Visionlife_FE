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
    start: () =>
     panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    pin: true,
    pinSpacing: false,
   });
  });
 }, []);

 return (
  <>
   {/* About Us Section */}
   <section className="pSection relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/img/product/features/p4.png')] text-center px-6">
    <h1 className="text-white text-7xl font-bold">About Us</h1>
    <p className="text-white text-lg max-w-2xl mt-4">
     비전라이프는 친환경 혁신을 통해 지속 가능한 미래를 만들어갑니다.
     우리는 새로운 기술과 창의적인 솔루션을 통해 환경 보호와 산업의 발전을 동시에 이루고자 합니다.
    </p>
   </section>

   {/* Vision Life Section */}
   <section className="pSection relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/img/business/p1.jpg')] text-center px-6">
    <h1 className="text-white text-7xl font-bold">Vision Life</h1>
    <p className="text-white text-lg max-w-2xl mt-4">
     비전라이프는 지속 가능한 기술 개발을 통해 환경 보호와 혁신적인 제품을 제공합니다.
     우리의 목표는 친환경적인 염색 공정을 통해 미래를 더 깨끗하고 밝게 만드는 것입니다.
    </p>
   </section>

   {/* Visual Identity Section */}
   <section className="pSection relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/img/business/p2.jpg')] text-center px-6">
    <h1 className="text-white text-7xl font-bold">Visual Identity</h1>
    <p className="text-white text-lg max-w-2xl mt-4">
     우리의 브랜드 아이덴티티는 지속 가능성과 혁신을 상징합니다.
     친환경 소재와 디자인을 결합하여 더욱 지속 가능한 미래를 만들어갑니다.
    </p>
   </section>

   {/* ECO Life Section */}
   <section className="pSection relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/img/business/p3.jpg')] text-center px-6">
    <h1 className="text-white text-7xl font-bold">ECO Life</h1>
    <p className="text-white text-lg max-w-2xl mt-4">
     친환경적 삶을 실천하는 것은 우리의 사명입니다.
     비전라이프는 무폐수 염색 기술과 지속 가능한 제품을 통해 자연과 조화를 이루는 삶을 지원합니다.
    </p>
   </section>
  </>
 );
};

export default Profile;