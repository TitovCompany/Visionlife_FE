import {RefObject} from 'react';
import clsx from 'clsx';

interface ProgressBarProps {
 ref: RefObject<HTMLDivElement | null>;
 className?: string;
}

const ProgressBar = ({
 ref,
 className
} : ProgressBarProps) => {
 return (
  <div className={clsx('w-full bg-gray-200', className)}>
   <div ref={ref} className='bg-primary h-3'></div>
  </div>
 );
};

export default ProgressBar;