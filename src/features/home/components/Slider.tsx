import {ReactNode} from 'react';
import clsx from 'clsx';

interface SliderProps {
 children?: ReactNode;
 className?: string;
}

const Slider = ({children, className}: SliderProps) => {
 return (
  <div className={clsx('flex h-[768px] w-full whitespace-nowrap', className)}>
   {children}
  </div>
 );
};

export default Slider;
