import {Link} from 'react-router-dom';
import {memo, useMemo} from 'react';

const Footer = memo(() => {
  const policy = useMemo(
    () => [
      {name: '사이트맵', path: '/misc/sitemap'},
      {name: '개인정보 처리방침', path: '/policies/privacy'},
      {name: '이용약관', path: '/policies/terms'},
      {name: '이메일 무단수집거부', path: '/policies/email-collection'},
    ],
    []
  );

  return (
    <footer className='border-t border-t-gray-200 py-10'>
     <div className='flex flex-col items-center justify-between gap-4 px-4 text-base'>
      <div className='flex flex-wrap justify-center gap-4 text-sm'>
       {policy.map((item, index) => (
        <Link
         key={index}
         to={item.path}
         className='hover:text-primary transition'>
         {item.name}
        </Link>
       ))}
      </div>
      <p className='text-center text-sm'>
       © 2025 PROUTEX. All Rights Reserved.
      </p>
     </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;