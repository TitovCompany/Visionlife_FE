// import {useRef} from 'react';
import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Header from '../../layout/Header/Header.tsx';
import WhyUsSection from './WhyUsSection/WhyUsSection.tsx';
// import Hero from './components/Hero.tsx';
import GlobalBusiness from './components/GlobalBusiness.tsx';
import Media from './components/Media.tsx';
import Hero from './Hero/Hero.tsx';
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
     <Hero />
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