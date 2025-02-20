import imageSrc from '/img/home/p2.jpg';
import HeroSection from '../../features/profile/components/HeroSection.tsx';
import TabList from '../../components/Tab/TabList.tsx';
import TabNavLinkItem from '../../components/Tab/TabNavLinkItem.tsx';
import PageLayout from '../../layout/PageLayout.tsx';
import {NavLink, Outlet} from 'react-router-dom';

const TAB_LIST = [
  {title: '회사 소개', href: '/company/profile'},
  {title: '회사 연혁', href: '/company/profile/history'},
  {title: '오시는길', href: '/company/profile/contact'},
];

const ProfileLayout = () => {
  return (
    <PageLayout
      title="회사 소개 페이지 본문"
      isFullHeight={false}
      isMinHeight={false}>
      {/* Hero Section: 모바일에서는 h-80, sm에서는 410px, md 이상에서는 635px */}
      <HeroSection
        src={imageSrc}
        sectionClass="h-80 sm:h-[410px] md:h-[635px]"
      />

      {/* TabList: 모바일에서는 세로 full-width, sm 이상에서는 인라인 배치 */}
      <div className="bg-[#f3f3f3]">
        <TabList className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
          {TAB_LIST.map((item, idx) => (
            <TabNavLinkItem
              key={idx}
              as={NavLink}
              className="text-center"
              itemClass="block w-full text-xl font-semibold sm:w-auto px-4 sm:px-8 md:px-12 py-4 sm:py-6 hover:text-primary"
              title={item.title}
              href={item.href}
            />
          ))}
        </TabList>
      </div>
      <Outlet />
    </PageLayout>
  );
};

export default ProfileLayout;
