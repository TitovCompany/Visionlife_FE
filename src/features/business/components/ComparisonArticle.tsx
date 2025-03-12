import React from 'react';
import ImageCard from '../../../components/ImageCard.tsx';
import {UtexComparison} from '../../../types/business';

interface ComparisonArticleProps {
  title: string;
  subtitle: string;
  description: string;
  isFlex?: boolean;
  items: UtexComparison;
}

const ComparisonArticle: React.FC<ComparisonArticleProps> = (props) => {
  const {title, subtitle, description, isFlex, items} = props;
  return (
    <article>
      <div className='text-left text-2xl font-semibold'>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
      <ul className='space-y-3'>
        {items.steps.map((step, idx) => (
          <ImageCard
            key={step.id}
            as='li'
            animation={true}
            src={`/img/product/compare/p${idx + 1}.png`}
            alt={step.content}
            isFlex={isFlex}
            title={step.content}
            description={step.description}
            wrapperClass='flex flex-col items-center p-4 bg-white shadow rounded-lg'
            imageClass='w-[120px] md:w-[140px] h-[120px] md:h-[140px] object-cover rounded-full'
            descriptionClass='mt-2 text-gray-700 text-sm md:text-base'
          />
        ))}
      </ul>
    </article>
  );
};

export default ComparisonArticle;
