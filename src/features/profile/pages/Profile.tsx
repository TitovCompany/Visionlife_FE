import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import AboutUs from '../components/Profile/AboutUs.tsx';
import VisualIdentity from '../components/Profile/VisualIdentity.tsx';
import ProfileHero from '../components/Profile/ProfileHero.tsx';
import BrandMeaning from '../components/Profile/BrandMeaning.tsx';

gsap.registerPlugin(ScrollTrigger);
const Profile = () => {
 return (
  <>
   {/* Title */}
   <ProfileHero/>
   {/* About Us */}
   <AboutUs />
   {/* Visual Identity */}
   <VisualIdentity />
   {/* Brand Meaning */}
   <BrandMeaning/>
  </>
 );
};

export default Profile;