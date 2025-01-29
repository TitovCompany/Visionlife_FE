import { createBrowserRouter } from "react-router";
import Home from "./features/home/index";
import Profile from "./features/profile/index";
import OverView from "./features/business-overview/index.tsx";
import App from "./App.tsx";

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
        path: "/company/profile",
        Component: Profile,
      },
      {
        path: "/business/overview",
        Component: OverView,
      }
    ],
  },
]);

