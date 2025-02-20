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
    <section className="home_item mx-auto w-full max-w-sm py-4 md:max-w-6xl md:py-10">
      <article className="flex flex-col gap-2 md:flex-row md:gap-20">
        <img
          src={src}
          alt={art}
          className="mx-auto h-[400px] w-[370px] rounded-xl object-cover md:mx-0 md:h-[500px] md:w-[600px]"
        />
        <div className="flex flex-col gap-5 py-5 md:w-full md:gap-10 md:py-10">
          <div className="mx-auto max-w-xs md:mx-0 md:w-full md:max-w-2xl">
            <h3 className="text-2xl font-medium md:w-full md:text-4xl">
              {title}
            </h3>
            <p className="w-full pt-5 text-lg leading-relaxed md:pt-10 md:text-xl">
              {description}
            </p>
          </div>
          <Link
            to={href}
            className="ml-5 flex items-center justify-center gap-4 text-xl md:justify-start">
            <LuCircleArrowRight className="text-primary font-extrabold" />더
            알아보기
          </Link>
        </div>
      </article>
    </section>
  );
};

export default BusinessSectionLayout;
