import React from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  minHeight?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const {
    title,
    children,
    fullHeight = true,
    minHeight = true,
  } = props;
  const classes = clsx(
    fullHeight ? "h-screen" : "h-auto",
    minHeight && "min-h-screen",
    "w-full mt-[calc(4rem+10px)] flex flex-col");

  return (
    <main className={classes}>
      {/* SEO 최적화용 */}
      <h1 className="hidden">{title}</h1>
      {children}
    </main>
  );
};

export default PageLayout;
