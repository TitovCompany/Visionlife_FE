import {useEffect, useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    ScrollTrigger.create({
      start: 'top+=10 top', // 스크롤이 시작되는 위치
      onUpdate: (self) => {
        const currentScrollY = self.scroll();

        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // 스크롤을 아래로 내리면 숨김
        } else {
          setIsVisible(true); // 스크롤을 위로 올리면 보이게 함
        }

        lastScrollY = currentScrollY;
      },
    });

    // 컴포넌트 언마운트 시 정리
    return () => ScrollTrigger.killAll();
  }, []);

  return isVisible;
};

export default useScrollDirection;
