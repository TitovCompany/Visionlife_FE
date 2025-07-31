import React, {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

/**
 * useInfiniteCarousel - GSAP을 이용한 무한 루프 캐러셀을 구현하는 커스텀 훅
 *
 * @returns {React.RefObject<HTMLUListElement | null>} sliderRef - 캐러셀 애니메이션이 적용될 `ul` 요소의 Ref
 *
 * @example
 * const sliderRef = useInfiniteCarousel();
 * <ul ref={sliderRef}>...</ul>
 */
const useInfiniteCarousel = (): React.RefObject<HTMLUListElement | null> => {
  const sliderRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    if (!slider) {
      // If the slider is null, we can't apply GSAP animations.
      // This might happen if the component unmounts before the GSAP animation starts
      // or if the ref hasn't been attached yet.
      return;
    }

    // 초기 위치 설정
    gsap.set(slider, {xPercent: 0});

    gsap.to(slider, {
      xPercent: -100, // 왼쪽으로 계속 이동
      duration: 300, // 속도 조절 가능
      ease: 'linear',
      repeat: -1, // 무한 반복
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // 끝까지 가면 다시 시작
      },
    });
  }, []); // Empty dependency array means this runs once after initial render

  return sliderRef;
};

export default useInfiniteCarousel;