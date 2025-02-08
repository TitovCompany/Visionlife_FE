import './index.css';
import Navigation from './layout/Navigation.tsx';
import Footer from './layout/Footer.tsx';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="mx-auto h-full w-full max-w-[1440px]">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
