import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const TestPage = () => {
  useGSAP(()=>{

    ScrollTrigger.create({
      trigger:"container-test",
      animation:gsap.to(".square-fst",{
        x:400,
        rotate:"360deg",
        duration:2,
      }),
      scrub:1,
      start:"top top",
      end:'bottom top'
    })

  },[])

  return (
      <div className="h-screen">
        <div className="container-test h-[500vh] flex flex-col bg-primary">
          <div className="square-fst w-[5rem] h-[5rem] mt-32 bg-white fixed"></div>
        </div>
      </div>
  );
};

export default TestPage;