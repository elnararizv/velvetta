import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import('../pages/Home/Home'))
const Menu = lazy(() => import("../pages/Menu/Menu"));
const ProductDetail = lazy(() =>
  import("../pages/ProductDetail/ProductDetail")
);
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Auth = lazy(() => import("../pages/Auth/Auth"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));



const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "product/:id",
      element: <ProductDetail />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ],
},
{
  path: "/auth",
  element: <Auth />,
},
{
  path: "*",
  element: <NotFound />,
},

])

export default router