import {Link} from 'react-router-dom';
import React from 'react';

interface TabNavLinkItemProps {
  title: string;
  href: string;
  className?: string;
  itemClass?: string;
}

const TabNavLinkItem: React.FC<TabNavLinkItemProps> = (props) => {
  const {
    title,
    href,
    itemClass,
    ...attributes
  } = props;

  return (
    <li {...attributes}>
      <Link
        to={href}
        className={itemClass}>
        {title}
      </Link>
    </li>
  );
};

export default TabNavLinkItem;