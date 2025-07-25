import React, {memo} from 'react';
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

 const linkClasses = clsx(
  type === '_nav' && 'py-5',
  type === '_sub' && 'py-2 border-b-2 border-transparent hover:border-color/70',
  `block`
 );

 return (
  <nav
   className={clsx(
    type !== '_mobile' && 'w-full max-w-2xl',
    type === '_mobile' && 'px-4 py-2'
   )}
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}>
   <ul className={clsx(
    'test',
    type === '_nav' && 'flex-1 text-xl font-normal',
    type === '_sub' && 'flex-1 text-lg font-normal',
    type !== '_mobile' && 'flex justify-between text-center font-normal',
    type === '_mobile' && 'space-y-2'
   )}>
    {items.map((item, index) => (
     <li key={index} className={clsx(
      type === '_nav' && 'hover:border-b-2 w-32',
      type === '_sub' && 'space-y-4 py-5 w-32'
     )}>
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

export default memo(NavbarMenu);