import imageSrc from '/img/home/p2.jpg';
import HeroSection from '../../features/profile/components/HeroSection.tsx';
import TabList from '../../components/Tab/TabList.tsx';
import TabNavLinkItem from '../../components/Tab/TabNavLinkItem.tsx';
import PageLayout from '../../layout/PageLayout.tsx';
import {Outlet} from 'react-router-dom';

const TAB_LIST = [
  {title: "회사 소개", href: "/company/profile"},
  {title: "회사 연혁", href: "/company/profile/history"},
  {title: "오시는길", href: "/company/profile/contact"},
]

const ProfileLayout = () => {
  return (
    <PageLayout title="서비스 페이지 본문">
      {/* Hero */}
      <HeroSection src={imageSrc} sectionClass="h-[410px] md:h-[635px]"/>
      <TabList className="flex justify-between bg-[#f3f3f3]">
        {TAB_LIST.map((item, idx) => (
          <TabNavLinkItem
            key={idx}
            itemClass="block w-full px-32 py-6"
            title={item.title}
            href={item.href}/>
        ))}
      </TabList>
      <Outlet/>
    </PageLayout>
  );
};

export default ProfileLayout;