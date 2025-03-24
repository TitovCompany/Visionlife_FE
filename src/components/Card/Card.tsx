import {JSX, ReactNode} from 'react';
import clsx from 'clsx';

interface CardProps<T extends keyof JSX.IntrinsicElements = 'div'> {
 children: ReactNode;
 className?: string;
 as?: T;
 role?: string;
 'aria-label'?: string;
 'aria-labelledby'?: string;
}

const Card = ({
 children,
 className,
 as: Component = 'div',
 role = 'region',
 ...rest
}: CardProps) => {
 return (
  <Component
   className={clsx(
    'rounded-2xl border border-gray-200 bg-white shadow-md',
    className
   )}
   role={role}
   {...rest}>
   {children}
  </Component>
 );
};

export default Card;