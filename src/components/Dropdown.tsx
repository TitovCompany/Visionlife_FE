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

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items
}) => {
  const { isOpen, toggle, close } = useToggle();

  return (
    <div className="relative block md:hidden">
      <button
        onClick={toggle}
        className="w-full px-4 py-4 bg-gray-200 rounded-md flex items-center justify-center gap-3">
        <span className="text-base font-semibold">{title}</span>
        <span className="text-base font-semibold text-gray-400">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 w-full bg-white shadow-md rounded-md mt-2">
          {items.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.href}
                className="block px-4 py-3 text-center hover:bg-gray-100"
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