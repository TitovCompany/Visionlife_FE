interface HeroSectionProps {
  src: string;
  sectionClass?: string;
}

const HeroSection = ({src, sectionClass}: HeroSectionProps) => {
  return (
    <section className={sectionClass}>
      <figure className='relative h-full w-full'>
        <img
          className='h-full w-full object-cover'
          src={src}
          alt='Vision Image'
        />
        <figcaption className='xs:text-4xl absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl'>
          Vision !! <br /> Dreams Come True !!
        </figcaption>
      </figure>
    </section>
  );
};

export default HeroSection;
