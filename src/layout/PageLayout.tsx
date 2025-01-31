import React from "react";

const PageLayout = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
      <main className={`w-full min-h-screen flex flex-col`}>
        {/* SEO 최적화용 */}
        <h1 className="hidden">{title}</h1>
        {children}
      </main>
  );
};

export default PageLayout;
