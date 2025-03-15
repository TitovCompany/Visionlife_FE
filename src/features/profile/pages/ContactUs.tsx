import ListCard from '../../../components/ListCard.tsx';
import {FaPhoneAlt} from 'react-icons/fa';
import {LiaFaxSolid} from 'react-icons/lia';
import {MdOutlineMail} from 'react-icons/md';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import NaverMap from '../../../components/Map/NaverMap.tsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';

const contactInfo = [
  {
    title: '대표번호',
    icon: (
      <FaPhoneAlt className='bg-primary h-12 w-12 flex-none rounded-full p-2 text-white sm:h-14 sm:w-14 sm:p-3' />
    ),
    description: '010-7563-1272',
  },
  {
    title: '팩스 (FAX)',
    icon: (
      <LiaFaxSolid className='bg-primary h-12 w-12 flex-none rounded-full p-2 text-white sm:h-14 sm:w-14 sm:p-3' />
    ),
    description: '02-555-580',
  },
  {
    title: '이메일',
    icon: (
      <MdOutlineMail className='bg-primary h-12 w-12 flex-none rounded-full p-2 text-white sm:h-14 sm:w-14 sm:p-3' />
    ),
    description: 'visionlife2018@naver.com',
  },
  {
    title: '주소',
    icon: (
      <HiOutlineLocationMarker className='bg-primary h-12 w-12 flex-none rounded-full p-2 text-white sm:h-14 sm:w-14 sm:p-3' />
    ),
    description: '서울 서초구 반포대로 21길 23 세진빌딩 3층',
  },
];

const ContactUs = () => {
  return (
    <GridLayout>
      {/* 연락처 정보 */}
      <GridArticle colStart={2} colEnd={6}>
        <ul className='mx-auto flex max-w-sm flex-col gap-6 md:grid md:max-w-4xl md:grid-cols-2 lg:col-span-2 lg:flex lg:flex-col xl:max-w-5xl'>
          {contactInfo.map((item, index) => (
            <ListCard
              key={index}
              title={item.title}
              type='_base'
              icon={item.icon}
              description={item.description}
              size='w-full h-full'
            />
          ))}
        </ul>
      </GridArticle>
      {/* 지도 영역 */}
      <GridArticle colStart={6} colEnd={12}>
        <div id='map' className='mx-auto h-64 w-full max-w-sm rounded-2xl pt-10 md:h-[600px] md:max-w-4xl lg:col-span-3 lg:mx-0 lg:h-full lg:max-w-full'>
          <NaverMap latitude={37.48771788371748} longitude={127.00855064427329} />
        </div>
      </GridArticle>
    </GridLayout>
  );
};

export default ContactUs;