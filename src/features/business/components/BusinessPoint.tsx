import React, {useRef} from 'react';
import clsx from 'clsx';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

interface BusinessPointProps {
  point: string;
  title: string;
  src: string;
  isReversed?: boolean;
}

const BusinessPoint: React.FC<BusinessPointProps> = ({
  point,
  title,
  src,
  isReversed = false
}) => {
  const sectionRef = useRef(null);
  useScrollAnimation('.biz_item', 'top 80%')

  const containerClasses = clsx(
    'biz_item mt-36 grid w-full items-center gap-10',
    'md:grid-cols-2 md:items-center'
  );

  const imageContainerClasses = clsx(
    'relative w-full',
    isReversed ? 'md:order-last' : 'md:order-first'
  );

  const imageClasses = clsx(
    'w-full h-[450px] md:h-[500px] lg:h-[600px] object-cover',
    isReversed ? 'md:rounded-l-xl' : 'md:rounded-r-xl'
  );

  const textContainerClasses = clsx(
    'w-full lg:max-w-md xl:max-w-lg mx-auto',
    'px-5 lg:px-0',
    'flex flex-col gap-4 text-left md:text-lg'
  );

  return (
    <article ref={sectionRef} className={containerClasses}>
      {/* 이미지 섹션 */}
      <div className={imageContainerClasses}>
        <img src={src} alt="" className={imageClasses} />
      </div>

      {/* 텍스트 섹션 */}
      <div className={textContainerClasses}>
        <p className="text-primary text-2xl font-semibold md:text-3xl xl:text-4xl">
          #{point}
        </p>
        <h2 className="text-2xl font-bold leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">
          {title}
        </h2>
      </div>
    </article>
  );
};

export default BusinessPoint;
