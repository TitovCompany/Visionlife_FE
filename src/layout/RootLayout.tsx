import '../index.css';
import Navigation from './Navbar';
import Footer from './Footer';
import {Outlet, ScrollRestoration} from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <div className="h-full min-h-screen w-full min-w-full">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
