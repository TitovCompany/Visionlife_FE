import {useState} from 'react';
import NavbarMobile from './NavbarMobile.tsx';
import NavbarDesktop from './NavbarDesktop.tsx';
import navigation from '../../data/navigation.json';

const Navigation = () => {
 const [isDropdownVisible, setIsDropdownVisible] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [openSubmenus, setOpenSubmenus] = useState<{[key: number]: boolean}>(
  {}
 );

 const toggleSubmenu = (index: number) => {
  setOpenSubmenus((prev) => ({...prev, [index]: !prev[index]}));
 };

 return (
  <>
   <NavbarDesktop
    isDropdownVisible={isDropdownVisible}
    setIsDropdownVisible={setIsDropdownVisible}
    navigation={navigation}
   />
   <NavbarMobile
    isMobileMenuOpen={isMobileMenuOpen}
    setIsMobileMenuOpen={setIsMobileMenuOpen}
    navigation={navigation}
    toggleSubmenu={toggleSubmenu}
    openSubmenus={openSubmenus}
   />
  </>
 );
};

export default Navigation;