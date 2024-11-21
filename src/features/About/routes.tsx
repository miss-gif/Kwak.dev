import { lazy } from "react";

const AboutPage = lazy(() => import("./pages/AboutPage"));

export const aboutRoutes = [{ path: "/about", element: <AboutPage /> }];
