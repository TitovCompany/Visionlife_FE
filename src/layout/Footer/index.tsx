import { Link } from "react-router-dom";
import FooterColumn from './FooterColumn.tsx';
import {memo, useMemo} from 'react';

const Footer = memo(() => {
  const footer = useMemo(() => [
    {
      title: "기업소개",
      subLinks: [
        { name: "회사 소개", path: "/company/profile" },
        { name: "회사 연혁", path: "/company/profile/history" },
        { name: "오시는 길", path: "/company/profile/contact" },
      ],
    },
    {
      title: "사업개요",
      subLinks: [
        { name: "사업 소개", path: "/business/overview/introduction" },
        { name: "친환경 무 폐수 날염", path: "/business/utex/introduction" },
      ],
    },
    {
      title: "언론보도",
      subLinks: [
        { name: "언론보도", path: "/company/news" },
      ],
    },
    {
      title: "카탈로그",
      subLinks: [
        { name: "자료실", path: "/company/catalogs" },
      ],
    },
  ],[]);
  const policy = useMemo(() => [
    { name: "개인정보 처리방침", path: "/policies/privacy" },
    { name: "이용약관", path: "/policies/terms" },
    { name: "이메일 무단수집거부", path: "/policies/email-collection" },
  ], []);

  return (
    <footer className="border-t border-t-gray-200 bg-[#f3f3f3] py-10">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto flex flex-col gap-5 md:flex-row md:gap-0 justify-around text-base">
          {footer.map((item, index) => (
            <FooterColumn
              key={index}
              title={item.title}
              subLinks={item.subLinks}/>
          ))}
        </div>

        {/*선*/}
        <div className="border-t border-t-gray-200 my-8"></div>

        {/*저작권*/}
        <div className="px-4 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-base">
          <p className=" text-center">© 2025 VisionLife. All Rights Reserved.</p>
          <div className="text-sm flex flex-wrap justify-center gap-4">
            {policy.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className=" hover:text-primary transition">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
