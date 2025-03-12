import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useScrollSlide} from '../../../hooks/useScrollSlide.ts';
import vision from '../../../data/profile/vision.json';

gsap.registerPlugin(ScrollTrigger);

const VisionScroll = () => {
  const {sectionRef, sectionsRef, height} = useScrollSlide({
    direction: 'vertical', // 가로 스크롤
    height: 'h-screen', // 섹션 높이
    opacity: false, // 요소 페이드 아웃 효과 추가
  });

  return (
    <section
      ref={sectionRef}
      className={`relative flex pt-20 pb-32 ${height} w-full max-w-full flex-col bg-gray-100`}>
      <div className='mx-auto w-full max-w-sm pb-12 text-left font-bold lg:max-w-5xl'>
        <p className='text-md text-primary border-b-primary w-fit border-b lg:text-lg'>
          목표 및 방향성
        </p>
        <h2 className='text-3xl leading-relaxed lg:text-5xl'>
          <span className='text-primary'>비전라이프</span>가 창조하는
          <br />
          지속 가능한 미래
        </h2>
      </div>

      {/* 내부 스크롤이 가능한 컨테이너 */}
      <div className='border-b-primary relative mx-auto w-full max-w-6xl overflow-hidden'>
        <div className='flex h-screen w-full flex-col overflow-hidden'>
          {vision.data.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                // null이 아닐 때만 추가
                if (el) sectionsRef.current[index] = el;
              }}
              className='flex h-full w-full flex-none flex-col gap-10'>
              <img
                src={item.img}
                alt={item.title}
                className='h-[300px] w-full object-cover lg:h-[600px]'
              />
              <div className='z-10 mx-auto w-full max-w-sm lg:max-w-4xl'>
                <h4 className='pb-3 text-2xl font-extrabold lg:text-4xl'>
                  {item.title}
                </h4>
                <p className='text-lg leading-relaxed font-semibold lg:text-2xl lg:whitespace-pre-line'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionScroll;
