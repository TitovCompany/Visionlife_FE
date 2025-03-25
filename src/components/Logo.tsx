import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {memo} from 'react';

const Logo = ({className}: {className?: string}) => {
 return (
  <div className={clsx('flex justify-center', className)}>
   <Link to='/'>
    <img src='/img/logo.webp' alt='(주)비젼라이프 홈페이지 로고' className='h-full w-full object-cover'/>
   </Link>
  </div>
 );
};

export default memo(Logo);