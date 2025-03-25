import {Link} from 'react-router-dom';
import clsx from 'clsx';

interface LinkListProps {
 href: string;
 imgSrc: string;
 text: string;
 className?: string;
}

const LinkList = ({href, imgSrc, text, className}: LinkListProps) => {
 return (
  <li className={clsx('group relative h-96 w-full p-8 overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105', className)}>
   <Link to={href}>
    <img src={imgSrc} alt={text} className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"/>
    <p className='absolute top-3/4 left-1/2 -translate-1/2 text-2xl font-bold text-white'>
     {text}
    </p>
   </Link>
  </li>
 );
};

export default LinkList;