import UtexOverview from '../components/UtexOverview.tsx';
import UtexFeatures from '../components/UtexFeatures.tsx';
import UtexInkSystem from '../components/UtexInkSystem.tsx';
import UtexComparison from '../components/UtexComparison.tsx';

const Utex = () => {
  return (
    <div className="py-12 sm:py-20 md:py-32">
      <UtexOverview/>
      <UtexFeatures/>
      <UtexInkSystem/>
      <UtexComparison/>
    </div>
  );
};

export default Utex;
