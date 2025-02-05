import DummyImgBox from "../../../components/DummyImgBox.tsx";

const NewsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
      <li className="w-full">
        <DummyImgBox width="w-full" height="h-full" isCircle={false}/>
        <h2>{title}</h2>
        <div>{description}</div>
      </li>
  );
};

export default NewsCard;