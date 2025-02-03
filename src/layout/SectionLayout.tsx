import * as React from "react";

const SectionLayout = ({
  children,
  title,
  className,
  titleClassName = "text-6xl",
  titlePadding = "p-18",
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  titlePadding?: string;
}) => {
  return (
      <section className={`w-full h-screen ${className}`}>
        <h2 className={`w-full ${titlePadding} text-center font-extrabold ${titleClassName}`}>{title}</h2>
        {children}
      </section>
  );
};

export default SectionLayout;