import clsx from 'clsx';
import {ReactNode} from 'react';

interface ExpandingCardProps {
 material: string;
 children: ReactNode;
}

const ExpandingCard = ({material, children}: ExpandingCardProps) => {
 return (
  <>
   <p className={clsx('-translate-y-32 text-lg text-primary pl-3 font-bold')}>{material}</p>
   <ul className={clsx(
    'mt-4 list-disc text-lg text-gray-700',
    'flex flex-nowrap',
    '-translate-y-32'
   )}>
    {children}
   </ul>
  </>
 );
};

export default ExpandingCard;