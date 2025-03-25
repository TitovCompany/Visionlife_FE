import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
 duration: 1.2,
 easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
 lerp: 0.1,
 wheelMultiplier: 1,
 touchMultiplier: 2,
 gestureOrientation: 'vertical',
});

export default lenis;