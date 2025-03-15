// import {useRef} from 'react';
import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Header from '../../layout/Header/Header.tsx';
import WhyUsSection from './components/WhyUsSection.tsx';
// import Hero from './components/Hero.tsx';
import GlobalBusiness from './components/GlobalBusiness.tsx';
import Media from './components/Media.tsx';
import HeroV2 from './components/Hero_v2.tsx';
import Solutions from './components/Solutions.tsx';
import GridLayout from '../../layout/Grid/GridLayout.tsx';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
 // min-h-[calc(100vh-4rem+10px-17.875rem)]
 // scroll-py-72
 return (
  <>
   <Header />
   <main className='min-h-screen w-full text-center bg-color/20'>
    <GridLayout>
     <HeroV2 />
     <WhyUsSection />
     <Media />
     <Solutions/>
     <GlobalBusiness />
    </GridLayout>
   </main>
  </>
 );
};

export default Home;