import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Header from './Header.tsx';

const navigation = [
  {
    label: "기업소개",
    href: "/company/profile",
    sub: [
      { label: "회사소개", href: "/company/profile" },
      { label: "비전", href: "#" },
      { label: "연혁 및 조직도", href: "#" },
      { label: "오시는길", href: "#" },
    ],
  },
  {
    label: "사업개요",
    href: "/business",
    sub: [
      { label: "친환경 무 폐수 날염", href: "#" },
      { label: "타 제품과의 비교", href: "#" },
    ],
  },
  {
    label: "언론보도",
    href: "/company/news",
    sub: [
      { label: "언론보도", href: "#" },
      { label: "언론보도", href: "#" },
    ],
  },
  {
    label: "카탈로그",
    href: "/company/catalogs",
    sub: [{ label: "자료실", href: "#" }],
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
        className="hidden md:block"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <div className="relative mx-auto max-w-6xl px-4 flex items-center justify-between h-18">
          {/* 로고 영역 */}
          <div className="w-32 flex items-center">
            <h1 className="text-xl font-bold">
              <Link to="/">
                <img
                  src="/img/logo.png"
                  alt="(주)비젼라이프 홈페이지 로고"
                  className="w-full"
                />
              </Link>
            </h1>
          </div>

          {/* 메인 메뉴*/}
          <nav className="flex-1">
            <ul className="grid grid-cols-4 text-center">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.href}
                    className="block py-6 text-sm hover:text-primary"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 오른쪽공백*/}
          <div className="w-32" />
        </div>

        {/* 서브 메뉴: 메인 메뉴와 동일한 grid 구조 및 좌우 오프셋 적용해서 수평이 맞음 */}
        <div
          className={`absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-md pt-4 pb-4 transition-all duration-300 ease-in-out ${
            isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4">
            {/* 메인 메뉴와 동일한 좌우 오프셋 적용 (w-32에 해당) */}
            <div className="ml-32 mr-32">
              <ul className="grid grid-cols-4 text-center">
                {navigation.map((item, idx) => (
                  <li key={idx}>
                    <ul className="space-y-2">
                      {item.sub.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <NavLink
                            to={subItem.href}
                            className="block py-2 text-gray-600 hover:text-primary text-sm"
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
          </div>
        </div>
      </div>

      {/* 모바일 내비게이션 */}
      <div className="md:hidden">
        {/*로고와 햄버거 버튼*/}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 모바일 메뉴*/}
        {mobileMenuOpen && (
          <nav className="px-4 py-2 ">
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
