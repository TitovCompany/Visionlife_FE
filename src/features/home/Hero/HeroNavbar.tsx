import clsx from 'clsx';

interface HeroNavbarProps {
 currentIndex: number;
 setCurrentIndex: (index: number) => void;
}

const HeroNavbar = ({currentIndex, setCurrentIndex}: HeroNavbarProps) => {
 // 버튼 클릭시 슬라이드 변경
 const handleButtonClick = (index: number) => {
  setCurrentIndex(index);
 };

 return (
  <nav className='text-color w-full pt-5'>
   <ul className='mx-auto flex w-full max-w-xl justify-between'>
    {['PROUTEX', 'Title 01', 'Title 02', 'Title 03'].map((item, index) => (
     <li key={index} className={clsx('cursor-pointer px-4 py-2', currentIndex === index ? 'bg-white font-bold text-black' : '')}
      onClick={() => handleButtonClick(index)}>
      {item}
     </li>
    ))}
   </ul>
  </nav>
 );
};

export default HeroNavbar;
