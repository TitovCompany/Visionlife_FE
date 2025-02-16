import '../index.css';
import Navigation from './Navbar';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
// container max-w-[1440px] mx-auto
function RootLayout() {
  return (
    <div className="w-full h-full">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
