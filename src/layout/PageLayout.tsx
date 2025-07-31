import React, {RefObject} from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
 title: string;
 children: React.ReactNode;
 className?: string;
 ref?: RefObject<HTMLDivElement | null>;
}

const PageLayout: React.FC<PageLayoutProps> = ({
 title,
 children,
 className,
 ref,
}) => {
 return (
  <main ref={ref} id='main' className={clsx(
    'w-full min-h-screen',
    'bg-white',           
    'lg:pt-[calc(102px)]', // lg 이상에서만 패딩
    className
  )}>
   {/* SEO 최적화용 */}
   <h1 className='hidden'>{title}</h1>
   {children}
  </main>
 );
};

export default PageLayout;