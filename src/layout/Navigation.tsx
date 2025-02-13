import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "./Header.tsx";

const navigation = [
  {
    label: "기업소개",
    href: "/company/profile",
    sub: [
      { label: "회사소개", href: "/company/profile" },
      { label: "연혁", href: "/company/profile/history" },
      { label: "오시는길", href: "/company/profile/contact" },
    ],
  },
  {
    label: "사업개요",
    href: "/business/overview/introduction",
    sub: [
      { label: "사업 소개", href: "/business/overview/introduction" },
      { label: "친환경 무 폐수 날염", href: "/business/utex/introduction" },
    ],
  },
  {
    label: "언론보도",
    href: "/company/news",
    sub: [{ label: "언론보도", href: "/company/news" }],
  },
  {
    label: "카탈로그",
    href: "/company/catalogs",
    sub: [{ label: "자료실", href: "/company/catalogs" }],
  },
];

const Navigation = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Header>
      {/* 데스크탑 내비게이션 */}
      <div
        className="hidden md:block relative"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        {/* 헤더 영역 */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-4 h-18">
            {/* 로고 영역 */}
            <div className="w-32 flex items-center">
              <Link to="/">
                <img
                  src="/img/logo.png"
                  alt="(주)비젼라이프 홈페이지 로고"
                  className="w-full"
                />
              </Link>
            </div>
            {/* 상위 메뉴 영역 */}
            <nav className="flex-1">
              <ul className="grid grid-cols-4 text-center">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.href}
                      className="block py-4 text-sm hover:text-primary"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {/* 오른쪽 공백 */}
            <div className="w-32" />
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

      {/* 모바일 내비게이션 */}
      <div className="md:hidden">
        {/* 로고와 햄버거 버튼 */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="(주)비젼라이프 홈페이지 로고"
                className="max-w-30"
              />
            </Link>
          </h1>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {mobileMenuOpen ? (
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
        {mobileMenuOpen && (
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
                          setMobileMenuOpen(false);
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
                            onClick={() => setMobileMenuOpen(false)}
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
    </Header>
  );
};

export default Navigation;
