import clsx from 'clsx';

const GRID_COLS: Record<number, string> = {
 1: 'grid-cols-1',
 2: 'grid-cols-2',
 3: 'grid-cols-3',
 4: 'grid-cols-4',
 5: 'grid-cols-5',
 6: 'grid-cols-6',
 7: 'grid-cols-7',
 8: 'grid-cols-8',
 9: 'grid-cols-9',
 10: 'grid-cols-10',
 11: 'grid-cols-11',
 12: 'grid-cols-12',
};

const GRID_ROWS: Record<number, string> = {
 1: 'grid-rows-1',
 2: 'grid-rows-2',
 3: 'grid-rows-3',
 4: 'grid-rows-4',
 5: 'grid-rows-5',
 6: 'grid-rows-6',
};

const GridLayout = ({
 children,
 cols = 12,
 rows = 1,
 className,
}: {
 children: React.ReactNode;
 cols?: number;
 rows?: number;
 className?: string;
}) => {
 return (
  <section
   className={clsx(
    'grid',
    GRID_COLS[cols] || 'grid-cols-12',
    GRID_ROWS[rows] || 'grid-rows-1',
    className)}>
   {children}
  </section>
 );
};

export default GridLayout;