import '../index.css';
import Navigation from './Navigation.tsx';
import Footer from './Footer.tsx';
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
