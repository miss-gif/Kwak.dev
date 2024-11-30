import { lazy } from "react";

const TimelinePage = lazy(() => import("./pages/TimelinePage"));

const ROUTES = {
  TIMELINE: "/timeline",
};

export const timelineRoutes = [
  { path: ROUTES.TIMELINE, element: <TimelinePage /> },
];
