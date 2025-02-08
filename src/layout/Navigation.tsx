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
      className={`border-b-primary fixed top-0 left-0 z-50 w-full border-b bg-white transition-transform duration-300 ${visible}`}>
      <div className="mx-20 flex w-full max-w-[1440px] items-center justify-between py-2 md:max-w-[768px] lg:mx-auto">
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
          <div className="container mx-auto flex items-center justify-between p-4">
            {/* Navigation Menu */}
            <ul className="gap-10 space-x-6 sm:hidden md:flex">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="mx-0 cursor-pointer text-base hover:text-black">
                  <NavLink
                    to={item.link}
                    className={({isActive}) =>
                      isActive ? 'border-b text-blue-600' : ''
                    }>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Hamburger Menu (Mobile) */}
            <button className="text-black focus:outline-none md:hidden lg:hidden">
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
