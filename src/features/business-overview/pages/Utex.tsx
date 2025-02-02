import utex from "../../../data/businessUtex.json";

const Utex = () => {
  return (
      <section>
        <h3>{utex.title}</h3>
        {utex.sections.map(section => (
            <article key={section.id}>
              {section.items.map(({id, content}) => (
                  <p key={id}>{content}</p>
              ))}
            </article>
        ))}
      </section>
  );
};

export default Utex;