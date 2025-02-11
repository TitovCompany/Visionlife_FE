import {Link} from 'react-router-dom';

const serviceItem = [
  {id: 1, src: "/img/service/p1.webp", title: "회사 연혁"},
  {id: 2, src: "/img/service/p2.webp", title: "회사 소개"},
  {id: 3, src: "/img/service/p3.webp", title: "비즈니스"},
  {id: 4, src: "/img/service/p4.webp", title: "오시는 길"},
]

const SectionAbout_Design2 = () => {
  return (
    <section className="h-[560px] flex">
      <article className="w-1/2 px-16 pt-16 pb-80 text-center bg-primary text-white">
        <h2 className="mb-10 text-4xl text-left font-semibold">Vision Life</h2>
        <p className="text-xl text-left leading-8">
          지속 가능한 미래를 그리며,<br />
          세상을 연결하는 친환경 기술을<br />
          만들어갑니다.
        </p>
      </article>
      <ul className="w-full h-full mx-auto flex flex-col">
        {serviceItem.map(item => (
          <li key={item.id} className="relative w-full h-40 group overflow-hidden transition-all duration-300 ease-in-out hover:h-64">
            <Link to={"/"}>
              <h3 className="ml-24 text-3xl font-semibold relative top-10 z-10">{item.title}</h3>
              <img src={item.src} alt={`${item.title} 백그라운드 이미지`} className="absolute inset-0 w-full h-full object-cover blur-md transition-all duration-300 ease-in-out group-hover:h-full"
              />
            </Link>
          </li>
        ))}
        {/*<li className="w-full h-full flex justify-start items-center">
          <h3 className="ml-32 text-2xl font-semibold">회사 연혁</h3>
        </li>
        <li className="w-full h-full flex justify-start items-center">
          <h3 className="ml-32 text-2xl font-semibold">회사 소개</h3>
        </li>
        <li className="w-full h-full flex justify-start items-center">
          <h3 className="ml-32 text-2xl font-semibold">비즈니스</h3>
        </li>
        <li className="w-full h-full flex justify-start items-center">
          <h3 className="ml-32 text-2xl font-semibold">오시는 길</h3>
        </li>*/}
      </ul>
    </section>
  );
};

export default SectionAbout_Design2;