import {ReactNode} from "react";

interface Props {
  title: string;
  width?: string;
  height?: string;
  description: string;
  bgColor?: string;
  icon?: ReactNode;
}

const ListCard = ({
  title,
  icon,
  description,
  width,
  height,
  bgColor
}: Props) => {
  return (
      <li className={`w-full min-w-fit ${width} ${height} p-5 ${bgColor} rounded-xl shadow-md`}>
        <div className="max-w-fit mb-2 flex items-center justify-between gap-2">
          {icon}
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <p>{description}</p>
      </li>
  );
};

export default ListCard;