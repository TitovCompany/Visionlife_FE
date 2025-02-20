import React from 'react';
import clsx from 'clsx';
import {NavigationT} from './index.tsx';
import {NavLink} from 'react-router-dom';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

interface NavbarMenuProps {
  as?: 'nav' | 'div';
  type?: '_nav' | '_sub' | '_mobile';
  items: NavigationT[];
  listClass?: string;
  itemClass?: string;
  linkClass?: string;
  closeMenu?: () => void;
  toggleSubmenu?: (index: number) => void;
  openSubmenus?: {[key: number]: boolean};
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavbarMenu: React.FC<NavbarMenuProps> = (props) => {
  const {
    as: Component = 'nav',
    type = '_nav',
    items,
    listClass,
    itemClass,
    linkClass,
    openSubmenus = {},
    toggleSubmenu,
    closeMenu,
    onMouseEnter,
    onMouseLeave,
  } = props;
  const componentClasses = clsx(
    type !== '_mobile' && 'w-full max-w-3xl ml-auto',
    type === '_mobile' && 'px-4 py-2'
  );

  const listClasses = clsx(
    type === '_nav' && 'text-lg font-medium',
    type === '_sub' && 'text-base font-normal',
    type !== '_mobile' && 'grid grid-cols-4 text-center',
    type === '_mobile' && 'space-y-2',
    listClass
  );

  const itemClasses = clsx(
    type === '_nav' && 'hover:border-b-4 border-primary',
    type === '_sub' && 'space-y-4 py-5',
    itemClass
  );

  const linkClasses = clsx(
    type === '_nav' && 'py-5 hover:font-semibold',
    type === '_sub' && 'py-2 hover:text-primary',
    `block ${linkClass}`
  );

  return (
    <Component
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
                <NavLink
                  key={subIndex}
                  to={subItem.href}
                  className={linkClasses}>
                  {subItem.label}
                </NavLink>
              ))}

            {type === '_mobile' && (
              <>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={item.href}
                    className={`${linkClasses} py-2 text-base text-gray-800`}
                    onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                  {item.sub && item.sub.length > 0 && (
                    <button
                      onClick={() => toggleSubmenu?.(index)}
                      className="cursor-pointer p-2 focus:outline-none">
                      {openSubmenus[index] ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  )}
                </div>

                {item.sub && item.sub.length > 0 && openSubmenus[index] && (
                  <ul className="space-y-1">
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
    </Component>
  );
};

export default NavbarMenu;
