import {Link} from 'react-router-dom';
import clsx from 'clsx';

const Logo = ({className}: {className?: string}) => {
  return (
    <div className={clsx('flex justify-center', className)}>
      <Link to='/'>
        <img
          src='/img/logo.webp'
          alt='(주)비젼라이프 홈페이지 로고'
          className='w-full h-full object-cover'
        />
      </Link>
    </div>
  );
};

export default Logo;