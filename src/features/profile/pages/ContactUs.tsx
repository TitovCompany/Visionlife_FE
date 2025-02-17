import ListCard from '../../../components/ListCard.tsx';
import { FaPhoneAlt } from 'react-icons/fa';
import { LiaFaxSolid } from 'react-icons/lia';
import { MdOutlineMail } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import SectionLayout from '../../../layout/SectionLayout.tsx';

const ContactUs = () => {
  return (
    <SectionLayout
      title="CONTACT US"
      className="mx-auto py-12 sm:py-16 lg:py-20 flex max-w-6xl flex-col items-center justify-center"
      titleClassName="py-6 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center"
      fullHeight={false}
    >
      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* 연락처 정보 */}
        <ul className="flex flex-col gap-6 lg:col-span-2">
          <ListCard
            title="대표번호"
            type="_base"
            icon={
              <FaPhoneAlt className="bg-primary h-12 w-12 sm:h-14 sm:w-14 rounded-full p-2 sm:p-3 text-white" />
            }
            description= "010-7563-1272"
            size="w-full h-full"
          />
          <ListCard
            title="팩스 (FAX)"
            type="_base"
            icon={
              <LiaFaxSolid className="bg-primary h-12 w-12 sm:h-14 sm:w-14 rounded-full p-2 sm:p-3 text-white" />
            }
            description="02-555-580"
            size="w-full h-full"
          />
          <ListCard
            title="이메일"
            type="_base"
            icon={
              <MdOutlineMail className="bg-primary h-12 w-12 sm:h-14 sm:w-14 rounded-full p-2 sm:p-3 text-white" />
            }
            description="visionlife2018@naver.com"
            size="w-full h-full"
          />
          <ListCard
            title="주소"
            type="_base"
            icon={
              <HiOutlineLocationMarker className="bg-primary h-12 w-12 sm:h-14 sm:w-16 rounded-full p-2 sm:p-3 text-white" />
            }
            description="서울 서초구 반포대로 21길 23 세진빌딩 3층"
            size="w-full h-full"
          />
        </ul>
        {/* 이미지 영역 */}
        <div className="lg:col-span-3">
          <img
            src="/img/contactus/map.png"
            alt="Contact Us Map"
            className="w-full h-full object-cover object-center transform scale-110 md:scale-100"
          />

        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactUs;
