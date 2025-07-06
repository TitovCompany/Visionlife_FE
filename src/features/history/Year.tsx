import React from 'react';

interface YearProps {
  year: string;
}

const Year: React.FC<YearProps> = ({ year }) => {
  const isRange = year.includes('~');
  const [startYear, endYear] = isRange ? year.split('~') : [year, null];

  return (
    <h2 className="inline-block py-1 text-3xl md:text-5xl font-semibold text-primary">
      <span className="flex md:hidden">
        {isRange ? `${startYear}년 ~ ${endYear}년` : `${year}년`}
      </span>
      <span className="hidden md:flex flex-col items-center">
        {isRange ? (
          <>
            <span>{startYear}년</span>
            <span className="text-xl md:text-3xl">~</span>
            <span>{endYear}년</span>
          </>
        ) : (
          <span>{year}년</span>
        )}
      </span>
    </h2>
  );
};

export default Year; 