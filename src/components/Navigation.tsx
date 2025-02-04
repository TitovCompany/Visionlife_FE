import { useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection.tsx";
import { NavLink, Link } from "react-router-dom";

const navigation = [
    {
        label: "기업 소개",
        link: "/company/profile",
        subMenu: [
            { label: "회사소개", link: "/company/overview" },
            { label: "비전", link: "/company/vision" },
            { label: "연혁 및 조직도", link: "/company/companyVisionSection" },
            { label: "특허&시험성적서", link: "/company/PatentTestReports" },
        ],
    },
    {
        label: "사업 개요",
        link: "/business",
        subMenu: [
            { label: "개요 및 전망", link: "/business/overview" },
            { label: "UTEX", link: "/business/utex" },
            { label: "비교 분석", link: "/business/ComparisonReport" },
        ],
    },
    { label: "언론 보도", link: "/company/news" },
    { label: "카탈로그", link: "/company/catalogs" },
];

const Navigation = () => {
    const isVisible = useScrollDirection();
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="mx-10 py-2 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">
                    <Link to="/">
                        <img
                            src="/img/logo.png"
                            alt="(주)비젼라이프 홈페이지 로고"
                            className="max-w-30"
                        />
                    </Link>
                </h1>

                {/* Navigation Menu */}
                <nav className="flex">
                    <h2 className="hidden">네비게이션 메인 메뉴</h2>
                    <ul className="hidden md:flex space-x-6 gap-10">
                        {navigation.map((item, idx) => (
                            <li
                                key={idx}
                                className="relative mx-0 text-xl hover:text-black cursor-pointer"
                                onMouseEnter={() => setOpenMenu(idx)}
                                onMouseLeave={() => setOpenMenu(null)}
                            >
                                <NavLink to={item.link}>{item.label}</NavLink>

                                {/* Submenu */}
                                {item.subMenu && openMenu === idx && (
                                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                                        {item.subMenu.map((subItem, subIdx) => (
                                            <li key={subIdx} className="px-4 py-2 hover:bg-gray-100">
                                                <NavLink to={subItem.link}>{subItem.label}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger Menu (Mobile) */}
                    <button className="lg:hidden md:hidden text-black focus:outline-none">
                        ☰
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
