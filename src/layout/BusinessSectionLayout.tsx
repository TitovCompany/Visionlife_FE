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
    <section className="home_item w-full max-w-7xl mx-auto py-10">
      <article className="flex gap-32">
        <img src={src} alt={art} className="w-[600px] h-[500px] object-cover rounded-xl"/>
        <div className="py-10 flex flex-col gap-10">
          <div>
            <h3 className="text-4xl font-medium">{title}</h3>
            <p className="pt-10 text-2xl leading-relaxed">{description}</p>
          </div>
          <Link to={href} className="ml-5 flex items-center gap-4 text-xl">
            <LuCircleArrowRight className="text-primary font-extrabold" />
            더 알아보기
          </Link>
        </div>
      </article>
    </section>
  );
};

export default BusinessSectionLayout;