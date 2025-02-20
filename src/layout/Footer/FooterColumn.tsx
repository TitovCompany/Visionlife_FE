import React, {memo, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import clsx from 'clsx';

interface FooterColumnProps {
  title: string;
  subLinks: SubLinks[];
}

interface SubLinks {
  name: string;
  path: string;
}

const FooterColumn: React.FC<FooterColumnProps> = memo((props) => {
  const {title, subLinks} = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const sortedLinks = useMemo(() => {
    return [...subLinks].sort((a, b) => a.name.localeCompare(b.name));
  }, [subLinks]);

  const titleClasses = clsx(`
  w-full py-5 flex justify-between  items-center gap-2 text-lg font-semibold cursor-pointer 
  lg:mb-4 lg:py-0 lg:cursor-default lg:justify-around`);

  const listClasses = clsx(`
   lg:max-h-full lg:opacity-100 lg:text-center
   text-left overflow-hidden transition-all duration-300 
  ${isOpen ? 'pb-6 max-h-40 opacity-100' : 'pb-0 max-h-0 opacity-0'}`);

  return (
    <div className="mx-auto flex w-full max-w-xl lg:max-w-xs flex-col border-b border-b-gray-300 lg:border-b-0 lg:items-center">
      <strong className={titleClasses} onClick={handleClick}>
        {title}
        <span className="text-gray-400 lg:hidden">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </strong>
      {/*<ul className="space-y-2 text-center">*/}
      <ul className={listClasses}>
        {sortedLinks.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary pb-5 transition lg:pb-0">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

FooterColumn.displayName = 'FooterColumn';
export default FooterColumn;
