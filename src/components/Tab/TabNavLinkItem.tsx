import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';

interface TabNavLinkItemProps {
  as?: typeof Link | typeof NavLink;
  title: string;
  href: string;
  itemClass?: string;
  activeClass?: string;
}

const TabNavLinkItem: React.FC<TabNavLinkItemProps> = (props) => {
  const {
    as: Component = Link,
    title,
    href,
    itemClass,
    activeClass = "text-primary font-bold",
    ...attributes
  } = props;

  return (
    <li {...attributes}>
      {Component === NavLink ? (
        <NavLink
          to={href}
          className={({ isActive }) => clsx(itemClass, isActive && activeClass)}>
          {title}
        </NavLink>
      ) : (
        <Link
          to={href}
          className={clsx(itemClass)}>
          {title}
        </Link>
      )}
    </li>
  );
};

export default TabNavLinkItem;