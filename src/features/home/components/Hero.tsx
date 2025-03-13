const Hero = () => {
 return (
  <section className='bg-primary text-color pt-20 pb-72'>
   <article className='flex flex-col items-center justify-center'>
    <img
     src='/img/logo.webp'
     alt='히어로 섹션 이미지'
     className='h-[400px] w-[400px]'
    />
    <h2 className='mb-10 text-7xl'>PROUTEX</h2>
    <p className='mb-5 text-4xl'>
     (주)비젼라이프홀딩스의 나일론잉크 “N-RECT 엔렉”은
    </p>
    <p className='text-3xl'>99% 무폐수로 만들어집니다.</p>
   </article>
  </section>
 );
};

export default Hero;