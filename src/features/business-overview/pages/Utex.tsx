import utex from "../../../data/businessUtex.json";
import SectionLayout from "../../../layout/SectionLayout.tsx";

const Utex = () => {
  return (
      <SectionLayout
          title={utex.title}
          className="grid place-items-center"
          titleClassName="max-w-[330px] pt-16 text-4xl leading-tight"
          titlePadding="p-0"
      >
        <div className="max-w-4xl w-full px-6 space-y-12">
          {utex.sections.map(section => (
              <article key={section.id} className="space-y-6">
                {/* Section Title */}
                <h3 className="text-2xl font-semibold border-b pb-2">{section.title}</h3>

                {/* Content List */}
                {section.items.map(item => (
                    <div key={item.id} className="pl-4 border-l-4 border-gray-300">
                      {item.category === "feature" ? (
                          <h4 className="font-medium text-lg">{item.title}</h4>
                      ) : null}
                      <p className="text-gray-700">{item.content}</p>
                    </div>
                ))}
              </article>
          ))}
        </div>
      </SectionLayout>
  );
};

export default Utex;
