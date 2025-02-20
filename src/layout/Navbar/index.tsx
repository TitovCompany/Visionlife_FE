import {useState} from 'react';
import Header from '../Header.tsx';
import NavbarMobile from './NavbarMobile.tsx';
import NavbarDesktop from './NavbarDesktop.tsx';

export interface NavigationT {
  label: string;
  href: string;
  sub: {
    label: string;
    href: string;
  }[];
}

const navigation = [
  {
    label: '기업소개',
    href: '/company/profile',
    sub: [
      {label: '회사소개', href: '/company/profile'},
      {label: '연혁', href: '/company/profile/history'},
      {label: '오시는길', href: '/company/profile/contact'},
    ],
  },
  {
    label: '사업개요',
    href: '/business/overview/introduction',
    sub: [
      {label: '사업 소개', href: '/business/overview/introduction'},
      {label: '친환경 무 폐수 날염', href: '/business/utex/introduction'},
    ],
  },
  {
    label: '언론보도',
    href: '/company/news',
    sub: [{label: '언론보도', href: '/company/news'}],
  },
  {
    label: '자료실',
    href: '/company/catalogs',
    sub: [{label: '자료실', href: '/company/catalogs'}],
  },
];

const Navigation = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{[key: number]: boolean}>(
    {}
  );

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({...prev, [index]: !prev[index]}));
  };

  return (
    <Header>
      <NavbarDesktop
        isDropdownVisible={isDropdownVisible}
        setIsDropdownVisible={setIsDropdownVisible}
        navigation={navigation}
      />
      <NavbarMobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navigation={navigation}
        toggleSubmenu={toggleSubmenu}
        openSubmenus={openSubmenus}
      />
    </Header>
  );
};

export default Navigation;
