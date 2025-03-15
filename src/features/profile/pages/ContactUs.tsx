import ListCard from '../../../components/ListCard.tsx';
import {FaPhoneAlt} from 'react-icons/fa';
import {LiaFaxSolid} from 'react-icons/lia';
import {MdOutlineMail} from 'react-icons/md';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import NaverMap from '../../../components/Map/NaverMap.tsx';

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
    <section>
      {/* 연락처 정보 */}
      <article className='grid w-full grid-cols-1 gap-8 md:grid-cols-1 lg:mt-10 lg:grid-cols-5 lg:gap-12'>
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

        {/* 이미지 영역 */}
        <div
          id='map'
          className='mx-auto h-64 w-full max-w-sm rounded-2xl pt-10 md:h-[600px] md:max-w-4xl lg:col-span-3 lg:mx-0 lg:h-full lg:max-w-full'>
          <NaverMap
            latitude={37.48771788371748}
            longitude={127.00855064427329}
          />
        </div>
      </article>
    </section>
  );
};

export default ContactUs;