import NavbarMenu from './NavbarMenu.tsx';
import clsx from 'clsx';

const NavbarDesktop: React.FC<DesktopNavbarProps> = ({
 isDropdownVisible,
 setIsDropdownVisible,
 navigation,
}) => {
 return (
  <div className='relative hidden lg:block'>
   <div className='mx-auto flex max-w-7xl items-center justify-between'>
    <h2 className='flex items-center text-3xl font-bold'>
     {/*<Logo className='w-18 h-18'/>*/}
     PROUTEX.com
    </h2>
    <NavbarMenu
     type='_nav'
     items={navigation}
     onMouseEnter={() => setIsDropdownVisible(true)}
     onMouseLeave={() => setIsDropdownVisible(false)}
    />
   </div>

   <div
    className={clsx(
     'bg-primary absolute inset-x-0 top-full border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out',
     isDropdownVisible ? 'visible opacity-100' : 'invisible opacity-0'
    )}>
    <div className='mx-auto flex w-full max-w-7xl'>
     <NavbarMenu
      type='_sub'
      items={navigation}
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
     />
    </div>
   </div>
  </div>
 );
};

export default NavbarDesktop;