import {NavLink, Link} from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection.tsx';

const navigation = [
  {label: '기업 소개', link: '/company/profile'},
  {label: '사업 개요', link: '/business'},
  {label: '언론 보도', link: '/company/news'},
  {label: '카탈로그', link: '/company/catalogs'},
];

const Navigation = () => {
  // 네비게이션 숨김 처리
  const isVisible = useScrollDirection();
  const visible = isVisible ? 'translate-y-0' : '-translate-y-full';

  return (
    <header
      className={`w-full fixed top-0 left-0 bg-white border-b border-b-primary z-50 transition-transform duration-300 ${visible}`}>
      <div className="w-full max-w-[1440px] md:max-w-[768px] mx-20 lg:mx-auto py-2 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to={'/'}>
            <img
              src="/img/logo.png"
              alt="(주)비젼라이프 홈페이지 로고"
              className="max-w-30"
            />
          </Link>
        </h1>
        <nav className="flex">
          <h2 className="hidden">네비게이션 메인 메뉴</h2>
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Navigation Menu */}
            <ul className="sm:hidden md:flex space-x-6 gap-10">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="mx-0 text-base hover:text-black cursor-pointer">
                  <NavLink
                    to={item.link}
                    className={({isActive}) =>
                      isActive ? 'text-blue-600 border-b' : ''
                    }>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Hamburger Menu (Mobile) */}
            <button className="lg:hidden md:hidden text-black focus:outline-none">
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
