import {ReactNode} from 'react';
import clsx from 'clsx';

interface ColorListProps {
 color: 'primary' | 'accent';
 title: string;
 children?: ReactNode;
}

const ColorList = ({
 color,
 title,
 children,
} : ColorListProps) => {
 return (
  <li className='flex justify-center items-center gap-6'>
   <div className={clsx('h-48 w-48',
    color === 'primary' && 'bg-primary',
    color === 'accent' && 'bg-secondary')}></div>
   <div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-lg leading-relaxed mt-2">
     {children}
    </p>
   </div>
  </li>
 );
};

export default ColorList;