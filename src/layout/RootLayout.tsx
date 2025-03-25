import '../index.css';
import Footer from './Footer';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import {useEffect} from 'react';
import lenis from '../libs/lenis.ts';

const RootLayout = () => {
 useEffect(() => {
  const raf = (time: number) => {
   lenis.raf(time);
   requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return () => {
   lenis.destroy();
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