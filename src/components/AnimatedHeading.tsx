import React from 'react';
import clsx from 'clsx';

interface HoverUnderlineTitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  title: string;
  className?: string;
  underlineColor?: string;
  hoverEffect?: boolean;
  ariaLevel?: number;
  role?: 'heading' | 'presentation' | 'none';
}

const AnimatedHeading: React.FC<HoverUnderlineTitleProps> = (props) => {
  const {
    as: Tag = 'h3',
    title,
    className = '',
    underlineColor = 'bg-primary',
    hoverEffect = true,
    ariaLevel,
    role = 'heading',
  } = props;

  const classes = clsx(
    'relative inline-block font-semibold text-gray-800',
    className
  );

  const borderClasses = clsx(
    'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500',
    hoverEffect && 'group-hover:w-full',
    underlineColor
  );

  return (
    <Tag
      className={classes}
      role={role}
      {...(ariaLevel ? {'aria-level': ariaLevel} : {})}>
      {title}
      <span className={borderClasses}></span>
    </Tag>
  );
};

export default AnimatedHeading;
