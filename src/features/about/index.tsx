import Header from '../../layout/Header/Header.tsx';
import PageLayout from '../../layout/PageLayout.tsx';
import ProfileHero from './components/ProfileHero.tsx';
import AboutUs from './components/AboutUs.tsx';
import VisualIdentity from './components/VisualIdentity.tsx';
import BrandMeaning from './components/BrandMeaning.tsx';

const About = () => {
 return (
  <>
   <Header />
   <PageLayout title='회사 소개 페이지 본문'>
    {/* Title */}
    <ProfileHero/>
    {/* About Us */}
    <AboutUs />
    {/* Visual Identity */}
    <VisualIdentity />
    {/* Brand Meaning */}
    <BrandMeaning/>
   </PageLayout>
  </>
 );
};

export default About;