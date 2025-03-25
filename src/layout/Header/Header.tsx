import {RefObject, useState} from 'react';
import useScrollDirection from '../../hooks/useScrollDirection.tsx';
import clsx from 'clsx';
import NavbarDesktop from '../Navbar/NavbarDesktop.tsx';
import navigation from '../../data/navigation.json';
import NavbarMobile from '../Navbar/NavbarMobile.tsx';
//  Logo from '../../components/Logo.tsx';

const Header = ({
 ref,
 className,
}: {
 ref?: RefObject<HTMLDivElement | null>;
 className?: string;
}) => {
 // Nav State
 const [isDropdownVisible, setIsDropdownVisible] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [openSubmenus, setOpenSubmenus] = useState<{[key: number]: boolean}>({});

 // Animation
 const isVisible = useScrollDirection();

 // Navigation Toggle
 const toggleSubmenu = (index: number) => {
  setOpenSubmenus((prev) => ({...prev, [index]: !prev[index]}));
 };

 return (
  <header
   id='header'
   ref={ref}
   className={clsx(
    className,
    //'bg-primary text-color',
    'bg-primary text-color',
    'fixed top-0 left-0 z-50 w-full',
    'transition-transform duration-300',
    isVisible ? 'translate-y-0' : '-translate-y-full'
   )}>
   <NavbarDesktop
    isDropdownVisible={isDropdownVisible}
    setIsDropdownVisible={setIsDropdownVisible}
    navigation={navigation}/>
   <NavbarMobile
    isMobileMenuOpen={isMobileMenuOpen}
    setIsMobileMenuOpen={setIsMobileMenuOpen}
    navigation={navigation}
    toggleSubmenu={toggleSubmenu}
    openSubmenus={openSubmenus}/>
  </header>
 );
};

export default Header;