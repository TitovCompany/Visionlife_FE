import utex from "../../../data/businessUtex.json";
import SectionLayout from "../../../layout/SectionLayout.tsx";

const Utex = () => {
  return (
      <SectionLayout title={utex.title} titleClassName="text-4xl">
        {utex.sections.map(section => (
            <article key={section.id}>
              {section.items.map(({id, content}) => (
                  <p key={id}>{content}</p>
              ))}
            </article>
        ))}
      </SectionLayout>
  );
};

export default Utex;