import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import clsx from 'clsx';

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = (props) => {
 const {navigation, openSubmenus, toggleSubmenu, closeMenu} = props;
 const linkClasses = clsx('block hover:text-primary');

 return (
  <nav className='px-4 py-2 bg-primary text-color border-b-0 border-gray-50'>
   <ul className='space-y-2'>
    {navigation.map((item, index) => {
     const hasSubMenu = item.sub.length > 0;

     return (
      <li key={index}>
       <div className='flex items-center justify-between'>
        <NavLink
         to={item.href}
         className={`${linkClasses} py-2 text-base `}
         onClick={closeMenu}>
         {item.label}
        </NavLink>
        {hasSubMenu && (
         <button
          onClick={() => toggleSubmenu(index)}
          className='cursor-pointer p-2 focus:outline-none'>
          {openSubmenus[index] ? <FaChevronUp /> : <FaChevronDown />}
         </button>
        )}
       </div>

       {hasSubMenu && openSubmenus[index] && (
        <ul className='space-y-1'>
         {item.sub.map((subItem, subIdx) => (
          <li key={subIdx}>
           <NavLink
            to={subItem.href}
            className={`${linkClasses} py-1 text-sm text-gray-600`}
            onClick={closeMenu}>
            {subItem.label}
           </NavLink>
          </li>
         ))}
        </ul>
       )}
      </li>
     );
    })}
   </ul>
  </nav>
 );
};

export default NavbarMobileMenu;