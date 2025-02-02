import * as React from "react";

const SectionLayout = ({
  children,
  title,
  className,
  titleClassName,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
}) => {
  const textSize = titleClassName ? `${titleClassName}` : 'text-6xl';
  return (
      <section className={`w-full h-screen ${className}`}>
        <h2 className={`w-full p-18 text-center font-extrabold ${textSize}`}>{title}</h2>
        {children}
      </section>
  );
};

export default SectionLayout;