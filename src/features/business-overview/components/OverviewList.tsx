import {ReactNode} from 'react';

interface Props<T> {
  data: T[];
}

const OverviewList = <T extends ReactNode>({data}: Props<T>) => {
  return (
    <ul className="mx-auto w-full max-w-2xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
      {data.map((item, index) => (
        <li key={index} className="text-[1rem] leading-8">
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default OverviewList;
