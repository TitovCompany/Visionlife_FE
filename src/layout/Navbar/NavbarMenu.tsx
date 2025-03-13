import React from 'react';
import clsx from 'clsx';
import {NavLink} from 'react-router-dom';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

const NavbarMenu: React.FC<NavbarMenuProps> = (props) => {
 const {
  type = '_nav',
  items,
  openSubmenus = {},
  toggleSubmenu,
  closeMenu,
  onMouseEnter,
  onMouseLeave,
 } = props;
 const componentClasses = clsx(
  type !== '_mobile' && 'max-w-3xl',
  type === '_mobile' && 'px-4 py-2'
 );

 const listClasses = clsx(
  type === '_nav' && 'text-lg font-medium',
  type === '_sub' && 'text-base fonts-normal gap-7',
  type !== '_mobile' && 'flex gap-5 text-center',
  type === '_mobile' && 'space-y-2'
 );

 const itemClasses = clsx(
  type === '_nav' && 'hover:border-b-4 border-primary',
  type === '_sub' && 'space-y-4 py-5'
 );

 const linkClasses = clsx(
  type === '_nav' && 'py-5 hover:fonts-semibold',
  type === '_sub' && 'py-2 hover:border-b-2 hover:border-color',
  `block`
 );

 return (
  <nav
   className={componentClasses}
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}>
   <ul className={listClasses}>
    {items.map((item, index) => (
     <li key={index} className={itemClasses}>
      {type === '_nav' && (
       <NavLink to={item.href} className={linkClasses}>
        {item.label}
       </NavLink>
      )}

      {type === '_sub' &&
       item.sub.map((subItem, subIndex) => (
        <NavLink key={subIndex} to={subItem.href} className={linkClasses}>
         {subItem.label}
        </NavLink>
       ))}

      {type === '_mobile' && (
       <>
        <div className='flex items-center justify-between'>
         <NavLink
          to={item.href}
          className={`${linkClasses} py-2 text-base text-gray-800`}
          onClick={closeMenu}>
          {item.label}
         </NavLink>
         {item.sub && item.sub.length > 0 && (
          <button
           onClick={() => toggleSubmenu?.(index)}
           className='cursor-pointer p-2 focus:outline-none'>
           {openSubmenus[index] ? <FaChevronUp /> : <FaChevronDown />}
          </button>
         )}
        </div>

        {item.sub && item.sub.length > 0 && openSubmenus[index] && (
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
       </>
      )}
     </li>
    ))}
   </ul>
  </nav>
 );
};

export default NavbarMenu;