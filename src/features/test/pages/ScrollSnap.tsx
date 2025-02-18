const ScrollSnap = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <div className="h-screen bg-teal-500 snap-start flex items-center justify-center text-white text-4xl">섹션 1</div>
      <div className="h-screen bg-yellow-500 snap-start flex items-center justify-center text-white text-4xl">섹션 2</div>
      <div className="h-screen bg-purple-500 snap-start flex items-center justify-center text-white text-4xl">섹션 3</div>
    </div>
  );
};

export default ScrollSnap;
