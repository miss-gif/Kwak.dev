import { lazy } from "react";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const AboutDetailPage = lazy(() => import("./pages/AboutDetailPage"));

const ROUTES = {
  ABOUT: "/about",
  ABOUT_DETAIL: "/about/:id",
};

export const chartsRoutes = [
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.ABOUT_DETAIL, element: <AboutDetailPage /> },
];
