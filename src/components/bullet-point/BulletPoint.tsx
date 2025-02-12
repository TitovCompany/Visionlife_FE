import React from 'react';

interface BulletPointProps {
  bulletPoints: string
}

const BulletPoint: React.FC<BulletPointProps> = (props) => {
  const {
    bulletPoints,
  } = props;
  return (
    <div className="py-2 px-4 bg-primary text-white rounded-full text-xl font-extrabold">
      <span>{bulletPoints}</span>
    </div>
  );
};

export default BulletPoint;