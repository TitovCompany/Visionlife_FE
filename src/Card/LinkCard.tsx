import {Link} from 'react-router-dom';
import clsx from 'clsx';

interface LinkCardProps {
 bgImage: string;
 title: string;
 description: string;
}

const LinkCard = ({bgImage, title, description}: LinkCardProps) => {
 return (
  <Link to='/'>
   <div className={clsx('h-full min-h-120 w-full rounded-xl border bg-cover bg-center p-6 text-white shadow-lg',
    bgImage)}>
    <div className='flex h-full min-h-full w-full flex-col justify-end rounded-lg p-4'>
     <h3 className='text-color mb-2 text-2xl font-bold'># {title}</h3>
     <h3 className='text-color mb-5 text-2xl font-bold'>
      # PROUTEX 디지털 프린터 보기
     </h3>
     <p className='mt-3 hidden'>
      {description}
     </p>
    </div>
   </div>
  </Link>
 );
};

export default LinkCard;