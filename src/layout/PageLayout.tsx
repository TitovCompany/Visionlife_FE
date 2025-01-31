import React from "react";

const PageLayout = ({
  title,
  className,
  children
}: {
  title: string;
  className?: string
  children: React.ReactNode;
}) => {
  return (
      <main className={`w-full ${className}`}>
        {/* SEO 최적화용 */}
        <h1 className="hidden">{title}</h1>
        {children}
      </main>
  );
};

export default PageLayout;
