import {ReactNode} from 'react';
import clsx from 'clsx';

interface ListCardProps {
  title: string;
  type: "_base" | "_highlight";
  className?: string;
  size?: string;
  description: string;
  bgColor?: string;
  icon?: ReactNode;
}

const ListCard = ({
  title,
  type = "_base",
  icon,
  description,
  className,
  size,
  bgColor,
}: ListCardProps) => {
  const classes = clsx(
    `min-w-fit p-10 rounded-xl shadow-md ${className}`,
    type === "_base" ? "flex items-center gap-5" : "",
    size,
    bgColor
  );
  return (
    <li className={classes}>
      {type === "_highlight" && (
        <>
          <div className="max-w-fit mb-2 flex items-center justify-between gap-2">
            {icon}
            <span className="text-lg font-semibold">{title}</span>
          </div>
          <p>{description}</p>
        </>
      )}

      {type === "_base" && (
        <>
          {icon}
          <div className="max-w-fit mb-2 flex flex-col justify-start gap-1">
            <span className="text-lg font-semibold">{title}</span>
            <p>{description}</p>
          </div>
        </>
      )}
    </li>
  );
};

export default ListCard;
