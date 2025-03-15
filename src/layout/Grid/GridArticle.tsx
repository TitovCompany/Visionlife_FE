import clsx from 'clsx';

const COL_SPANS: Record<number, string> = {
 1: 'col-span-1',
 2: 'col-span-2',
 3: 'col-span-3',
 4: 'col-span-4',
 5: 'col-span-5',
 6: 'col-span-6',
 7: 'col-span-7',
 8: 'col-span-8',
 9: 'col-span-9',
 10: 'col-span-10',
 11: 'col-span-11',
 12: 'col-span-12',
};

const ROW_SPANS: Record<number, string> = {
 1: 'row-span-1',
 2: 'row-span-2',
 3: 'row-span-3',
 4: 'row-span-4',
 5: 'row-span-5',
 6: 'row-span-6',
 7: 'row-span-7',
 8: 'row-span-8',
 9: 'row-span-9',
 10: 'row-span-10',
 11: 'row-span-11',
 12: 'row-span-12',
};

interface GridArticleProps {
 children: React.ReactNode;
 colSpan?: number;
 rowSpan?: number;
 className?: string;
}

const GridArticle: React.FC<GridArticleProps> = ({
 children,
 colSpan = 12, // 기본적으로 한 줄을 차지하도록 설정
 rowSpan = 1,
 className,
}) => {
 return (
  <article
   className={clsx(
    COL_SPANS[colSpan] || 'col-span-12',
    ROW_SPANS[rowSpan] || 'row-span-1',
    className)}>
   {children}
  </article>
 );
};

export default GridArticle;
