import clsx from 'clsx';
import {memo} from 'react';

interface HeroNavbarProps {
 currentIndex: number;
 setCurrentIndex: (index: number) => void;
}

const HeroNavbar = memo(({
 currentIndex,
 setCurrentIndex
}: HeroNavbarProps) => {
 // 버튼 클릭시 슬라이드 변경
 const handleButtonClick = (index: number) => {
  setCurrentIndex(index);
 };

 return (
  <nav className='text-color w-full'>
   <ul className='mx-auto flex w-full max-w-xl justify-between text-xl'>
    {['PROUTEX', 'Sustainability', 'Growth'].map((item, index) => (
     <li key={index} className={clsx('cursor-pointer px-4 py-2', currentIndex === index && 'font-bold -translate-y-5',
      'hover:-translate-y-5 hover:transition hover:duration-300')}
         onClick={() => handleButtonClick(index)}>
      {item}
     </li>
    ))}
   </ul>
  </nav>
 );
});

HeroNavbar.displayName = 'HeroNavbar';
export default HeroNavbar;