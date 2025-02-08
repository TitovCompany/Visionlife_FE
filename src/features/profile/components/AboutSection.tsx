import profile from '../../../data/profile.json';

const AboutSection = () => {
  return (
    <section className="mx-auto mb-32 h-auto w-full max-w-7xl overflow-hidden">
      <div className="relative mt-32">
        <article className="absolute right-0 h-full w-fit bg-[#5c504b] p-10 text-white">
          <p className="mb-3 text-2xl font-bold text-white">
            (주)비젼라이프홀딩스는
            <br />
            친환경 녹색 산업혁명의
            <br />
            회사입니다.
          </p>
          <p className="max-w-md text-base leading-relaxed">
            {/* 당사는 세계 유일의 무폐수 나일론 디지털 나염 기술을<br/>
                  성공적으로 상용화한 기업으로서, 전사지를 사용하지 않고<br/>
                  4색(C.M.Y.K) 잉크만으로 실사를 구현하는<br/>
                  친환경 디지털 프린팅 기술을 보유하고 있습니다. <br/>
                  지속적인 연구 개발과 기술 혁신을 통해<br/>
                  섬유 산업의 새로운 패러다임을 제시하며,<br/>
                  글로벌 시장에서 친환경 녹색 산업을 선도하고 있습니다.*/}
            당사는 세계 유일의 무폐수 나일론 디지털 나염 기술을 성공적으로
            상용화한 기업으로서, 전사지를 사용하지 않고 4색(C.M.Y.K) 잉크만으로
            실사를 구현하는 친환경 디지털 프린팅 기술을 보유하고 있습니다.
            지속적인 연구 개발과 기술 혁신을 통해 섬유 산업의 새로운 패러다임을
            제시하며, 글로벌 시장에서 친환경 녹색 산업을 선도하고 있습니다.
          </p>
        </article>
        <img
          className="max-h-[350px] w-full pt-12"
          src="/img/home/p2.jpg"
          alt="기업 소개 페이지 히어로 이미지"
        />
      </div>
      <article className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">{profile.title}</h2>
        {profile.content.map((item, index) => (
          <p
            key={index}
            className="my-7 text-base leading-relaxed first:mt-0 last:mb-0">
            {item}
          </p>
        ))}
      </article>
    </section>
  );
};

export default AboutSection;
