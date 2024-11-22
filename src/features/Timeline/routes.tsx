import { lazy } from "react";

const TimelinePage = lazy(() => import("./components/Timeline"));

const ROUTES = {
  TIMELINE: "/timeline",
};

export const timelineRoutes = [
  { path: ROUTES.TIMELINE, element: <TimelinePage /> },
];
