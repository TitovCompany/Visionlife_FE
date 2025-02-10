import DummyImgBox from '../../../components/DummyImgBox.tsx';

const SectionAbout_Design1 = () => {
  return (
    <section>
      <article className="mx-32 py-20 text-center">
        <h2 className="mb-5 text-4xl font-semibold">Vision Life</h2>
        <p className="text-2xl leading-8">
          지속 가능한 미래를 그리며, 세상을 연결하는
          <br /> 친환경 기술을 만들어갑니다.
        </p>
      </article>
      <div className="pb-20">
        <ul className="max-w-7xl h-[300px] mx-auto flex justify-between gap-5">
          <li className="w-full h-full">
            <DummyImgBox width="w-full" height="h-full" isCircle={false} />
          </li>
          <li className="w-full h-full">
            <DummyImgBox width="w-full" height="h-full" isCircle={false} />
          </li>
          <li className="w-full h-full">
            <DummyImgBox width="w-full" height="h-full" isCircle={false} />
          </li>
          <li className="w-full h-full">
            <DummyImgBox width="w-full" height="h-full" isCircle={false} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionAbout_Design1;