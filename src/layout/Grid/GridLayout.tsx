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

const GRID_ROWS: Record<string | number, string> = {
 1: 'grid-rows-1',
 2: 'grid-rows-2',
 3: 'grid-rows-3',
 4: 'grid-rows-4',
 5: 'grid-rows-5',
 6: 'grid-rows-6',
 auto: 'auto-rows-auto',
};

const GAP_CLASSES: Record<number, string> = {
 0: 'gap-0',
 1: 'gap-1',
 2: 'gap-2',
 3: 'gap-3',
 4: 'gap-4',
 5: 'gap-5',
 6: 'gap-6',
 8: 'gap-8',
 10: 'gap-10',
 12: 'gap-12',
 16: 'gap-16',
};

const ALIGN_CLASSES: Record<string, string> = {
 start: 'place-items-start',
 center: 'place-items-center',
 end: 'place-items-end',
 stretch: 'place-items-stretch',
};

interface GridLayoutProps {
 children: React.ReactNode;
 cols?: number;
 rows?: number | 'auto';
 gap?: number;
 align?: 'start' | 'center' | 'end' | 'stretch';
 className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({
 children,
 cols = 12,
 rows = 1,
 gap = 4,
 align = 'stretch',
 className,
}) => {
 return (
  <section
   className={clsx(
    'grid',
    GRID_COLS[cols] || 'grid-cols-12',
    GRID_ROWS[rows] || 'grid-rows-1',
    GAP_CLASSES[gap] || 'gap-4',
    ALIGN_CLASSES[align] || 'place-items-stretch',
    className)}>
   {children}
  </section>
 );
};

export default GridLayout;
