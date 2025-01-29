import * as React from "react";

const SectionLayout = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode,
  title: string
  className?: string
}) => {
  return (
      <section className={`w-full h-screen ${className}`}>
        <h2 className="w-full p-18 text-center text-6xl font-extrabold">{title}</h2>
        {children}
      </section>
  );
};

export default SectionLayout;