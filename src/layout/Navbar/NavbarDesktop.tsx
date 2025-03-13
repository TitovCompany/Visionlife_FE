import NavbarMenu from './NavbarMenu.tsx';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import Logo from '../../components/Logo.tsx';

const NavbarDesktop: React.FC<DesktopNavbarProps> = ({
 isDropdownVisible,
 setIsDropdownVisible,
 navigation,
}) => {
 return (
  <div className='relative hidden lg:block z-[99999]'>
   <div className='mx-auto flex max-w-sm md:max-w-5xl xl:max-w-7xl items-center justify-between'>
    <h2 className='flex justify-between items-center text-3xl font-bold'>
     {/*<Logo className='w-18 h-18'/>*/}
     <Link to='/'>PROUTEX.com</Link>
    </h2>
    <NavbarMenu
     type='_nav'
     items={navigation}
     onMouseEnter={() => setIsDropdownVisible(true)}
     onMouseLeave={() => setIsDropdownVisible(false)}
    />
   </div>

    {/* 서브 메뉴 */}
   <div
    className={clsx(
     'bg-primary text-color absolute inset-x-0 top-full border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out',
     isDropdownVisible ? 'visible opacity-100' : 'invisible opacity-0'
    )}
    onMouseEnter={() => setIsDropdownVisible(true)}
    onMouseLeave={() => setIsDropdownVisible(false)}>
     <h2 className='hidden'>서브 메뉴</h2>
    <div className='md:max-w-5xl mx-auto flex items-center justify-between w-full xl:max-w-7xl'>
      <Logo className='w-40 h-40'/>
     <NavbarMenu
      type='_sub'
      items={navigation} />
    </div>
   </div>
  </div>
 );
};

export default NavbarDesktop;