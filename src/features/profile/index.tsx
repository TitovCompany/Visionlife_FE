import HeroSection from '../../layout/HeroSection.tsx';
import TabList from '../../components/Tab/TabList.tsx';
import TabNavLinkItem from '../../components/Tab/TabNavLinkItem.tsx';
import PageLayout from '../../layout/PageLayout.tsx';
import {NavLink, Outlet} from 'react-router-dom';
import Dropdown from '../../components/Dropdown.tsx';
import Header from '../../layout/Header/Header.tsx';
import imageSrc from '../../../public/img/banner/p1.jpg';

const TAB_LIST = [
  {title: '회사 소개', href: '/company/profile'},
  {title: 'CEO 인사말', href: '/company/profile/ceo'},
  {title: '회사 연혁', href: '/company/profile/history'},
  {title: '오시는길', href: '/company/profile/contact'},
];

const ProfileLayout = () => {
  return (
    <>
      <Header />
      <PageLayout title='회사 소개 페이지 본문'>
        {/* Hero Section: 모바일에서는 h-80, sm에서는 410px, md 이상에서는 635px */}
        <HeroSection
          sectionClass='h-80 md:h-[400px] grid grid-cols-1 grid-rows-1'
          src={imageSrc}
        />

        {/* TabList: 모바일에서는 세로 full-width, sm 이상에서는 인라인 배치 */}
        <div className='bg-[#f3f3f3]'>
          <TabList className='mx-auto hidden max-w-5xl md:flex md:flex-wrap md:justify-center md:gap-8'>
            {TAB_LIST.map((item, idx) => (
              <TabNavLinkItem
                key={idx}
                as={NavLink}
                className='text-center'
                itemClass='block w-full text-xl font-semibold sm:w-auto px-4 sm:px-8 md:px-12 py-4 sm:py-6 hover:text-primary'
                title={item.title}
                href={item.href}
              />
            ))}
          </TabList>
          <Dropdown title='메뉴 보기' items={TAB_LIST} />
        </div>
        <Outlet />
      </PageLayout>
    </>
  );
};

export default ProfileLayout;
