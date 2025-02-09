import React from 'react';
import {MdEco} from 'react-icons/md';
import {FaChartLine, FaHandsHelping} from 'react-icons/fa';

interface Props {
  //icon: ReactNode;
  title: string;
}

const VisionItem: React.FC<Props> = ({title}) => {
  const icon =
    {
      '친환경 기술': <MdEco className="text-3xl text-green-500" />,
      '경제력 상승': <FaChartLine className="text-3xl text-blue-500" />,
      '함께사는 사회': <FaHandsHelping className="text-3xl text-orange-500" />,
    }[title] || null;

  const bgColor =
    {
      '친환경 기술': 'bg-green-100',
      '경제력 상승': 'bg-blue-100',
      '함께사는 사회': 'bg-orange-100',
    }[title] || 'bg-gray-200';

  return (
    <li
      className={`flex h-40 w-40 flex-col items-center justify-center space-y-2 rounded-full shadow-md ${bgColor}`}>
      {icon}
      <span className="text-lg font-semibold">{title}</span>
    </li>
  );
};

export default VisionItem;
