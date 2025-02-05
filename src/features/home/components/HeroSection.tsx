import DummyImgBox from '../../../components/DummyImgBox.tsx';

const HeroSection = () => {
  return (
    <article className="mx-32 h-96 grid grid-cols-5 grid-rows-2">
      <div className="col-span-4 row-span-2">
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
      </div>
      <div className="col-span-1 row-span-1">
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
      </div>
    </article>
  );
};

export default HeroSection;
