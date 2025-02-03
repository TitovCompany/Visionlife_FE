import {Link} from "react-router-dom";
import DummyImgBox from "../../../components/DummyImgBox.tsx";

interface Props {
  href: string;
  title: string;
}

const BusinessCard = ({
  href,
  title,
}: Props) => {
  return (
      <div className="w-[300px] h-[350px] rounded-lg bg-white shadow-md overflow-hidden">
        <Link to={href}>
          <div className="w-full h-full p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>소개</p>
            <div className="flex justify-center items-center h-[220px] w-full">
              <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default BusinessCard;