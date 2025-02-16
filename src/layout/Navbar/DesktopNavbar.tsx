import React from 'react';
import Logo from '../../components/Logo.tsx';
import {NavLink} from 'react-router-dom';
import {Index} from './index.tsx';

interface DesktopNavbarProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: (isOpen: boolean) => void;
  navigation: Index[];
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = (props) => {
  const {
    isDropdownVisible,
    setIsDropdownVisible,
    navigation,
  } = props;
  return (
    <div
      className="hidden md:block relative"
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}>
      {/* 헤더 영역 */}
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-4 h-18">
          {/* 로고 영역 */}
          <Logo type="_desktop"/>
          {/* 상위 메뉴 영역 */}
          <nav className="w-full max-w-3xl">
            <ul className="grid grid-cols-4 text-center">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.href}
                    className="block py-4 font-medium text-lg hover:text-primary">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* 하위 메뉴 백그라운드 영역 */}
      <div
        className={`absolute inset-x-0 top-full bg-white border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out mt- ${
          isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex">
            {/* 상위 메뉴와 동일한 좌우 여백 */}
            <div className="w-32" />
            <div className="flex-1">
              <ul className="grid grid-cols-4 text-center">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <ul className="space-y-4 py-5">
                      {item.sub.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <NavLink
                            to={subItem.href}
                            className="block py-1 text-gray-600 hover:text-primary text-sm"
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;