import {createHashRouter} from 'react-router-dom';

// Root
import App from './layout/App.tsx';

// 페이지
import Home from './features/home/index';
import News from './features/news/index';
import CompanyProfile from './features/profile/index';
import Business from './features/business-overview/index.tsx';
import Catalog from './features/catalog';
import Test from './features/test';

// 상세 페이지
import NewsDetail from './features/news/pages/NewsDetail.tsx';
import Overview from './features/business-overview/pages/Overview.tsx';
import Utex from './features/business-overview/pages/Utex.tsx';
import History from './features/profile/pages/History.tsx';
import ContactUs from './features/profile/pages/ContactUs.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import EmailNoCollection from "./pages/EmailNoCollection.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";

export const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/company/profile',
        Component: CompanyProfile,
        children: [
          {path: 'history', Component: History},
          {path: 'contact', Component: ContactUs}
        ],
      },
      {
        path: '/business',
        Component: Business,
        children: [
          {path: 'overview/:slug', Component: Overview},
          {path: 'utex/:slug', Component: Utex},
        ],
      },
      {
        path: '/company/news',
        Component: News,
        children: [
          // slug 사용 예정
          {path: ':id', Component: NewsDetail},
        ],
      },
      {
        path: '/company/catalogs',
        Component: Catalog,
      },
      {
        path: '/test',
        Component: Test,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/EmailNoCollection",
        Component: EmailNoCollection,
      },
      {
        path: "/TermsOfService",
        Component: TermsOfService,
      }
    ],
  },
]);
