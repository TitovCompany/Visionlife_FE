import React from 'react';
import Logo from '../../components/Logo.tsx';
import {NavigationT} from './index.tsx';
import NavbarMenu from './NavbarMenu.tsx';
import clsx from 'clsx';

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

  const subClasses = clsx(
    'absolute inset-x-0 top-full border-t bg-white border-gray-200 shadow-md transition-all duration-300 ease-in-out',
    isDropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible');

  return (
    <div
      className="hidden md:block relative"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}>
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4 h-18">
        <Logo type="_desktop" />
        <NavbarMenu type="_nav" items={navigation} />
      </div>

      <div className={subClasses}>
        <div className="w-full max-w-7xl mx-auto flex">
          <NavbarMenu type="_sub" items={navigation} />
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;