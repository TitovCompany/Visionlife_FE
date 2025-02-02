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
      <div className="w-[300px] h-[300px] border-2 rounded-lg">
        <Link to={href}>
          <div className="w-full h-full p-10">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>소개</p>
            <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
          </div>
        </Link>
      </div>
  );
};

export default BusinessCard;