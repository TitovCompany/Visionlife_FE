import React from "react";
import {MdEco} from "react-icons/md";
import {FaChartLine, FaHandsHelping} from "react-icons/fa";

interface Props {
  //icon: ReactNode;
  title: string,
}

// Todo : title 별 색상 추가 필요
const VisionItem: React.FC<Props> = ({title}) => {
  const icon = {
    "친환경 기술": <MdEco className="text-green-500 text-3xl" />,
    "경제력 상승": <FaChartLine className="text-blue-500 text-3xl" />,
    "함께사는 사회": <FaHandsHelping className="text-orange-500 text-3xl" />,
  }[title] || null;

  return (
      <li className="w-40 h-40 flex flex-col items-center justify-center space-y-2 border border-gray-300 rounded-full bg-gray-200 shadow-md">
        {icon}
        <span className="text-lg font-semibold">{title}</span>
      </li>
  );
};

export default VisionItem;