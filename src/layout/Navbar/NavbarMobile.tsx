import React from 'react';
import {NavigationT} from './index.tsx';
import Logo from '../../components/Logo.tsx';
import {IoMdClose} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import NavbarMobileMenu from './NavbarMobileMenu.tsx';
// import NavbarMenu from './NavbarMenu.tsx';

interface MobileNavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  navigation: NavigationT[];
  toggleSubmenu: (index: number) => void;
  openSubmenus: {
    [key: number]: boolean;
  };
}

const NavbarMobile: React.FC<MobileNavbarProps> = (props) => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    navigation,
    toggleSubmenu,
    openSubmenus,
  } = props;

  return (
    <div className="lg:hidden">
      {/* 로고와 햄버거 버튼 */}
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
        <Logo type="_mobile"/>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 cursor-pointer focus:outline-none">
          {isMobileMenuOpen
            ? <IoMdClose className="h-6 w-6"/>
            : <GiHamburgerMenu className="h-6 w-6"/>}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <NavbarMobileMenu
          navigation={navigation}
          openSubmenus={openSubmenus}
          toggleSubmenu={toggleSubmenu}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />

        /*<NavbarMenu
          items={navigation}
          openSubmenus={openSubmenus}
          toggleSubmenu={toggleSubmenu}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />*/
      )}
    </div>
  );
};

export default NavbarMobile;