// import {useRef} from 'react';
import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Header from '../../layout/Header/Header.tsx';
import WhyUsSection from './components/WhyUsSection.tsx';
import Hero from './components/Hero.tsx';
import GlobalBusiness from './components/GlobalBusiness.tsx';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {

 // min-h-[calc(100vh-4rem+10px-17.875rem)]
 // scroll-py-72
 return (
  <>
   <Header />
   <main className='min-h-screen w-full'>
    <Hero />
    <WhyUsSection />
    <section className='relative w-full bg-primary py-32'>
     <div className=''>
      <div>Special Design</div>
      <div>Future Continuous</div>
     </div>
    </section>
    <section>
     <div>
      <h2 className="text-5xl font-bold">MEDIA</h2>
     </div>
    </section>
    <GlobalBusiness/>

   </main>
  </>
 );
};

export default Home;