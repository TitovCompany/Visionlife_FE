import React from 'react';
import clsx from 'clsx';
import {NavigationT} from './index.tsx';
import {NavLink} from 'react-router-dom';

interface NavbarMenuProps {
  as?: "nav" | "div";
  type?: "_nav" | "_sub";
  items: NavigationT[];
  listClass?: string;
  itemClass?: string;
  linkClass?: string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = (props) => {
  const {
    as: Component = "nav",
    type = "_nav",
    items,
    listClass,
    itemClass,
    linkClass,
  } = props;
  const listClasses = clsx(
    type === "_nav" && "text-lg font-medium",
    type === "_sub" && "text-base font-normal",
    `grid grid-cols-4 text-center ${listClass}`);

  const itemClasses = clsx(
    type === "_nav" && "hover:border-b-4 border-primary",
    type === "_sub" && "space-y-4 py-5",
    itemClass);

  const linkClasses = clsx(
    type === "_nav" && "py-5 hover:font-semibold",
    type === "_sub" && "py-2 hover:text-primary",
    `block ${linkClass}`)

  return (
    <Component className="w-full max-w-3xl ml-auto">
      <ul className={listClasses}>
        {items.map((item, index) => (
          <li key={index} className={itemClasses}>
            {type === "_nav" && (
              <NavLink to={item.href} className={linkClasses}>
                {item.label}
              </NavLink>
            )}

            {type === "_sub" && item.sub.map((
              subItem, subIndex
            ) => (
              <NavLink
                key={subIndex}
                to={subItem.href}
                className={linkClasses}>
                {subItem.label}
              </NavLink>
            ))}
          </li>
        ))}
      </ul>
    </Component>
  );
};

export default NavbarMenu;