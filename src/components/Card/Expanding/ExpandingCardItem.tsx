import {useState} from 'react';
import clsx from 'clsx';

interface ExpandingCardItemProps {
 title: string;
 href: string;
}

const ExpandingCardItem = ({title, href}: ExpandingCardItemProps) => {
 const [over, setOver] = useState(false);
 return (
  <li className={clsx('relative px-2 rounded-2xl w-120 cursor-pointer hover',
   over && 'w-[3000px] transform duration-1000')} onMouseEnter={() => setOver(true)} onMouseLeave={() => (setOver(false))}>
   <h3 className='hidden'>{title}</h3>
   <img src={href} alt={title} className='w-full h-120 object-cover rounded-2xl' />
   {/*{over && (
    <div className='absolute bottom-0 right-0 p-2 ml-4 bg-white rounded-tl-2xl rounded-bl-2xl font-bold'>{title}</div>
   )}*/}
  </li>
 );
};

export default ExpandingCardItem;