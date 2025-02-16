import {useLocation} from 'react-router-dom';

const CurrentInfoPath = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((i) => i);

  return (
    <div className="w-full border-y border-gray-200">
      <div className="py-3 max-w-7xl mx-auto">
        <strong className="hidden">페이지 이동 경로</strong>
        <ul className="text-base flex items-center gap-3">
          <li>홈</li>
          {pathnames.map((value, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={index}>
                <span>{'>'}</span>
                {isLast
                  ? <span>{value}</span>
                  : <span>{routeTo}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrentInfoPath;