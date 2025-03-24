/*
import {RefObject} from 'react';

interface SectionHeaderProps {
 title: string;
 ref?: RefObject<HTMLDivElement> | ((el: HTMLDivElement | null) => void);
 subTitle?: string;
}

const SectionHeader = ({title, ref, subTitle}: SectionHeaderProps) => {
 return (
  <div ref={ref} className='text-primary text-left'>
   <h2 className='text-5xl font-bold'>{title}</h2>
   <p className='mt-6 text-xl text-gray-600'>
    {subTitle}
   </p>
  </div>
 );
};

export default SectionHeader;*/
import {RefObject} from 'react';

interface SectionHeaderProps {
 title: string;
 ref?: RefObject<HTMLDivElement> | ((el: HTMLDivElement | null) => void);
 subTitle?: string | string[];
 align?: 'left' | 'center' | 'right';
}

const SectionHeader = ({title, ref, subTitle, align = 'left'}: SectionHeaderProps) => {
 return (
  <div ref={ref} className={`text-primary text-${align}`}>
   <h2 className="text-5xl font-bold mb-6">{title}</h2>
   {Array.isArray(subTitle)
    ? subTitle.map((text, idx) => (
     <p key={idx} className="text-xl text-gray-600 leading-relaxed">
      {text}
     </p>
    ))
    : subTitle && (
    <p className="text-xl text-gray-600 leading-relaxed">
     {subTitle}
    </p>
   )}
  </div>
 );
};

export default SectionHeader;