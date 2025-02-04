import * as React from "react";

const SectionLayout = ({
  children,
  title,
  className,
  titleClassName = "text-6xl",
  titlePadding = "p-18",
  fullHeight = false,           // true면 h-screen 적용, false면 auto
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  titlePadding?: string;
  fullHeight?: boolean;
}) => {
  const height = fullHeight ? "h-screen" : "h-auto";

  return (
      <section className={`w-full ${height} ${className}`}>
        <h2 className={`w-full ${titlePadding} text-center font-extrabold ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </section>
  );
};

export default SectionLayout;