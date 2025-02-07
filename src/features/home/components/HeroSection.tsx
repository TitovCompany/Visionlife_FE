import DummyImgBox from '../../../components/DummyImgBox.tsx';
import TextLink from '../../../components/TextLink.tsx';

const HeroSection = () => {
  return (
    <article className="mx-32 h-96 grid grid-cols-5 grid-rows-2 gap-y-2">
      <div className="mr-2 col-span-4 row-span-2">
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
      </div>
      <div className="col-span-1 row-span-2 grid grid-rows-2 gap-2">
        <DummyImgBox width="w-full" height="h-full" isCircle={false} />
        {/* 회사 연혁 바로가기 */}
        <div className="relative">
          <img
            src="/img/home/p3.png"
            alt="기업 연혁 이미지"
            className="absolute z-0"/>
          <TextLink
            href="/"
            className="w-full h-full flex items-center justify-center rounded-2xl relative z-10"
            size="lg">
          <span className="font-semibold">
            회사 연혁
          </span>
          </TextLink>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
