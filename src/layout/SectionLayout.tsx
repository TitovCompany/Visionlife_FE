import * as React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  titleClassName?: string;
  titlePadding?: string;
  fullHeight?: boolean;
}

const SectionLayout = ({
  children,
  title = '',
  className,
  titleClassName = 'text-6xl',
  titlePadding = 'p-18',
  fullHeight = false, // true면 h-screen 적용, false면 auto
}: SectionLayoutProps) => {
  const height = fullHeight ? 'h-screen' : 'h-auto';

  return (
    <section className={`w-full ${height} ${className}`}>
      {title !== '' && title !== undefined && (
        <h2
          className={`w-full ${titlePadding} text-center font-extrabold ${titleClassName}`}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionLayout;
