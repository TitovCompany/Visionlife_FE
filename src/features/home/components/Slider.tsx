import {ReactNode} from 'react';
import clsx from 'clsx';

interface SliderProps {
 children?: ReactNode;
 className?: string;
}

const Slider = ({children, className}: SliderProps) => {
 return (
  <div className={clsx('h-[700px] pt-[68px] flex min-w-full whitespace-nowrap', className)}>
   {children}
  </div>
 );
};

export default Slider;
