import { createBrowserRouter } from "react-router";
import Home from "./features/home/index";
import News from "./features/news/index";
import Profile from "./features/profile/index";
import OverView from "./features/business-overview/index.tsx";
import App from "./App.tsx";
import NewsDetail from "./features/news/pages/NewsDetail.tsx";
import Catalog from "./features/catalog";


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
        path: "/business/overview",
        Component: OverView,
      },
      {
        path: "/company/catalogs",
        Component: Catalog,
      }
    ],
  },
]);

