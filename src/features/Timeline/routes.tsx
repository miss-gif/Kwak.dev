import { lazy } from "react";

const TimelinePage = lazy(() => import("./pages/TimelinePage"));

const ROUTES = {
  ABOUT: "/about",
};

export const timelineRoutes = [
  { path: ROUTES.ABOUT, element: <TimelinePage /> },
];
