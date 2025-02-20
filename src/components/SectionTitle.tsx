const SectionTitle = ({
  title,
  preHeading
}: {
  title: string;
  preHeading: string;
}) => {
  return (
    <div className="mx-auto w-full max-w-4xl pt-32 pb-20 font-bold">
      <p className="mb-8 text-5xl">{preHeading}</p>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;