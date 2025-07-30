interface FeatureItem {
 index: number;
 imageRef: (element: HTMLImageElement | null) => void;
 titleRef: (element: HTMLElement | null) => void;
 descriptionRef: (element: HTMLElement | null) => void;
 image: string;
 title: string;
 subTitle: string;
 description: string;
}

const HomeFeatureItem = ({
 index,
 imageRef,
 titleRef,
 descriptionRef,
 image,
 title,
 subTitle,
 description
}: FeatureItem) => {
 return (
  <li
   className={`mt-56 flex items-center text-center gap-10 ${index === 1 && "flex-row-reverse"}`}>
   <img
    src={image}
    ref={imageRef}
    alt={title + ' 이미지'}
    className='h-32 w-32 object-contain md:h-[180px] md:w-[180px] lg:h-[600px] lg:w-[300px] border-primary border-2 rounded-2xl'/>
   <div className='text-left'>
    {/* 제목 */}
    <div id={'title-wrap#' + index} className='title-wrap' ref={titleRef}>
     <h3 className='text-lg font-semibold md:text-2xl lg:text-4xl'>{title}</h3>
     <h4 className='text-xl mt-3'>{subTitle}</h4>
    </div>
    {/* 설명 */}
    <p ref={descriptionRef} className='mt-5 text-sm text-gray-600 md:text-base lg:text-lg'>{description}</p>
   </div>
  </li>
 );
};

export default HomeFeatureItem;