import React from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  isFullHeight?: boolean;
  isMinHeight?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const {
    title,
    children,
    isFullHeight = false,
    isMinHeight = false,
  } = props;
  const classes = clsx(
    isFullHeight ? "h-screen" : "h-auto",
    isMinHeight ? "min-h-screen" : "min-h-[calc(100vh-4rem+10px-17.875rem)]",
    "w-full pt-[calc(4rem+10px)] flex flex-col");

  return (
    <main className={classes}>
      {/* SEO 최적화용 */}
      <h1 className="hidden">{title}</h1>
      {children}
    </main>
  );
};

export default PageLayout;
