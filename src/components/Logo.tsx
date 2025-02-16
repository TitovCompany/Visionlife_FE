import {Link} from 'react-router-dom';
import clsx from 'clsx';

const Logo = ({
  type
}: {
  type: "_mobile" | "_desktop"
}) => {
  const imgClass = clsx(
    type === "_mobile" && "max-w-30",
    type === "_desktop" && "w-full",);

  return (
    <div className="w-32 flex items-center">
      <Link to="/">
        <img
          src="/img/logo.png"
          alt="(주)비젼라이프 홈페이지 로고"
          className={imgClass} />
      </Link>
    </div>
  );
};

export default Logo;