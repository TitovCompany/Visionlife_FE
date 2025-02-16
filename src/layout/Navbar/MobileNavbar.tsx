import React from 'react';
import {NavLink} from 'react-router-dom';
import {Index} from './index.tsx';
import Logo from '../../components/Logo.tsx';

interface MobileNavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  navigation: Index[];
  toggleSubmenu: (index: number) => void;
  openSubmenus: {
    [key: number]: boolean;
  };
}

const MobileNavbar: React.FC<MobileNavbarProps> = (props) => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    navigation,
    toggleSubmenu,
    openSubmenus,
  } = props;

  return (
    <div className="md:hidden">
      {/* 로고와 햄버거 버튼 */}
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
        <Logo type="_mobile"/>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <nav className="px-4 py-2">
          <ul className="space-y-2">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-center">
                  <NavLink
                    to={item.href}
                    className="block py-2 text-base text-gray-800 hover:text-primary"
                    onClick={() => {
                      if (!item.sub || item.sub.length === 0) {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </NavLink>
                  {item.sub && item.sub.length > 0 && (
                    <button
                      onClick={() => toggleSubmenu(idx)}
                      className="p-2 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          openSubmenus[idx] ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.sub && item.sub.length > 0 && openSubmenus[idx] && (
                  <ul className="space-y-1">
                    {item.sub.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={subItem.href}
                          className="block py-1 text-gray-600 text-sm hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;