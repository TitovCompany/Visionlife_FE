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
  const {
    title,
    description,
    src,
    art,
    href
  } = props;
  return (
    <section className="home_item w-full max-w-sm md:max-w-6xl mx-auto py-4 md:py-10">
      <article className="flex flex-col md:flex-row gap-2 md:gap-20">
        <img src={src} alt={art} className="w-[370px] h-[400px] mx-auto md:w-[600px] md:h-[500px] md:mx-0 object-cover rounded-xl"/>
        <div className="md:w-full py-5 md:py-10 flex flex-col gap-5 md:gap-10 ">
          <div className="md:w-full max-w-xs md:max-w-2xl mx-auto md:mx-0">
            <h3 className="md:w-full text-2xl md:text-4xl font-medium">
              {title}
            </h3>
            <p className="w-full pt-5 md:pt-10 text-lg md:text-xl leading-relaxed">
              {description}
            </p>
          </div>
          <Link to={href} className="ml-5 flex items-center justify-center md:justify-start gap-4 text-xl">
            <LuCircleArrowRight className="text-primary font-extrabold" />
            더 알아보기
          </Link>
        </div>
      </article>
    </section>
  );
};

export default BusinessSectionLayout;