import imageSrc from '/img/home/p2.jpg';

const HeroSection = () => {
  return (
    <section className="h-screen">
      <figure className="relative h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt="Vision Image"
        />
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-7xl font-bold text-white">
          Vision !! <br /> Dreams Come True !!
        </figcaption>
      </figure>
    </section>
  );
};

export default HeroSection;
