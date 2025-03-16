import {ReactNode} from 'react';
import clsx from 'clsx';

interface SliderItemProps {
 children: ReactNode;
 className?: string;
 setRef?: (el: HTMLDivElement | null) => void;
}

const SliderItem = ({ children, setRef, className }: SliderItemProps) => {
 return (
  <div ref={setRef} className={clsx('flex w-full flex-shrink-0 flex-col items-center justify-center pt-20 pb-40', className)}>
   {children}
  </div>
 );
};

export default SliderItem;