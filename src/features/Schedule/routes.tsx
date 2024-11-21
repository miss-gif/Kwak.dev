import { lazy } from "react";

const SchedulePage = lazy(() => import("./pages/SchedulePage"));

const ROUTES = {
  SCHEDULE: "/schedule",
};

export const scheduleRoutes = [
  { path: ROUTES.SCHEDULE, element: <SchedulePage /> },
];
