interface Props {
  data: string[];
  className?: string;
}

const BenefitList = ({ data, className = "" }: Props) => {
  return (
    <div className={`mx-auto w-full max-w-4xl bg-white border-t-4 border-b-4 border-primary p-10 rounded-lg shadow-md mb-20 ${className}`}>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index} className="text-base text-gray-800">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitList;
