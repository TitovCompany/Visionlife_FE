import { createBrowserRouter } from "react-router";

// Root
import App from "./App.tsx";

// 페이지
import Home from "./features/home/index";
import News from "./features/news/index";
import Profile from "./features/profile/index";
import Business from "./features/business-overview/index.tsx";
import Catalog from "./features/catalog";

// 상세 페이지
import NewsDetail from "./features/news/pages/NewsDetail.tsx";
import Overview from "./features/business-overview/pages/Overview.tsx";
import Utex from "./features/business-overview/pages/Utex.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/company/news",
        Component: News,
        children: [
          {
            // slug 사용 예정
            path: ":id",
            Component: NewsDetail,
          },
        ],
      },
      {
        path: "/company/profile",
        Component: Profile,
      },
      {
        path: "/business",
        Component: Business,
        children: [
          { path: "overview/:slug", Component: Overview },
          { path: "utex/:slug", Component: Utex },
        ]
      },
      {
        path: "/company/catalogs",
        Component: Catalog,
      }
    ],
  },
]);

