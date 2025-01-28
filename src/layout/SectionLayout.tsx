import {Outlet} from "react-router-dom";

const SectionLayout = () => {
  return (
      <section>
        <Outlet/>
      </section>
  );
};

export default SectionLayout;