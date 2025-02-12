import { ReactNode } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; // 체크 아이콘

interface Props<T> {
  data: T[];
}

const OverviewList = <T extends ReactNode>({ data }: Props<T>) => {
  return (
    <ul className="mx-auto w-full max-w-4xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-[1rem] leading-8 font-medium text-gray-800"
        >
          <AiOutlineCheckCircle className="text-green-500" size={20} />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default OverviewList;
