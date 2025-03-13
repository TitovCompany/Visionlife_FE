interface NavigationProps {
  label: string;
  href: string;
  sub: {
    label: string;
    href: string;
  }[];
}

interface DesktopNavbarProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: (isOpen: boolean) => void;
  navigation: NavigationProps[];
}

interface NavbarMenuProps {
  type?: '_nav' | '_sub' | '_mobile';
  items: NavigationProps[];
  closeMenu?: () => void;
  toggleSubmenu?: (index: number) => void;
  openSubmenus?: Record<number, boolean>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface NavbarMobileMenuProps {
  navigation: NavigationProps[];
  openSubmenus: {[key: number]: boolean};
  toggleSubmenu: (index: number) => void;
  closeMenu: () => void;
}

interface MobileNavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  navigation: NavigationProps[];
  toggleSubmenu: (index: number) => void;
  openSubmenus: {
    [key: number]: boolean;
  };
}