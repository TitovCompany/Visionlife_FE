import {useEffect, useState} from 'react';

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤을 아래로 내리면 숨김
      if (currentScrollY > lastScrollY) setIsVisible(false);
      // 스크롤을 위로 올리면 표시
      else setIsVisible(true);

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isVisible;
};

export default useScrollDirection;