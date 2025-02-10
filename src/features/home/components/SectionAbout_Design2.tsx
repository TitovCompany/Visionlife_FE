import DummyImgBox from '../../../components/DummyImgBox.tsx';

const SectionAbout_Design2 = () => {
  return (
    <section className="pb-20 flex">
      <article className="w-1/2 px-16 pt-16 pb-80 text-center bg-primary text-white">
        <h2 className="mb-10 text-4xl text-left font-semibold">Vision Life</h2>
        <p className="text-xl text-left leading-8">
          지속 가능한 미래를 그리며,<br />
          세상을 연결하는 친환경 기술을<br />
          만들어갑니다.
        </p>
      </article>
      <ul className="w-full mx-auto flex flex-col">
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
    </section>
  );
};

export default SectionAbout_Design2;