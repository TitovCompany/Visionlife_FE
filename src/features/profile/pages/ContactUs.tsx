import ListCard from '../../../components/ListCard.tsx';
import {FaPhoneAlt} from 'react-icons/fa';
import {LiaFaxSolid} from 'react-icons/lia';
import {MdOutlineMail} from 'react-icons/md';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import DummyImgBox from '../../../components/DummyImgBox.tsx';
import SectionLayout from '../../../layout/SectionLayout.tsx';

const ContactUs = () => {
  return (
    <SectionLayout
      title="CONTACT US"
      className="mx-auto py-20 flex max-w-6xl flex-col items-center justify-center"
      titleClassName="py-10 text-4xl font-semibold"
      fullHeight={false}>
      <div className="grid h-[600px] w-full grid-cols-5 grid-rows-4 gap-x-2">
        <ul className="col-span-2 row-span-4 grid grid-rows-4 gap-y-1">
          <ListCard
            title="전화번호"
            type="_base"
            icon={
              <FaPhoneAlt className="bg-primary h-14 w-14 rounded-full p-3 text-white" />
            }
            description="02-555-1202"
            size="w-full h-full"
          />
          <ListCard
            title="팩스 (FAX)"
            type="_base"
            icon={
              <LiaFaxSolid className="bg-primary h-14 w-14 rounded-full p-3 text-white" />
            }
            description="02-555-5801"
            size="w-full h-full"
          />
          <ListCard
            title="이메일"
            type="_base"
            icon={
              <MdOutlineMail className="bg-primary h-14 w-14 rounded-full p-3 text-white" />
            }
            description="visionlife2018@naver.com"
            size="w-full h-full"
          />
          <ListCard
            title="주소"
            type="_base"
            icon={
              <HiOutlineLocationMarker className="bg-primary h-14 w-16 rounded-full p-3 text-white" />
            }
            description="서울 서초구 반포대로 21길 23 세진빌딩 3층"
            size="w-full h-full"
          />
        </ul>
        <div className="col-span-3 row-span-4 grid-cols-2">
          <DummyImgBox width="w-full" height="h-full" isCircle={false} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactUs;