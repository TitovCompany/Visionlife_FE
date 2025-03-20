import React from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
 title: string;
 children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
 title,
 children,
}) => {
 return (
  <main className={clsx(
    'w-full pt-[calc(68px)] min-h-screen',
    'bg-white')}>
   {/* SEO 최적화용 */}
   <h1 className='hidden'>{title}</h1>
   {children}
  </main>
 );
};

export default PageLayout;