interface FeatureItem {
 index: number;
 image: string;
 title: string;
 subTitle: string;
 description: string;
}

const HomeFeatureItem = ({
 index,
 image,
 title,
 subTitle,
 description
}: FeatureItem) => {
 return (
  <li
   /*ref={(el) => {
     if (el) contentRef.current[index] = el;
    }}*/
   className={`mt-56 flex items-center text-center gap-10 ${index === 1 && "flex-row-reverse"}`}>
   <img
    src={image}
    alt={title + ' 이미지'}
    className='h-32 w-32 object-contain md:h-[180px] md:w-[180px] lg:h-[300px] lg:w-[300px]' />
   <div className='text-left'>
    <h3 className='text-lg font-semibold md:text-2xl lg:text-4xl'>
     {title}
    </h3>
    <h4 className='text-xl mt-3'>{subTitle}</h4>
    <p className='mt-5 text-sm text-gray-600 md:text-base lg:text-lg'>
     {description}
    </p>
   </div>
  </li>
 );
};

export default HomeFeatureItem;