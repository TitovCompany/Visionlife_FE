import {FaPhoneAlt} from 'react-icons/fa';
import {LiaFaxSolid} from 'react-icons/lia';
import {MdOutlineMail} from 'react-icons/md';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Header from '../../../layout/Header/Header';
import PageLayout from '../../../layout/PageLayout.tsx';
import GridArticle from '../../../layout/Grid/GridArticle.tsx';
import GridLayout from '../../../layout/Grid/GridLayout.tsx';
import NaverMap from '../../../components/Map/NaverMap.tsx';
import ListCard from '../../../components/Card/ListCard.tsx';

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
  <>
   <Header />
   <PageLayout title='회사 소개 페이지 본문'>
    <GridLayout rows={2} className='py-32'>
     {/* 연락처 정보 */}
     <GridArticle colStart={2} colEnd={12}>
      <div className='text-primary text-xl leading-8'>
       <h2 className='text-3xl font-bold mb-10'>Contact</h2>
       <p>
        Proutex는 2000년에 설립되어, 기술력과 신뢰를 바탕으로 다양한 프로젝트를 성공적으로 수행해 왔습니다.
       </p>
       <p>
        고객과의 신뢰를 최우선으로 생각하며, 최상의 솔루션을 제공합니다. 언제든 문의해 주세요.
       </p>
      </div>
      <ul className='mt-10 grid grid-cols-2 grid-rows-2 gap-6'>
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
     <GridArticle colStart={2} colEnd={12} className='mt-20'>
      <h2 className='text-3xl font-bold mb-10'>Location</h2>
      <div
       id='map'
       className='mx-auto h-64 w-full max-w-sm rounded-2xl pt-10 md:h-[600px] md:max-w-4xl lg:col-span-3 lg:mx-0 lg:h-full lg:max-w-full'>
       <NaverMap latitude={37.48771788371748} longitude={127.00855064427329} />
      </div>
     </GridArticle>
    </GridLayout>
   </PageLayout>
  </>
 );
};

export default ContactUs;