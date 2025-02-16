import React from 'react';
import Logo from '../../components/Logo.tsx';
import {NavigationT} from './index.tsx';
import NavbarMenu from './NavbarMenu.tsx';

interface DesktopNavbarProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: (isOpen: boolean) => void;
  navigation: NavigationT[];
}

const NavbarDesktop: React.FC<DesktopNavbarProps> = (props) => {
  const {
    isDropdownVisible,
    setIsDropdownVisible,
    navigation,
  } = props;
  return (
    <div
      className="hidden md:block relative"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}>
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4 h-18">
        <Logo type="_desktop"/>
        <NavbarMenu type="_nav" items={navigation}/>
      </div>

      <div className={`mx-auto max-w-7xl flex absolute inset-x-0 top-full bg-white border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out mt-${isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <NavbarMenu type="_sub" items={navigation}/>
      </div>
    </div>
  );
};

export default NavbarDesktop;