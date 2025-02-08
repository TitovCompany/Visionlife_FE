import DummyImgBox from '../../../components/DummyImgBox.tsx';
import TextLink from '../../../components/TextLink.tsx';

const HeroSection = () => {
  return (
    <article className="mx-32 grid h-96 grid-cols-5 grid-rows-2 gap-y-2">
      <div className="col-span-4 row-span-2 mr-2">
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
      </div>
      <div className="col-span-1 row-span-2 grid grid-rows-2 gap-2">
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
        {/* 회사 연혁 바로가기 */}
        <div className="relative">
          <img
            src="/img/home/p3.png"
            alt="기업 연혁 이미지"
            className="absolute z-0"
          />
          <TextLink
            href="/"
            className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl"
            size="lg">
            <span className="font-semibold">회사 연혁</span>
          </TextLink>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
