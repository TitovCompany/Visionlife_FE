import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm justify-items-center">
          {/*기업소개*/}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/" className="hover:text-primary transition">
                기업소개
              </Link>
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  회사소개
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  비전
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  연혁 및 조직도
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition">
                  특허&시험 성적서
                </Link>
              </li>
            </ul>
          </div>

          {/*사업개요*/}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/business" className="hover:text-primary transition">
                사업개요
              </Link>
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/business" className="hover:text-primary transition">
                  친환경 무 폐수 날염
                </Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-primary transition">
                  타 제품과의 비교
                </Link>
              </li>
            </ul>
          </div>

          {/*뉴스*/}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/company/news" className="hover:text-primary transition">
                언론보도
              </Link>
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/company/news" className="hover:text-primary transition">
                  언론보도
                </Link>
              </li>
              <li>
                <Link to="/company/news" className="hover:text-primary transition">
                  언론보도
                </Link>
              </li>
            </ul>
          </div>

          {/*카탈로그*/}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/company/catalogs" className="hover:text-primary transition">
                카탈로그
              </Link>
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link to="/company/catalogs" className="hover:text-primary transition">
                  자료실
                </Link>
              </li>
              <li>
                <Link to="/company/catalogs" className="hover:text-primary transition">
                  자료실
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*선*/}
        <div className="border-t border-gray-700 my-8"></div>

        {/*저작권*/}
        <div className="flex flex-col items-center gap-4 text-xs">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="text-sm hover:text-primary transition">
              개인정보 취급방침
            </Link>
            <Link to="/TermsOfService" className="text-sm hover:text-primary transition">
              이용약관
            </Link>
            <Link to="/EmailNoCollection" className="text-sm hover:text-primary transition">
              이메일 무단수집거부
            </Link>
          </div>
          <p className="text-center">© 2025 VisionLife. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
