import React from 'react';

const PageLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <main className={`mt-[calc(4rem+10px)] flex min-h-screen w-full flex-col`}>
      {/* SEO 최적화용 */}
      <h1 className="hidden">{title}</h1>
      {children}
    </main>
  );
};

export default PageLayout;
