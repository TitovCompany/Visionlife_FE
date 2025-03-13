const ScrollSnap = () => {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth'>
      <div className='flex h-screen snap-start items-center justify-center bg-teal-500 text-4xl text-white'>
        섹션 1
      </div>
      <div className='flex h-screen snap-start items-center justify-center bg-yellow-500 text-4xl text-white'>
        섹션 2
      </div>
      <div className='flex h-screen snap-start items-center justify-center bg-purple-500 text-4xl text-white'>
        섹션 3
      </div>
    </div>
  );
};

export default ScrollSnap;
