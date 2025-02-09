import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  label?: string;
  type?: 'primary' | 'secondary';
  target?: '_self' | '_blank';
  size?: 'md' | 'lg';
}

const ButtonLink = ({
  children,
  href,
  className,
  label,
  type = 'primary',
  target = '_self',
  size = 'md',
}: ButtonLinkProps) => {
  const classes = clsx(
    `${className} px-4 py-2 rounded transition`,
    type === 'primary' && 'bg-blue-500 text-white',
    type === 'secondary' && 'opacity-50 cursor-not-allowed',
    size === 'md' && 'text-base',
    size === 'lg' && 'text-lg'
  );

  return (
    <Link to={href} className={classes} aria-label={label} target={target}>
      {children}
    </Link>
  );
};

export default ButtonLink;
