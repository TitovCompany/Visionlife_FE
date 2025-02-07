import * as React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  active,
  className,
}: ButtonProps) => {
  const classes = clsx(
    `${className} px-4 py-2 rounded transition`,
    active && "text-white bg-blue-100",
    !active && "text-white bg-blue-100",
  )
  return (
    <button
      className={classes}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;