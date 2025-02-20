import UtexOverview from '../components/UtexOverview.tsx';
import UtexFeatures from '../components/UtexFeatures.tsx';
import UtexInkSystem from '../components/UtexInkSystem.tsx';
import UtexComparison from '../components/UtexComparison.tsx';
import {useRef} from 'react';
import useScrollAnimation from '../../../hooks/useScrollAnimation.ts';

const Utex = () => {
  const sectionRef = useRef(null);
  useScrollAnimation('.biz_item', 'top 80%')
  return (
    <div className="py-12 sm:py-20 md:py-32">
      <UtexOverview ref={sectionRef}/>
      <UtexFeatures ref={sectionRef}/>
      <UtexInkSystem ref={sectionRef}/>
      <UtexComparison ref={sectionRef}/>
    </div>
  );
};

export default Utex;
