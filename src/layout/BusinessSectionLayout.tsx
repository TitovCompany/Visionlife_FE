import React from 'react';
import {Link} from 'react-router-dom';
import {LuCircleArrowRight} from 'react-icons/lu';

interface BusinessSectionLayoutProps {
  title: string;
  description: string;
  src: string;
  art: string;
  href: string;
}

const BusinessSectionLayout: React.FC<BusinessSectionLayoutProps> = (props) => {
  const {title, description, src, art, href} = props;
  return (
    <section className="home_item mx-auto w-full max-w-sm py-4 md:max-w-6xl lg:max-w-4xl xl:max-w-6xl md:py-10">
      <article className="flex flex-col gap-2 lg:flex-row lg:gap-10 xl:gap-20">
        <img
          src={src}
          alt={art}
          className="mx-auto w-80 h-80 sm:w-[370px] sm:h-[400px] rounded-xl object-cover lg:mx-0 md:h-[500px] md:w-[600px] lg:w-96 lg:h-96 xl:w-[600px] xl:h-[500px]"
        />
        <div className="flex flex-col gap-5 py-5 md:w-full mx-auto max-w-xs md:max-w-xl lg:max-w-2xl md:gap-6 lg:gap-7 xl:gap-10 md:py-10 lg:py-5 xl:py-16">
          <h3 className="text-2xl font-bold md:w-full md:text-4xl">
            {title}
          </h3>
          <p className="w-full text-base sm:text-lg leading-relaxed md:text-xl">
            {description}
          </p>
          <Link to={href} className="flex items-center justify-start gap-4 text-xl">
            <LuCircleArrowRight className="text-primary font-extrabold" />더
            알아보기
          </Link>
        </div>
      </article>
    </section>
  );
};

export default BusinessSectionLayout;
