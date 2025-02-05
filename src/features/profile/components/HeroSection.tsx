import imageSrc from '/img/home/p2.jpg';

const HeroSection = () => {
  return (
    <section className="h-screen">
      <figure className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt="Vision Image"
        />
        <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-white text-7xl font-bold bg-black/50">
          Vision !! <br /> Dreams Come True !!
        </figcaption>
      </figure>
    </section>
  );
};

export default HeroSection;
