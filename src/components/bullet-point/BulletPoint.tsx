import React from 'react';

interface BulletPointProps {
  bulletPoints: string;
}

const BulletPoint: React.FC<BulletPointProps> = (props) => {
  const {bulletPoints} = props;
  return (
    <div className='bg-primary rounded-full px-4 py-2 text-xl font-extrabold text-white'>
      <span>{bulletPoints}</span>
    </div>
  );
};

export default BulletPoint;
