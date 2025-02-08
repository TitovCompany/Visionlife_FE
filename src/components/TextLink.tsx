import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

interface TextLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  target?: '_self' | '_blank';
  label?: string;
}

const TextLink = ({
  children,
  href,
  className,
  label,
  size = 'md',
  target = '_self',
}: TextLinkProps) => {
  const classes = clsx(
    `${className}`,
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-md',
    size === 'lg' && 'text-lg'
  );

  return (
    <Link to={href} className={classes} aria-label={label} target={target}>
      {children}
    </Link>
  );
};

export default TextLink;
