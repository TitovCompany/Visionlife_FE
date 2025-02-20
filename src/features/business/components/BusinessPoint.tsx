import React from 'react';
import clsx from 'clsx';

interface BusinessPointProps {
  point: string;
  title: string;
  src: string;
  isReversed?: boolean;
}

const BusinessPoint: React.FC<BusinessPointProps> = (props) => {
  const {point, title, src, isReversed = false} = props;
  const container = clsx(isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row');
  const imageClasses = clsx(
    isReversed ? '-right-14 lg:-right-10' : '-left-1 lg:-left-10'
  );

  return (
    <article
      className={`mt-36 flex h-full w-full max-w-full flex-col gap-5 lg:h-[700px] lg:flex-row ${container} lg:items-center`}>
      <img
        src={src}
        alt=""
        className={`relative ${imageClasses} h-96 w-96 rounded-xl object-cover lg:h-[700px] lg:w-[50%]`}
      />
      <div className="mx-auto w-full max-w-sm md:max-w-lg lg:w-[50%]">
        <p className="text-primary mb-3 text-2xl font-semibold md:text-3xl">
          {point}
        </p>
        <h2 className="text-2xl leading-relaxed font-bold md:text-3xl">
          {title}
        </h2>
      </div>
    </article>
  );
};

export default BusinessPoint;
