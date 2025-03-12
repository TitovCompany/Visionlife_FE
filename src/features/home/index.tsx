import MoreNewsSection from './components/MoreNewsSection.tsx';
import BusinessSectionLayout from '../../layout/BusinessSectionLayout.tsx';
import intro from '../../data/home/intro.json';
import {useRef} from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation.ts';
import HomeNews from './components/HomeNews.tsx';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Header from '../../layout/Header/Header.tsx';
import WhyUsSection from './components/WhyUsSection.tsx';
import Hero from './components/Hero.tsx';

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  // 애니메이션 적용
  const headerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  /*useGSAP(() => {
    gsap.set(headerRef.current, {y: -100, opacity: 0});
    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'center center',
          scrub: true,
          markers: true,
        },
      })
      .to(heroRef.current, {
        y: '-100%',
        duration: 1,
        opacity: 1,
        ease: 'power1.out',
      })
    .to(headerRef.current, {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
    }, '<');
  }, []);*/
  useScrollAnimation('.home_item', 'top 80%');
  // min-h-[calc(100vh-4rem+10px-17.875rem)]
  // scroll-py-72
  return (
    <>
      <Header/>
      <main className='w-full min-h-screen'>
        <Hero/>
        <WhyUsSection/>

        {/* intro */}
        <section ref={sectionRef} className='overflow-x-hidden'>
          {intro.data.map((item, index) => (
            <BusinessSectionLayout
              key={index}
              title={item.title}
              description={item.description}
              src={item.src}
              art={item.art}
              href={item.href}
            />
          ))}
        </section>
        <HomeNews />
      </main>
    </>
  );
};

export default Home;