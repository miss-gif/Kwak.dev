import { lazy } from "react";

const AboutPage = lazy(() => import("./pages/AboutPage"));

const ROUTES = {
  ABOUT: "/about",
};

export const aboutRoutes = [{ path: ROUTES.ABOUT, element: <AboutPage /> }];
