import {Link} from 'react-router-dom';
import DummyImgBox from '../../../components/DummyImgBox.tsx';

interface Props {
  href: string;
  title: string;
  description: string;
}

const BusinessCard = ({href, title, description}: Props) => {
  return (
    <div className="h-[350px] w-[300px] overflow-hidden rounded-lg bg-white shadow-md">
      <Link to={href}>
        <div className="flex h-full w-full flex-col justify-between gap-y-3 p-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="font-base text-base">{description}</p>
          <div className="flex h-[220px] w-full items-center justify-center">
            <DummyImgBox width="w-full" height="h-full" isCircle={false} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BusinessCard;
