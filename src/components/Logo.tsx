import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <div className="w-32 flex items-center">
      <Link to="/">
        <img
          src="/img/logo.png"
          alt="(주)비젼라이프 홈페이지 로고"
          className="w-full" />
      </Link>
    </div>
  );
};

export default Logo;