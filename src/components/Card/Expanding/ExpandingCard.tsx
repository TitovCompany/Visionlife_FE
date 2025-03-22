import clsx from 'clsx';
import {ReactNode} from 'react';

interface ExpandingCardProps {
 children: ReactNode;
}

const ExpandingCard = ({children}: ExpandingCardProps) => {
 return (
  <div className='mt-12 text-lg text-primary'>
   <p className={clsx('font-bold')}>적용 가능 소재</p>
   <ul className={clsx(
    'w-full mt-4 list-disc text-gray-700',
    'flex flex-nowrap',
    //'-translate-y-32'
   )}>
    {children}
   </ul>
  </div>
 );
};

export default ExpandingCard;