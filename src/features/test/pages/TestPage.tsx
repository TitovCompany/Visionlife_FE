import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const TestPage = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: 'container-test',
      animation: gsap.to('.square-fst', {
        x: 400,
        rotate: '360deg',
        duration: 2,
      }),
      scrub: 1,
      start: 'top top',
      end: 'bottom top',
    });
  }, []);

  return (
    <div className="h-screen">
      <div className="container-test bg-primary flex h-[500vh] flex-col">
        <div className="square-fst fixed mt-32 h-[5rem] w-[5rem] bg-white"></div>
      </div>
    </div>
  );
};

export default TestPage;
