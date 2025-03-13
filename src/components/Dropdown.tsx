import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import useToggle from '../hooks/useToggle.ts';

interface Dropdown {
  title: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: Dropdown[];
}

const Dropdown: React.FC<DropdownProps> = ({title, items}) => {
  const {isOpen, toggle, close} = useToggle();

  return (
    <div className='relative block md:hidden'>
      <button
        onClick={toggle}
        className='flex w-full items-center justify-center gap-3 rounded-md bg-gray-200 px-4 py-4'>
        <span className='text-base font-semibold'>{title}</span>
        <span className='text-base font-semibold text-gray-400'>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <ul className='absolute left-0 mt-2 w-full rounded-md bg-white shadow-md'>
          {items.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.href}
                className='block px-4 py-3 text-center hover:bg-gray-100'
                onClick={close}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
