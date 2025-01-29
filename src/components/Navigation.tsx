import useScrollDirection from "../hooks/useScrollDirection.tsx";
import {NavLink} from "react-router-dom";

const navigation = [
  { label: '기업 소개', link: '/company/profile' },
  { label: '사업 개요', link: '/business/overview' },
  { label: '자료실', link: '/' },
];

const Navigation = () => {
  const isVisible = useScrollDirection();

  return (
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">Logo</h1>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-6">
            {navigation.map((item, idx) => (
                <li key={idx} className="hover:text-gray-300 cursor-pointer">
                  <NavLink to={item.link}>{item.label}</NavLink>
                </li>
            ))}
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <button className="lg:hidden md:hidden text-black focus:outline-none">
            ☰
          </button>
        </div>
      </nav>
  );
};

export default Navigation;
