import {forwardRef} from 'react';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  titlePadding?: string;
}

// forwardRef를 올바르게 적용
const SectionAniLayout = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      title,
      className = '',
      titleClassName = 'text-6xl',
      titlePadding = 'p-18',
    },
    ref
  ) => {
    return (
      <section ref={ref} className={`w-full h-screen ${className}`}>
        <h2
          className={`w-full ${titlePadding} text-center font-extrabold ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </section>
    );
  }
);

export default SectionAniLayout;
