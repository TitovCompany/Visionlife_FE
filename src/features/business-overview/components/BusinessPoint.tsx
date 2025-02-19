import React from 'react';
import clsx from 'clsx';

interface BusinessPointProps {
  point: string;
  title: string;
  src: string;
  isReversed?: boolean;
}

const BusinessPoint: React.FC<BusinessPointProps> = (props) => {
  const {
    point,
    title,
    src,
    isReversed = false,
  } = props;
  const container = clsx(isReversed ? "lg:flex-row-reverse" : "lg:flex-row",);
  const imageClasses = clsx(isReversed ? "-right-10" : "-left-10",);
  
  return (
    <article
      className={`mt-36 flex h-full w-full max-w-full gap-5 lg:h-[700px] ${container} lg:items-center`}>
      <img
        src={src}
        alt=""
        className={`relative ${imageClasses} h-96 w-96 rounded-xl object-cover lg:h-[700px]  lg:w-[50%]`} />
      <div className=" w-full lg:w-[50%] mx-auto max-w-lg">
        <p className="text-primary mb-3 text-3xl font-semibold">{point}</p>
        <h2 className="text-3xl font-bold leading-relaxed">{title}</h2>
      </div>
    </article>
  );
};

export default BusinessPoint;