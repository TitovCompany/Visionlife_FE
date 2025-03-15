import clsx from 'clsx';

const COL_SPANS = Object.fromEntries(
 Array.from({length: 12}, (_, i) => [i + 1, `col-span-${i + 1}`])
);

const ROW_SPANS = Object.fromEntries(
 Array.from({length: 12}, (_, i) => [i + 1, `row-span-${i + 1}`])
);

const COL_STARTS = Object.fromEntries(
 Array.from({length: 12}, (_, i) => [i + 1, `col-start-${i + 1}`])
);

const COL_ENDS = Object.fromEntries(
 Array.from({length: 13}, (_, i) => [i + 2, `col-end-${i + 2}`])
);

const ROW_STARTS = Object.fromEntries(
 Array.from({length: 12}, (_, i) => [i + 1, `row-start-${i + 1}`])
);

const ROW_ENDS = Object.fromEntries(
 Array.from({length: 13}, (_, i) => [i + 2, `row-end-${i + 2}`])
);

const GAP_SIZES = Object.fromEntries(
 Array.from({length: 10}, (_, i) => [i + 1, `gap-${i + 1}`])
);

const ORDER_SIZES = Object.fromEntries(
 Array.from({length: 12}, (_, i) => [i + 1, `order-${i + 1}`])
);

const PLACE_SELF_OPTIONS = {
 start: 'place-self-start',
 center: 'place-self-center',
 end: 'place-self-end',
 stretch: 'place-self-stretch',
};

interface GridArticleProps {
 children: React.ReactNode;
 colSpan?: number;
 rowSpan?: number;
 colStart?: number;
 colEnd?: number;
 rowStart?: number;
 rowEnd?: number;
 gap?: number;
 order?: number;
 placeSelf?: keyof typeof PLACE_SELF_OPTIONS;
 className?: string;
}

const GridArticle: React.FC<GridArticleProps> = ({
 children,
 colSpan = 12,
 rowSpan = 1,
 colStart,
 colEnd,
 rowStart,
 rowEnd,
 gap,
 order,
 placeSelf,
 className,
}) => {
 return (
  <article
   className={clsx(
    COL_SPANS[colSpan] || 'col-span-12',
    ROW_SPANS[rowSpan] || 'row-span-1',
    colStart && COL_STARTS[colStart],
    colEnd && COL_ENDS[colEnd],
    rowStart && ROW_STARTS[rowStart],
    rowEnd && ROW_ENDS[rowEnd],
    gap && GAP_SIZES[gap],
    order && ORDER_SIZES[order],
    placeSelf && PLACE_SELF_OPTIONS[placeSelf],
    className)}>
   {children}
  </article>
 );
};

export default GridArticle;
