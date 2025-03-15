import {createBrowserRouter} from 'react-router-dom';

// ETC
import Test from './features/test/index.tsx';

// 🌍 Root Layout
import RootLayout from './layout/RootLayout.tsx';

// 🏠 메인 페이지
import Home from './features/home/index';

// 🏢 회사 정보
import Profile from './features/profile/pages/Profile.tsx';
import History from './features/profile/pages/History.tsx';
import ContactUs from './features/profile/pages/ContactUs.tsx';

// 📈 비즈니스 개요
import Business from './features/business/index.tsx';
import Overview from './features/business/pages/Overview.tsx';
import ProUtex from './features/business/pages/ProUtex.tsx';

// 📰 뉴스
import NewsLayout from './features/news/index';
import News from './features/news/pages/News.tsx';
import NewsDetail from './features/news/pages/NewsDetail.tsx';

// 📦 제품 카탈로그
import Catalog from './features/catalog';

// 📄 정책 및 약관
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import EmailNoCollection from './pages/EmailNoCollection.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import ProfileLayout from './features/profile';
import ScrollSnap from './features/test/pages/ScrollSnap.tsx';
import CEO from './features/profile/pages/CEO.tsx';
import NRect from './features/business/pages/NRect.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      // 메인 페이지
      {
        index: true,
        Component: Home,
      },

      // 회사 소개
      {
        path: '/company/profile',
        Component: ProfileLayout,
        children: [
          {index: true, Component: Profile},
          {path: 'history', Component: History},
          {path: 'ceo', Component: CEO},
          {path: 'contact', Component: ContactUs},
        ],
      },

      // 비즈니스 페이지 (사업 개요 및 아이템)
      {
        path: '/business',
        Component: Business,
        children: [
          {path: 'overview/introduction', Component: Overview},
          {path: 'n-rect/introduction', Component: NRect},
          {path: 'utex/introduction', Component: ProUtex},
        ],
      },

      // 뉴스 페이지 (언론 보도)
      {
        path: '/company/news',
        Component: NewsLayout,
        children: [
          // slug 사용 예정
          {index: true, Component: News},
          {path: ':slug', Component: NewsDetail},
        ],
      },

      // 카탈로그 (자료실)
      {
        path: '/company/catalogs',
        Component: Catalog,
      },

      // 정책 및 약관
      {
        path: '/policies',
        children: [
          {path: 'privacy', Component: PrivacyPolicy},
          {path: 'email-collection', Component: EmailNoCollection},
          {path: 'terms', Component: TermsOfService},
        ],
      },

      // 테스트 페이지
      {
        path: '/test',
        Component: Test,
      },
      {
        path: '/test/scroll',
        Component: ScrollSnap,
      },
    ],
  },
]);