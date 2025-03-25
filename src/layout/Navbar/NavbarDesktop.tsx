import NavbarMenu from './NavbarMenu.tsx';
import clsx from 'clsx';
import Logo from '../../components/Logo.tsx';
import {memo, FC} from 'react';

const NavbarDesktop: FC<DesktopNavbarProps> = ({
 isDropdownVisible,
 setIsDropdownVisible,
 navigation,
}) => {
 const maxWidth = clsx('mx-auto max-w-sm sm:max-w-4xl md:max-w-5xl lg:max-w-7xl xl:max-w-10/12');
 return (
  <div className='relative z-[99999] hidden lg:block'>
   {/* 메인 네비게이션 */}
   <div className={clsx('flex items-center justify-between', maxWidth)}>
    <h2>
     <Logo />
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
     'bg-white text-primary',
     'absolute inset-x-0 top-full',
     'border-primary/20 border-t border-b-2',
     'transition-all duration-300 ease-in-out',
     isDropdownVisible
      ? 'visible translate-y-0 opacity-100'
      : 'invisible -translate-y-12 opacity-0'
    )}
    onMouseEnter={() => setIsDropdownVisible(true)}
    onMouseLeave={() => setIsDropdownVisible(false)}>
    <h2 className='hidden'>서브 메뉴</h2>
    <div className={clsx('w-full flex items-center justify-end', maxWidth)}>
     <NavbarMenu type='_sub' items={navigation} />
    </div>
   </div>
  </div>
 );
};

export default memo(NavbarDesktop);