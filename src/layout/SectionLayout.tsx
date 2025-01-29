import * as React from "react";

const SectionLayout = ({
  children,
  title
}: {
  children: React.ReactNode,
  title: string
}) => {
  return (
      <section className="w-full h-screen">
        <h2 className="w-full p-18 text-center text-6xl font-extrabold">{title}</h2>
        {children}
      </section>
  );
};

export default SectionLayout;