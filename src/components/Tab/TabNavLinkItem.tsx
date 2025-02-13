import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';

interface TabNavLinkItemProps {
  as?: typeof Link | typeof NavLink;
  title: string;
  href: string;
  className?: string;
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

  const classes =
    Component === NavLink
      ? ({ isActive }: { isActive: boolean }) =>
        clsx(itemClass, isActive && activeClass)
      : clsx(itemClass);

  return (
    <li {...attributes}>
      <Component
        to={href}
        className={classes}>
        {title}
      </Component>
    </li>
  );
};

export default TabNavLinkItem;