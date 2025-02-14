import { AiOutlineCheckCircle } from "react-icons/ai";

interface Props {
  data: string[];
  className?: string;
}

const OverviewList = ({ data, className = "" }: Props) => {
  return (
    <ul className={`mx-auto w-full max-w-4xl rounded-lg border border-gray-300 bg-white p-6 shadow-md ${className}`}>
      {data.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-sm md:text-base lg:text-base leading-8 font-medium text-gray-800"
        >
          <AiOutlineCheckCircle className="text-green-500 text-xl md:text-xl lg:text-2xl min-w-[24px]" />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default OverviewList;
