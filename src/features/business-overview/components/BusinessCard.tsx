import {Link} from "react-router-dom";

interface Props {
  href: string;
  title: string;
}

const BusinessCard = ({
  href,
  title,
}: Props) => {
  return (
      <div className="w-[300px] h-[300px] border-2 rounded-lg">
        <Link to={href}>
          <div className="w-full h-full p-10">
            <h3 className="text-xl text-center font-bold">
              {title}
            </h3>
          </div>
        </Link>
      </div>
  );
};

export default BusinessCard;