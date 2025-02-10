  import { Link } from "react-router-dom";

  const Footer = () => {
    return (
      <footer className="p-6 bg-[#3EAE48] text-white font-semibold">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">© 2025 VisionLife. All Rights Reserved.</p>
          </div>
          <small className="flex flex-wrap justify-center gap-4 my-4 md:my-0">
            <Link to="/privacy-policy" className="text-sm">
              개인정보 취급방침
            </Link>
            <Link to="/TermsOfService" className="text-sm">
              이용약관
            </Link>
            <Link to="/EmailNoCollection" className="text-sm ">
              이메일무단수집거부
            </Link>
          </small>

        </div>
      </footer>
    );
  };

  export default Footer;
