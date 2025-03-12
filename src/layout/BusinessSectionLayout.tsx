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
    <section className='home_item mx-auto w-full max-w-sm py-4 md:max-w-6xl md:py-10 lg:max-w-4xl xl:max-w-6xl'>
      <article className='flex flex-col gap-2 lg:flex-row lg:gap-10 xl:gap-20'>
        <img
          src={src}
          alt={art}
          className='mx-auto h-80 w-80 rounded-xl object-cover sm:h-[400px] sm:w-[370px] md:h-[500px] md:w-[600px] lg:mx-0 lg:h-96 lg:w-96 xl:h-[500px] xl:w-[600px]'
        />
        <div className='mx-auto flex max-w-xs flex-col gap-5 py-5 md:w-full md:max-w-xl md:gap-6 md:py-10 lg:max-w-2xl lg:gap-7 lg:py-5 xl:gap-10 xl:py-16'>
          <h3 className='text-2xl font-bold md:w-full md:text-4xl'>{title}</h3>
          <p className='w-full text-base leading-relaxed sm:text-lg md:text-xl'>
            {description}
          </p>
          <Link
            to={href}
            className='flex items-center justify-start gap-4 text-xl'>
            <LuCircleArrowRight className='text-primary font-extrabold' />더
            알아보기
          </Link>
        </div>
      </article>
    </section>
  );
};

export default BusinessSectionLayout;
