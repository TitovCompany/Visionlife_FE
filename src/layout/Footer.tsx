import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#E4F2ED]">
      <section className="mx-auto text-center">
        <small>
          Copyright ⓒ visionlife. All Rights Reserved.
          <Link to="/privacy-policy" className="ml-4">
            개인정보 취급방침
          </Link>
          <Link to="/TermsOfService" className="ml-4">
            이용약관
          </Link>
          <Link to="/EmailNoCollection" className="ml-4">
            이메일무단수집거부
          </Link>
        </small>
      </section>
    </footer>
  );
};

export default Footer;
