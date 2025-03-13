import AnimatedHeading from './AnimatedHeading.tsx';
import clsx from 'clsx';
import React from 'react';

/**
 * ImageCard 타입을 정의한 인터페이스
 *
 * @property {("div" | "li")} [as] - 렌더링할 HTML 요소 유형 (기본값: 'div')
 * @property {string} [title] - 카드 제목 (애니메이션 적용 가능)
 * @property {boolean} animation - 애니메이션 적용 여부
 * @property {string} description - 카드 설명
 * @property {string} src - 이미지 URL
 * @property {string} alt - 이미지 대체 텍스트
 * @property {string} [wrapperClass] - 카드 래퍼의 추가 클래스
 * @property {string} [imageClass] - 이미지의 추가 클래스
 * @property {string} [descriptionClass] - 설명의 추가 클래스
 */
interface ImageCardProps {
  as?: 'div' | 'li';
  title?: string;
  animation: boolean;
  description: string;
  src: string;
  alt: string;
  isFlex?: boolean;
  wrapperClass?: string;
  imageClass?: string;
  descriptionClass?: string;
}

/**
 * 이미지와 제목, 설명을 포함한 카드 컴포넌트
 *
 * @component
 * @example
 * ```tsx
 * <ImageCard
 *   as="li"
 *   title="Sample Title"
 *   animation={true}
 *   description="This is a sample description."
 *   src="/images/sample.jpg"
 *   alt="Sample Image"
 *   wrapperClass="p-4 bg-gray-100 rounded-lg"
 *   imageClass="w-32 h-32 rounded-full"
 *   descriptionClass="text-sm text-gray-600"
 * />
 * ```
 *
 * @param {ImageCardProps} props - ImageCard 컴포넌트의 속성
 * @returns {JSX.Element} 렌더링된 ImageCard 컴포넌트
 */
const ImageCard: React.FC<ImageCardProps> = (props) => {
  const {
    as: Component = 'div',
    title,
    description,
    animation = false,
    isFlex = false,
    src,
    alt,
    wrapperClass,
    imageClass,
    descriptionClass,
  } = props;

  const imgClasses = clsx(
    imageClass
      ? imageClass
      : 'w-[120px] md:w-[140px] h-[120px] md:h-[140px] object-cover'
  );

  return (
    <Component className={wrapperClass}>
      <img className={imgClasses} src={src} alt={alt} />

      {isFlex ? (
        <div className='flex flex-col'>
          {animation && title && (
            <AnimatedHeading
              className='mt-4 text-xl sm:text-2xl'
              title={title}
              role='heading'
            />
          )}
          <p className={descriptionClass}>{description}</p>
        </div>
      ) : (
        <>
          {animation && title && (
            <AnimatedHeading
              className='mt-4 text-lg sm:text-xl'
              title={title}
              role='heading'
            />
          )}
          <p className={descriptionClass}>{description}</p>
        </>
      )}
    </Component>
  );
};

export default ImageCard;
