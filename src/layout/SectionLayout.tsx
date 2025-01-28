import * as React from "react";

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <section className="h-screen">
        {children}
      </section>
  );
};

export default SectionLayout;