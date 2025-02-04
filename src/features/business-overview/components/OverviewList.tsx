import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Props<T> {
    data: T[];
}

const OverviewList = <T extends ReactNode>({ data }: Props<T>) => {
    return (
        <ul className="w-full sm:max-w-full bg-white rounded-lg p-4 space-y-3">
            {data.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[1rem] leading-8">
                    <FaCheckCircle className="text-blue-500 text-lg" />
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default OverviewList;
