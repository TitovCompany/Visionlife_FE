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
import GridLayout from '../../layout/Grid/GridLayout.tsx';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
 return (
  <>
   <Header />
   <main className='min-h-screen w-full text-center bg-color/20'>
    <GridLayout>
     <Hero />
     <WhyUsSection />
     <Media />
     <GlobalBusiness />
    </GridLayout>
   </main>
  </>
 );
};

export default Home;