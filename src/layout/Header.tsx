import {ReactNode} from 'react';
import useScrollDirection from '../hooks/useScrollDirection.tsx';
const Header = ({
  children
}: {children: ReactNode}) => {
  const isVisible = useScrollDirection();
  return (
    <header
      id="header"
      className={`fixed top-0 left-0 z-50 w-full bg-white border-primary transition-transform duration-300 ${
        isVisible 
          ? "translate-y-0"
          : "-translate-y-full"
      }`}>
      {children}
    </header>
  );
};

export default Header;