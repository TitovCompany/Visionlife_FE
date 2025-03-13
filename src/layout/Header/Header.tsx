import {RefObject} from 'react';
import useScrollDirection from '../../hooks/useScrollDirection.tsx';
import clsx from 'clsx';
import Navigation from '../Navbar/Navbar.tsx';
//  Logo from '../../components/Logo.tsx';

const Header = ({ref}: {ref?: RefObject<HTMLDivElement | null>}) => {
 const isVisible = useScrollDirection();
 return (
  <header
   id='header'
   ref={ref}
   className={clsx(
    //'bg-primary text-color',
    'text-black',
    'fixed top-0 left-0 z-50 w-full',
    'transition-transform duration-300',
    isVisible ? 'translate-y-0' : '-translate-y-full'
   )}>
   <Navigation />
  </header>
 );
};

export default Header;
