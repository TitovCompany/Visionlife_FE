const DummyImgBox = ({
  width,
  height,
  isCircle,
}: {
  width: string;
  height: string;
  isCircle: boolean;
}) => {
  const rounded = isCircle ? 'rounded-full' : 'rounded';
  return (
    <div
      className={`${width} ${height} ${rounded} flex items-center justify-center border-2`}>
      Image Box
    </div>
  );
};

export default DummyImgBox;
