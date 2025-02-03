const DummyImgBox = ({
  width,
  height,
  isCircle
}: {
  width: string;
  height: string;
  isCircle: boolean;
}) => {
  const rounded = isCircle ? "rounded-full" : "rounded";
  return (
      <div className={`${width} ${height} ${rounded} border-2 flex justify-center items-center`}>Image Box</div>
  );
};

export default DummyImgBox;