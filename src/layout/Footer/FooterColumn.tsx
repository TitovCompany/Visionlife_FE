import React, {memo, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import clsx from 'clsx';
import useToggle from '../../hooks/useToggle.ts';

interface FooterColumnProps {
  title: string;
  subLinks: SubLinks[];
}

interface SubLinks {
  name: string;
  path: string;
}

const FooterColumn: React.FC<FooterColumnProps> = memo(({title, subLinks}) => {
  const {isOpen, toggle} = useToggle();

  const sortedLinks = useMemo(() => {
    return [...subLinks].sort((a, b) => a.name.localeCompare(b.name));
  }, [subLinks]);

  const titleClasses = clsx(`
  w-full py-5 flex justify-between items-center gap-2 text-lg font-semibold cursor-pointer 
  lg:mb-4 lg:py-0 lg:cursor-default lg:justify-around`);

  const listClasses = clsx(`
   lg:max-h-full lg:opacity-100 lg:text-center
   text-left overflow-hidden transition-all duration-300 
  ${isOpen ? 'pb-6 max-h-40 opacity-100' : 'pb-0 max-h-0 opacity-0'}`);

  return (
    <div className='mx-auto flex w-full max-w-xs flex-col border-b border-b-gray-300 sm:max-w-sm md:max-w-xl lg:items-center lg:border-b-0'>
      <strong className={titleClasses} onClick={toggle}>
        {title}
        <span className='text-gray-400 lg:hidden'>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </strong>
      <ul className={listClasses}>
        {sortedLinks.map((item, index) => (
          <li key={index} className='hover:text-primary pb-5 transition'>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

FooterColumn.displayName = 'FooterColumn';
export default FooterColumn;
