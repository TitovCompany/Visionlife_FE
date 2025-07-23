import React from 'react';
//import Logo from '../../components/Logo.tsx';
import {IoMdClose} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import NavbarMobileMenu from './NavbarMobileMenu.tsx';
import {Link} from 'react-router-dom';
// import NavbarMenu from './NavbarMenu.tsx';

const NavbarMobile: React.FC<MobileNavbarProps> = (props) => {
 const {
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navigation,
  toggleSubmenu,
  openSubmenus,
 } = props;

 return (
  <div className='lg:hidden'>
   {/* 로고와 햄버거 버튼 */}
   <div className='flex items-center justify-between bg-primary text-color border-b-0 border-gray-50 px-4 py-4'>
    {/*<Logo className='w-18 h-18'/>*/}
    <h2 className='flex items-center text-xl font-bold'>
     <Link to='/'>PROUTEX.com</Link>
    </h2>
    <button
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     className='cursor-pointer p-2 focus:outline-none'>
     {isMobileMenuOpen ? (
      <IoMdClose className='h-6 w-6' />
     ) : (
      <GiHamburgerMenu className='h-6 w-6' />
     )}
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
   )}
  </div>
 );
};

export default NavbarMobile;