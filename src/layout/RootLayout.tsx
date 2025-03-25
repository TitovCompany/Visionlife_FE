import '../index.css';
import Footer from './Footer';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import {useEffect} from 'react';
import Lenis from '@studio-freight/lenis';

const RootLayout = () => {
 useEffect(() => {
  const lenis = new Lenis({
   duration: 1.2, // 부드러운 스크롤 지속 시간
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 가속도 설정
   lerp: 0.1, // 부드러운 보간값 (값이 낮을수록 부드러움)
   wheelMultiplier: 1, // 마우스 휠 속도 조절
   touchMultiplier: 2, // 터치 스크롤 속도 조절
   gestureOrientation: "vertical", // 터치 스크롤 방향 설정 (vertical / horizontal)
  });

  const raf = (time: number) => {
   lenis.raf(time);
   requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return () => {
   lenis.destroy(); // 컴포넌트 언마운트 시 제거
  };
 }, []);

 return (
  <>
   <ScrollRestoration />
   <Outlet />
   <Footer />
  </>
 );
};

export default RootLayout;