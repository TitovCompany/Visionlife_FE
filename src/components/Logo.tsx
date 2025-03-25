import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {memo} from 'react';

const Logo = ({className}: {className?: string}) => {
 return (
  <div className={clsx('flex justify-center', 'w-full h-full', className)}>
   <Link to='/'>
    <img src='/logo.svg' alt='(주)비젼라이프 홈페이지 로고' className='object-contain' width={100} height={43}/>
   </Link>
  </div>
 );
};

export default memo(Logo);