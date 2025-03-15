import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const solutions = [
 {
  id: 1,
  image: '/img/home/solutions/p1.webp',
  title: '효율적이고 간소화된 공정',
  description:
   '비전라이프의 친환경 잉크와 기계를 사용하면 폐수가 발생하지 않으며, 별도의 전·후처리 과정이 필요 없어 공정이 더욱 간소화됩니다.',
 },
 {
  id: 2,
  image: '/img/home/solutions/p2.webp',
  title: '물 한 방울도 필요 없는 염색 기술',
  description:
   '비전라이프는 최첨단 기술력을 바탕으로 물을 전혀 사용하지 않는 염색 솔루션을 개발하고 있습니다. 우리는 지속 가능한 미래를 위해 끊임없이 혁신하며, 새로운 산업 표준을 만들어가고 있습니다.',
 },
 {
  id: 3,
  image: '/img/home/solutions/p3.webp',
  title: '탁월한 견뢰도와 품질',
  description:
   '비전라이프는 신뢰와 품질을 최우선 가치로 삼고 있습니다. 우리는 색상의 선명도와 내구성을 극대화하여, 고객이 기대하는 그 이상의 결과를 제공합니다. 친환경 염색 기술의 새로운 기준을 경험해 보세요.',
 },
];

const Solutions = () => {
 return (
  <GridArticle colStart={2} colEnd={12} className='py-20 mb-20'>
   {/* Title */}
   <h2 className='text-5xl font-bold'>
    <p>Our Eco-Friendly</p>
    <p>Dyeing Solutions</p>
   </h2>
   {/* Contents */}
   <ul className='mt-20 flex gap-5'>
    {solutions.map((solution) => (
     <li key={solution.id} className='relative flex-1'>
      <img src={solution.image} alt={solution.title} className='absolute'/>
      <div className='relative z-10'>
       <h3 className='text-3xl font-bold'>{solution.title}</h3>
       <p className='text-xl'>{solution.description}</p>
      </div>
     </li>
    ))}
   </ul>
  </GridArticle>
 );
};

export default Solutions;