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
   <figure className='grid justify-items-start items-end'>
    <img src={href} alt={title} className='w-full h-120 object-cover rounded-2xl col-start-1 row-start-1 rounded-b-[20px]'/>
    <figcaption className='h-fit w-fit p-4 col-start-1 row-start-1 bg-white text-primary rounded-tr-2xl'>{title}</figcaption>
   </figure>
   {/*{over && (
    <div className='absolute bottom-0 w-[calc(1lh+280px)] right-0 p-2 ml-4 bg-white rounded-tl-2xl rounded-bl-2xl font-bold'>{title}</div>
   )}*/}
  </li>
 );
};

export default ExpandingCardItem;